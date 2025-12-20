import ActWithTeam from '@/components/HomeComponent/ActWithTeam';
import HeroSection from '@/components/HomeComponent/hero-section';
import MarqueeSection from '@/components/HomeComponent/marquee-section';
import HowWeAre from '@/components/HomeComponent/HowWeAre';
import OurVision from '@/components/HomeComponent/OurVision';
import PartnerSession from '@/components/HomeComponent/partnerSession';
import Questiones from '@/components/HomeComponent/questiones';
import ServicesSection from '@/components/HomeComponent/services-section';
import FeaturesSection from '@/components/HomeComponent/features-section';

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/homepage`, {
    cache: 'no-store'
  });
  const { data } = await res.json();

  const heroSection = data.sections.find((section) => section.section_key === 'hero');
  const statistics = data.statistics.slice(0, 3);
  const servicesSection = data.sections.find((section) => section.section_key === 'services');
  const services = data.services;
  const featuresSection = data.sections.find((section) => section.section_key === 'features');
  const features = data.features;

  return (
    <>
      <HeroSection data={{ heroSection, statistics }} />
      <MarqueeSection />
      <ServicesSection data={{ servicesSection, services }} />
      <FeaturesSection data={{ featuresSection, features }} />
      <HowWeAre />
      <PartnerSession />
      <ActWithTeam />
      <OurVision />
      <Questiones />
    </>
  );
}
