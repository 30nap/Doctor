import { contact } from "@/data/contact";
import { doctor } from "@/data/doctor";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { real } from "@/lib/utils";

/**
 * schema.org JSON-LD for search engines: the dentist as a `Person` plus one
 * `Dentist` entry per clinic. Values that are still [placeholders] are
 * omitted so unfinished data never reaches Google.
 */
export function buildJsonLd() {
  const personId = `${site.url}/#dentist-person`;
  const telephone = contact.phoneHref.replace("tel:", "");

  const clinics = contact.locations.map((location, i) => ({
    "@type": "Dentist",
    "@id": `${site.url}/#clinic-${i + 1}`,
    name: location.name,
    telephone,
    hasMap: location.mapHref,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IR",
      addressRegion: contact.region,
      addressLocality: contact.city,
      streetAddress: location.area,
    },
    employee: { "@id": personId },
    medicalSpecialty: "Dentistry",
    availableService: services.map((s) => ({
      "@type": "MedicalProcedure",
      name: s.title,
      description: s.summary,
    })),
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: doctor.name,
        alternateName: doctor.nameLatin,
        jobTitle: doctor.title,
        description: site.seo.description,
        url: site.url,
        telephone,
        image: doctor.portrait.src ? `${site.url}${doctor.portrait.src}` : undefined,
        identifier: real(doctor.licenseNumber)
          ? { "@type": "PropertyValue", name: "شماره نظام پزشکی", value: doctor.licenseNumber }
          : undefined,
        workLocation: clinics.map((c) => ({ "@id": c["@id"] })),
        sameAs: [contact.instagramUrl],
        knowsLanguage: "fa",
      },
      ...clinics,
    ],
  };
}
