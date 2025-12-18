import ActWithTeam from '@/components/HomeComponent/ActWithTeam';
import HeroPart1 from '@/components/HomeComponent/HeroPart1';
import Herosection from '@/components/HomeComponent/heroSection';
import HowWeAre from '@/components/HomeComponent/HowWeAre';
import OurVision from '@/components/HomeComponent/OurVision';
import PartnerSession from '@/components/HomeComponent/partnerSession';
import Questiones from '@/components/HomeComponent/questiones';
import Services from '@/components/HomeComponent/services';
import WhyChooseUs from '@/components/HomeComponent/whyChooseUs';

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/homepage`, {
    cache: 'no-store'
  });
  const { data } = await res.json();

  const heroSection = data.sections.find((section) => section.section_key === 'hero');
  const statistics = data.statistics.slice(0, 3);

  return (
    <>
      <HeroPart1 data={{ heroSection, statistics }} />
      <Herosection />
      <Services />
      <WhyChooseUs />
      <HowWeAre />
      <PartnerSession />
      <ActWithTeam />
      <OurVision />
      <Questiones />
    </>
  );
}
