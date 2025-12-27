'use client';

import SecondSeation from '@/components/ProjectsDetailsComp/SecondSections';
import LetsDoit from '@/components/LetsDoit';
import PartnersSection from '@/components/projects/partners-section';
import HeroTeamSection from '@/components/TeamPageComponent/Hero';
import OurJourney from '@/components/TeamPageComponent/OurJourney';
import '@/css/Teampage.css';

export default function Team() {
  const OurPhilosophy = {
    title: 'فلسفتنا',
    discription: `نؤمن بالتعاون والابتكار وسرد القصص. تركز فلسفتنا على فهم العملاء، ودفع الحدود الإبداعية، وتقديم حلول فعالة.`,

    Box: [
      {
        smallText: 'التعاون',
        title: 'معًا، نخلق',
        description: `في سبعة، التعاون هو الأساس. نؤمن أن الأفكار العظيمة تأتي من العمل عن كثب مع العملاء ومع بعضنا البعض.`,
        icon: '/img/ProjectsDetails/people.svg'
      },
      {
        smallText: 'الابتكار',
        title: 'دفع الحدود',
        description: `الابتكار هو ما يدفعنا. نستكشف تقنيات جديدة وتكنولوجيا مبتكرة للبقاء في المقدمة.`,
        icon: '/img/ProjectsDetails/lamp-on.svg'
      },
      {
        smallText: 'سرد القصص',
        title: 'صياغة السرديات',
        description: `لكل علامة تجارية قصة، ونحن شغوفون بسرد قصتك. يربط سرد القصص، ويُلهم، ويشرك جمهورك.`,
        icon: '/img/ProjectsDetails/story.svg'
      }
    ]
  };

  return (
    <>
      <HeroTeamSection />
      <OurJourney />
      <PartnersSection />
      <SecondSeation projectData={OurPhilosophy} />
      <LetsDoit />
    </>
  );
}
