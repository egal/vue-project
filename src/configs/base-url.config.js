let baseUrl;
let tempApiBaseUrl;
if (process.env.NODE_ENV === "production") {
  baseUrl = window.location.origin + "/api";
} else {
  baseUrl = process.env.API_BASE_URL ?? "https://domain";
  if (baseUrl.endsWith("/")) {
    tempApiBaseUrl = baseUrl.replace(/\/+$/, "");
  }
  baseUrl = tempApiBaseUrl;
}

export const apiBaseUrl = baseUrl;
