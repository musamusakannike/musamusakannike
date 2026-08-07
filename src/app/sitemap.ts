import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const SITE_URL = "https://www.codiac.online";

// Bumped manually when the corresponding pages' content actually changes,
// rather than regenerating on every request (wastes crawl budget).
const SITE_LAST_MODIFIED = new Date("2026-08-07");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projects.map((project) => ({
      url: `${SITE_URL}/projects/${project.slug}`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
