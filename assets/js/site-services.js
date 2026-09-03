export const SITE_SERVICES = Object.freeze({
  apiBaseUrl: "https://namedata-api.jerome-roehm.workers.dev",
  turnstileSiteKey: "0x4AAAAAAElEic1hxYySqLgv"
});

export function serviceUrl(pathname) {
  const base = SITE_SERVICES.apiBaseUrl.replace(/\/+$/, "");
  const path = String(pathname || "").replace(/^\/+/, "");
  return `${base}/${path}`;
}

export async function fetchServiceJson(pathname, options = {}) {
  const response = await fetch(serviceUrl(pathname), {
    ...options,
    headers: {
      Accept: "application/json",
      ...(options.body ? {"Content-Type": "application/json"} : {}),
      ...(options.headers || {})
    }
  });

  const contentType = response.headers.get("Content-Type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    throw new Error("The site service returned an unexpected response.");
  }

  const data = await response.json().catch(() => {
    throw new Error("The site service returned invalid JSON.");
  });

  if (!response.ok) {
    throw new Error(data.error || `Request failed (HTTP ${response.status}).`);
  }

  return data;
}
