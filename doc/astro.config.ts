import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://SimonFindling.github.io",
  base: "/dataverse-plugin-development-101",
  integrations: [
    starlight({
      title: "Dataverse Plugin Development 101",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/SimonFindling",
        },
      ],
      sidebar: [
        {
          label: "Basics",
          autogenerate: { directory: "basics" },
          collapsed: false,
        },
      ],
      routeMiddleware: "@/routeData.ts",
    }),
  ],
});
