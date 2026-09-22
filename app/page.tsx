import { site } from "@/data/site";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { About } from "@/sections/about";
import { Cases } from "@/sections/cases";
import { Contact } from "@/sections/contact";
import { Credentials } from "@/sections/credentials";
import { Hero } from "@/sections/hero";
import { Resume } from "@/sections/resume";
import { Services } from "@/sections/services";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        {site.features.credentials && <Credentials />}
        <About />
        <Services />
        <Resume />
        <Cases />
        <Contact />
      </main>
      <SiteFooter />
      {site.features.mobileCtaBar && <MobileCtaBar />}
    </>
  );
}
