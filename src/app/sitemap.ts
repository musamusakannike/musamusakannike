import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { locales } from "./[lang]/dictionaries";

const SITE_URL = "https://www.codiac.online";

// Bumped manually when the corresponding pages' content actually changes,
// rather than regenerating on every request (wastes crawl budget).
const SITE_LAST_MODIFIED = new Date("2026-08-07");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  for (const lang of locales) {
    routes.push({
      url: `${SITE_URL}/${lang}`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    });

    routes.push({
      url: `${SITE_URL}/${lang}/projects`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.9,
    });

    for (const project of projects) {
      routes.push({
        url: `${SITE_URL}/${lang}/projects/${project.slug}`,
        lastModified: SITE_LAST_MODIFIED,
        changeFrequency: "yearly" as const,
        priority: 0.7,
      });
    }
  }

  return routes;
}
