import ActWithTeam from '@/components/HomeComponent/ActWithTeam';
import HeroPart1 from '@/components/HomeComponent/HeroPart1';
import Herosection from '@/components/HomeComponent/heroSection';
import HowWeAre from '@/components/HomeComponent/HowWeAre';
import OurVision from '@/components/HomeComponent/OurVision';
import PartnerSession from '@/components/HomeComponent/partnerSession';
import Questiones from '@/components/HomeComponent/questiones';
import Services from '@/components/HomeComponent/services';
import WhyChooseUs from '@/components/HomeComponent/whyChooseUs';

export default function Home() {
  return (
    <>
      <div className='HeaderWithHeroSition'> </div>
      <HeroPart1 />
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
