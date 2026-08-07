import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Musa Musa Kannike — Codiac",
    short_name: "Codiac",
    description:
      "Musa Musa Kannike (Codiac) — Fullstack Developer building web, mobile, and desktop applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#00FF66",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
