import HeroSection from "@/components/landing-page/hero-sections/Hero1";
import AboutUsSection from "@/components/landing-page/about-us-sections/AboutUs1";
import { heroProps } from "@/config/siteData";

export default function Home() {
  return (
    /**
     *
     * Landing page
     *
     */

    <main>
      {/*choose between hero sections?*/}
      <HeroSection
        heroImage={heroProps.heroImage}
        heroTag={heroProps.heroTag}
        subTag={heroProps.subTag}
        tagLine={heroProps.tagLine}
        button1={heroProps.button1}
        button2={heroProps.button2}
      ></HeroSection>

      {/**Content section 1 */}
      <AboutUsSection></AboutUsSection>

      {/**Content section 2 */}

      {/**Content section 3 */}
    </main>
  );
}
