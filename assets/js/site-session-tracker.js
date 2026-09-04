(() => {
  "use strict";

  // Count only pages opened directly. Visualization iframes are represented by
  // their top-level Explore page and must not inflate the page-view totals.
  if (window.top !== window.self) return;

  const ENDPOINT =
    "https://namedata-api.jerome-roehm.workers.dev/analytics/page-view";
  const SESSION_KEY = "namedata.analytics.session-id.v1";
  const UUID_PATTERN =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  const QUERY_ALLOWLIST = new Set([
    "section",
    "id",
    "variant",
    "mode",
    "preview"
  ]);

  function randomId() {
    const webCrypto = globalThis.crypto;
    if (typeof webCrypto?.randomUUID === "function") {
      return webCrypto.randomUUID();
    }

    const bytes = new Uint8Array(16);
    if (typeof webCrypto?.getRandomValues === "function") {
      webCrypto.getRandomValues(bytes);
    } else {
      for (let index = 0; index < bytes.length; index += 1) {
        bytes[index] = Math.floor(Math.random() * 256);
      }
    }
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex = Array.from(bytes, byte => byte.toString(16).padStart(2, "0"));
    return [
      hex.slice(0, 4).join(""),
      hex.slice(4, 6).join(""),
      hex.slice(6, 8).join(""),
      hex.slice(8, 10).join(""),
      hex.slice(10).join("")
    ].join("-");
  }

  function getSessionId() {
    try {
      const existing = sessionStorage.getItem(SESSION_KEY);
      if (UUID_PATTERN.test(existing || "")) return existing;

      const created = randomId();
      // Store the ID before making the request so quick navigations reuse it.
      sessionStorage.setItem(SESSION_KEY, created);
      return created;
    } catch (error) {
      // Browsers that block sessionStorage still get anonymous page views, but
      // cannot be grouped reliably into a navigation session.
      return randomId();
    }
  }

  function normalizedPath() {
    const params = new URLSearchParams();
    for (const [key, value] of new URLSearchParams(location.search)) {
      if (QUERY_ALLOWLIST.has(key) && value) params.append(key, value);
    }
    const query = params.toString();
    return `${location.pathname}${query ? `?${query}` : ""}`;
  }

  function safeSlug(value) {
    return /^[a-z0-9-]{1,80}$/.test(value || "") ? value : null;
  }

  function collectPageView() {
    const params = new URLSearchParams(location.search);
    return {
      sessionId: getSessionId(),
      pageViewId: randomId(),
      path: normalizedPath(),
      pageTitle: document.title.slice(0, 160),
      section: safeSlug(params.get("section")),
      visualizationId: safeSlug(params.get("id") || params.get("viz")),
      variant: safeSlug(params.get("variant") || params.get("mode")),
      referrer: document.referrer || null
    };
  }

  function recordPageView() {
    fetch(ENDPOINT, {
      method: "POST",
      mode: "cors",
      credentials: "omit",
      cache: "no-store",
      keepalive: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(collectPageView())
    }).catch(() => {
      // Analytics must never interfere with the site if the service is down.
    });
  }

  // pageshow counts a real page presentation, including a Back/Forward Cache
  // restore. It does not fire for hover, scrolling, graph controls, or variant
  // buttons that only replace the current URL.
  window.addEventListener("pageshow", recordPageView);
})();
