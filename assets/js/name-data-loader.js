/**
 * Shared loader for the compact U.S. baby-name packets.
 *
 * Default repository layout:
 *
 *   assets/js/name-data-loader.js
 *   data/2025/manifest.json
 *
 * The default data root is resolved relative to this module.
 */

const DEFAULT_DATA_ROOT = new URL("../../data/2025/", import.meta.url);

class NameDataError extends Error {
  constructor(message, details = {}) {
    super(message);
    this.name = "NameDataError";
    this.details = details;
  }
}

function ensureDirectoryUrl(value, baseUrl = import.meta.url) {
  const url = new URL(value, baseUrl);

  if (!url.pathname.endsWith("/")) {
    url.pathname += "/";
  }

  return url;
}

function normalizeNameKey(name) {
  return String(name ?? "").trim().toLowerCase();
}

function normalizeStateCode(state) {
  return String(state ?? "").trim().toUpperCase();
}

function rowToObject(fields, row) {
  const output = {};

  for (let i = 0; i < fields.length; i += 1) {
    output[fields[i]] = row[i] ?? null;
  }

  return output;
}

function rowsToObjects(fields, rows) {
  return rows.map((row) => rowToObject(fields, row));
}

function formatBucketFilename(bucketId, config) {
  const width = Number(config.filenameWidth);
  const paddedId = String(bucketId).padStart(width, "0");

  return (
    `${config.directory}/` +
    `${config.filenamePrefix}${paddedId}${config.filenameSuffix}`
  );
}

class NameDataClient {
  constructor({ dataRoot = DEFAULT_DATA_ROOT } = {}) {
    this.dataRoot = ensureDirectoryUrl(dataRoot);
    this._jsonPromiseCache = new Map();
    this._bucketPromiseCache = new Map();
    this._hashPromiseCache = new Map();
    this._manifestPromise = null;
    this._schemaPromise = null;
  }

  configure({ dataRoot } = {}) {
    if (dataRoot !== undefined) {
      this.dataRoot = ensureDirectoryUrl(
        dataRoot,
        typeof document !== "undefined"
          ? document.baseURI
          : import.meta.url,
      );
      this.clearCache();
    }

    return this;
  }

  clearCache() {
    this._jsonPromiseCache.clear();
    this._bucketPromiseCache.clear();
    this._hashPromiseCache.clear();
    this._manifestPromise = null;
    this._schemaPromise = null;
  }

  normalizeName(name) {
    return normalizeNameKey(name);
  }

  normalizeState(state) {
    return normalizeStateCode(state);
  }

  async _fetchJson(relativePath, { force = false } = {}) {
    const url = new URL(relativePath, this.dataRoot).href;

    if (force) {
      this._jsonPromiseCache.delete(url);
    }

    if (!this._jsonPromiseCache.has(url)) {
      const request = fetch(url, {
        // Revalidate repository JSON on each page load. The in-memory
        // promise cache still prevents duplicate requests within the page,
        // while avoiding stale schema/packet mismatches after a rebuild.
        cache: force ? "reload" : "no-cache",
        headers: { Accept: "application/json" },
      })
        .then(async (response) => {
          if (!response.ok) {
            throw new NameDataError(
              `Could not load ${relativePath}: HTTP ${response.status}.`,
              {
                relativePath,
                url,
                status: response.status,
              },
            );
          }

          try {
            return await response.json();
          } catch (error) {
            throw new NameDataError(
              `The response for ${relativePath} was not valid JSON.`,
              {
                relativePath,
                url,
                cause: error,
              },
            );
          }
        })
        .catch((error) => {
          this._jsonPromiseCache.delete(url);
          throw error;
        });

      this._jsonPromiseCache.set(url, request);
    }

    return this._jsonPromiseCache.get(url);
  }

  async loadManifest({ force = false } = {}) {
    if (force) {
      this._manifestPromise = null;
    }

    if (!this._manifestPromise) {
      this._manifestPromise = this._fetchJson(
        "manifest.json",
        { force },
      ).catch((error) => {
        this._manifestPromise = null;
        throw error;
      });
    }

    return this._manifestPromise;
  }

  async loadSchema({ force = false } = {}) {
    if (force) {
      this._schemaPromise = null;
    }

    if (!this._schemaPromise) {
      this._schemaPromise = this.loadManifest({ force })
        .then((manifest) => this._fetchJson(
          manifest.schema,
          { force },
        ))
        .catch((error) => {
          this._schemaPromise = null;
          throw error;
        });
    }

    return this._schemaPromise;
  }

  async preload() {
    const [manifest, schema] = await Promise.all([
      this.loadManifest(),
      this.loadSchema(),
    ]);

    return { manifest, schema };
  }

