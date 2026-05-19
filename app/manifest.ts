import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Brian Washington — Cloud & Infrastructure Engineer",
    short_name: "Brian Washington",
    description:
      "Portfolio of Brian Washington — Systems & Cloud Infrastructure Engineer specializing in Azure, Microsoft 365, and AI-Assisted Automation.",
    start_url: "/",
    display: "standalone",
    background_color: "#020917",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
