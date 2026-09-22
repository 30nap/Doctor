import { buildJsonLd } from "@/lib/schema";

export function JsonLd() {
  // JSON.stringify drops undefined fields; escape "<" to keep the script tag safe.
  const json = JSON.stringify(buildJsonLd()).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
