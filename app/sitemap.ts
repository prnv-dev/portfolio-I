import type { MetadataRoute } from "next";
import { SITE_ROUTES } from "@/data/navigation";

const BASE = "https://pranavkadam.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_ROUTES.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: path ? "monthly" : "weekly",
    priority: path ? 0.8 : 1,
  }));
}
