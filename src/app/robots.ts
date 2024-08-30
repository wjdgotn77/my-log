import type { MetadataRoute } from "next";
import { domain } from "@/variables/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      //   disallow: '/private/',
    },
    sitemap: `${domain}sitemap.xml`,
  };
}