  async _hashValueForKey(nameKey) {
    if (!nameKey) {
      throw new NameDataError("A nonempty name is required.");
    }

    if (!globalThis.crypto?.subtle) {
      throw new NameDataError(
        "Web Crypto is unavailable. Serve the page over HTTPS or localhost.",
      );
    }

    if (!this._hashPromiseCache.has(nameKey)) {
      const promise = (async () => {
        const input = new TextEncoder().encode(nameKey);
        const digestBuffer = await globalThis.crypto.subtle.digest(
          "SHA-256",
          input,
        );
        const digest = new Uint8Array(digestBuffer);

        let value = 0n;

        for (let i = 0; i < 8; i += 1) {
          value = (value << 8n) | BigInt(digest[i]);
        }

        return value;
      })().catch((error) => {
        this._hashPromiseCache.delete(nameKey);
        throw error;
      });

      this._hashPromiseCache.set(nameKey, promise);
    }

    return this._hashPromiseCache.get(nameKey);
  }

  async bucketAssignments(name) {
    const nameKey = normalizeNameKey(name);

    if (!nameKey) {
      throw new NameDataError("Enter a name.");
    }

    const [manifest, hashValue] = await Promise.all([
      this.loadManifest(),
      this._hashValueForKey(nameKey),
    ]);

    const nationalBucketCount = Number(
      manifest.national.bucketCount,
    );
    const stateBucketCount = Number(
      manifest.state.bucketCount,
    );

    const nationalBucket = Number(
      hashValue & BigInt(nationalBucketCount - 1),
    );
    const stateBucket = Number(
      hashValue & BigInt(stateBucketCount - 1),
    );

    return {
      nameKey,
      nationalBucket,
      stateBucket,
      nationalPath: formatBucketFilename(
        nationalBucket,
        manifest.national,
      ),
      statePath: formatBucketFilename(
        stateBucket,
        manifest.state,
      ),
    };
  }

  async _loadBucket(kind, bucketId) {
    if (kind !== "national" && kind !== "state") {
      throw new NameDataError(
        `Unknown bucket kind: ${kind}.`,
      );
    }

    const manifest = await this.loadManifest();
    const config = manifest[kind];
    const relativePath = formatBucketFilename(
      bucketId,
      config,
    );
    const cacheKey = `${kind}:${bucketId}`;

    if (!this._bucketPromiseCache.has(cacheKey)) {
      const promise = this._fetchJson(relativePath)
        .catch((error) => {
          this._bucketPromiseCache.delete(cacheKey);
          throw error;
        });

      this._bucketPromiseCache.set(cacheKey, promise);
    }

    return this._bucketPromiseCache.get(cacheKey);
  }

  _decodeNationalEntry(
    nameKey,
    bucketId,
    entry,
    schema,
  ) {
    const [
      displayName,
      summaryValues,
      yearlyRows,
    ] = entry;

    return {
      key: nameKey,
      displayName,
      bucketId,
      summary: rowToObject(
        schema.national_summary_fields,
        summaryValues,
      ),
      yearly: rowsToObjects(
        schema.national_yearly_fields,
        yearlyRows,
      ),
    };
  }

  _decodeStateEntry(
    nameKey,
    bucketId,
    entry,
    schema,
  ) {
    const [
      displayName,
      yearlyRows,
      allTimeRows,
    ] = entry;

    const stateCodes = schema.state_ids ?? {};

    const yearly = rowsToObjects(
      schema.state_yearly_fields,
      yearlyRows,
    ).map((row) => ({
      ...row,
      state: stateCodes[String(row.state_id)] ?? null,
    }));

    const allTime = rowsToObjects(
      schema.state_all_time_fields,
      allTimeRows,
    ).map((row) => ({
      ...row,
      state: stateCodes[String(row.state_id)] ?? null,
    }));

    return {
      key: nameKey,
      displayName,
      bucketId,
      yearly,
      allTime,
    };
  }

  async getNationalName(name) {
    const assignments = await this.bucketAssignments(name);
    const [schema, bucket] = await Promise.all([
      this.loadSchema(),
      this._loadBucket(
        "national",
        assignments.nationalBucket,
      ),
    ]);

    const entry = bucket.n?.[assignments.nameKey];

    if (!entry) {
      return null;
    }

    return this._decodeNationalEntry(
      assignments.nameKey,
      assignments.nationalBucket,
      entry,
      schema,
    );
  }

