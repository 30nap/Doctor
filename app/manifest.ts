import type { MetadataRoute } from "next";
import { doctor } from "@/data/doctor";
import { site } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: doctor.name,
    short_name: doctor.shortName,
    description: site.seo.description,
    lang: "fa-IR",
    dir: "rtl",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f5f1",
    theme_color: "#2e6b5e",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
