import { contact, emailHref } from "@/data/contact";
import { doctor } from "@/data/doctor";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { real } from "@/lib/utils";

/**
 * schema.org JSON-LD for search engines: a `Dentist` (the practice) and the
 * `Person` who runs it. Values that are still [placeholders] are omitted so
 * unfinished data never reaches Google.
 */
export function buildJsonLd() {
  const personId = `${site.url}/#dentist-person`;
  const practiceId = `${site.url}/#practice`;
  const telephone = contact.phoneHref.replace("tel:", "");
  const email = real(contact.email) ? emailHref.replace("mailto:", "") : undefined;

  const address = {
    "@type": "PostalAddress",
    addressCountry: "IR",
    addressLocality: real(contact.address.city),
    addressRegion: real(contact.address.region),
    streetAddress: real(contact.address.street),
    postalCode: real(contact.address.postalCode),
  };

  const university = real(doctor.about.facts.find((f) => f.label === "دانشگاه")?.value);
  const sameAs = [real(contact.instagramHandle) ? contact.instagramUrl : undefined].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: doctor.name,
        alternateName: doctor.nameLatin,
        jobTitle: doctor.title,
        description: doctor.intro,
        url: site.url,
        image: doctor.portrait.src ? `${site.url}${doctor.portrait.src}` : undefined,
        alumniOf: university ? { "@type": "CollegeOrUniversity", name: university } : undefined,
        worksFor: { "@id": practiceId },
        sameAs: sameAs.length ? sameAs : undefined,
      },
      {
        "@type": "Dentist",
        "@id": practiceId,
        name: real(contact.clinicName) ?? doctor.name,
        url: site.url,
        description: site.seo.description,
        telephone,
        email,
        address,
        geo: contact.geo
          ? { "@type": "GeoCoordinates", latitude: contact.geo.lat, longitude: contact.geo.lng }
          : undefined,
        employee: { "@id": personId },
        medicalSpecialty: "Dentistry",
        availableService: services.map((s) => ({
          "@type": "MedicalProcedure",
          name: s.title,
          description: s.summary,
        })),
        areaServed: real(doctor.city),
        inLanguage: "fa-IR",
      },
    ],
  };
}