  async getStateName(name) {
    const assignments = await this.bucketAssignments(name);
    const [schema, bucket] = await Promise.all([
      this.loadSchema(),
      this._loadBucket(
        "state",
        assignments.stateBucket,
      ),
    ]);

    const entry = bucket.n?.[assignments.nameKey];

    if (!entry) {
      return null;
    }

    return this._decodeStateEntry(
      assignments.nameKey,
      assignments.stateBucket,
      entry,
      schema,
    );
  }

  async getNamePacket(
    name,
    { includeState = true } = {},
  ) {
    const assignments = await this.bucketAssignments(name);

    const [schema, nationalBucket] = await Promise.all([
      this.loadSchema(),
      this._loadBucket(
        "national",
        assignments.nationalBucket,
      ),
    ]);

    const nationalEntry = (
      nationalBucket.n?.[assignments.nameKey]
    );

    if (!nationalEntry) {
      return {
        query: String(name ?? ""),
        key: assignments.nameKey,
        assignments,
        national: null,
        state: null,
      };
    }

    const national = this._decodeNationalEntry(
      assignments.nameKey,
      assignments.nationalBucket,
      nationalEntry,
      schema,
    );

    let state = null;

    if (includeState) {
      const stateBucket = await this._loadBucket(
        "state",
        assignments.stateBucket,
      );

      const stateEntry = (
        stateBucket.n?.[assignments.nameKey]
      );

      if (stateEntry) {
        state = this._decodeStateEntry(
          assignments.nameKey,
          assignments.stateBucket,
          stateEntry,
          schema,
        );
      }
    }

    return {
      query: String(name ?? ""),
      key: assignments.nameKey,
      assignments,
      national,
      state,
    };
  }

  findNationalYear(nationalPacket, year) {
    const targetYear = Number(year);

    if (!nationalPacket || !Number.isFinite(targetYear)) {
      return null;
    }

    return (
      nationalPacket.yearly.find(
        (row) => Number(row.year) === targetYear,
      )
      ?? null
    );
  }

  findStateYear(statePacket, state, year) {
    const stateCode = normalizeStateCode(state);
    const targetYear = Number(year);

    if (
      !statePacket
      || !stateCode
      || !Number.isFinite(targetYear)
    ) {
      return null;
    }

    return (
      statePacket.yearly.find(
        (row) => (
          row.state === stateCode
          && Number(row.year) === targetYear
        ),
      )
      ?? null
    );
  }

  findStateAllTime(statePacket, state) {
    const stateCode = normalizeStateCode(state);

    if (!statePacket || !stateCode) {
      return null;
    }

    return (
      statePacket.allTime.find(
        (row) => row.state === stateCode,
      )
      ?? null
    );
  }

  sortStateRepresentation(
    statePacket,
    {
      mode = "c",
      ascending = false,
    } = {},
  ) {
    if (!statePacket) {
      return [];
    }

    if (!["m", "f", "c"].includes(mode)) {
      throw new NameDataError(
        "Representation mode must be 'm', 'f', or 'c'.",
      );
    }

    const proportionField = `proportion_${mode}`;
    const direction = ascending ? 1 : -1;

    return statePacket.allTime
      .slice()
      .sort((a, b) => {
        const difference = (
          Number(a[proportionField] ?? 0)
          - Number(b[proportionField] ?? 0)
        );

        if (difference !== 0) {
          return direction * difference;
        }

        return String(a.state).localeCompare(
          String(b.state),
        );
      });
  }

  async loadGlobalTable(
    manifestKey,
    replacements = {},
  ) {
    const manifest = await this.loadManifest();
    let relativePath = manifest.globals?.[manifestKey];

    if (!relativePath) {
      throw new NameDataError(
        `Unknown global table: ${manifestKey}.`,
      );
    }

    for (const [key, value] of Object.entries(
      replacements,
    )) {
      relativePath = relativePath.replace(
        `{${key}}`,
        String(value),
      );
    }

    if (relativePath.includes("{")) {
      throw new NameDataError(
        `Missing replacement for global path: ${relativePath}.`,
      );
    }

    const payload = await this._fetchJson(relativePath);

    if (!Array.isArray(payload.f) || !Array.isArray(payload.r)) {
      throw new NameDataError(
        `${relativePath} is not a compact table payload.`,
      );
    }

    return {
      version: payload.v ?? null,
      fields: payload.f,
      rows: payload.r,
      records: rowsToObjects(
        payload.f,
        payload.r,
      ),
      path: relativePath,
    };
  }
}

const NameData = new NameDataClient();

if (typeof window !== "undefined") {
  window.NameData = NameData;
  window.NameDataClient = NameDataClient;
  window.NameDataError = NameDataError;
}

export {
  NameData,
  NameDataClient,
  NameDataError,
  normalizeNameKey,
  normalizeStateCode,
};

export default NameData;
