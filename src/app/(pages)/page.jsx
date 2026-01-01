import TeamSection from '@/components/HomeComponent/team-section';
import HeroSection from '@/components/HomeComponent/hero-section';
import MarqueeSection from '@/components/HomeComponent/marquee-section';
import About from '@/components/HomeComponent/about-section';
import OurVision from '@/components/HomeComponent/OurVision';
import PartnersSection from '@/components/HomeComponent/partners-section';
import FaqsSection from '@/components/HomeComponent/faqs-section';
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
  const aboutSection = data.sections.find((section) => section.section_key === 'about');
  // const teamSection = data.sections.find((section) => section.section_key === 'our team');
  const visionSection = data.sections.find((section) => section.section_key === 'vision');
  const visionStats = data.statistics.slice(3);
  const faqsSection = data.sections.find((section) => section.section_key === 'faq');

  return (
    <>
      <HeroSection data={{ heroSection, statistics }} />
      <MarqueeSection />
      <ServicesSection data={{ servicesSection, services }} />
      <FeaturesSection data={{ featuresSection, features }} />
      <About data={{ aboutSection }} />
      <PartnersSection />
      {/* <TeamSection data={{ teamSection }} /> */}
      <OurVision data={{ visionSection, statistics: visionStats }} />
      <FaqsSection data={{ faqsSection }} />
    </>
  );
}
