export type PortfolioTrack = "all" | "mobile" | "frontend" | "backend";

export function getTrackFromHostname(hostname: string | null): PortfolioTrack {
  if (!hostname) return "all";

  // Strip port if present (e.g. mobile.localhost:3000 -> mobile.localhost)
  const hostWithoutPort = hostname.split(":")[0].toLowerCase();

  // Support mobile.codiac.online, mobile.localhost, etc.
  if (hostWithoutPort.startsWith("mobile.") || hostWithoutPort === "mobile") {
    return "mobile";
  }
  if (hostWithoutPort.startsWith("frontend.") || hostWithoutPort === "frontend") {
    return "frontend";
  }
  if (hostWithoutPort.startsWith("backend.") || hostWithoutPort === "backend") {
    return "backend";
  }

  return "all";
}
