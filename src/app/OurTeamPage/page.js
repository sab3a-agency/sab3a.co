"use client"

import SecondSeation from "../componentes/ProjectsDetailsComp/SecondSections"
import LetsDoit from "../componentes/ServeceComponent/LetsDoit"
import Section2 from "../componentes/ServeceComponent/section2"
import HeroTeamSection from "../componentes/TeamPageComponent/Hero"
import OurJourney from "../componentes/TeamPageComponent/OurJourney"
import "../css/Teampage.css"

const LetsDitedata = {
  btnContent: " معاملة خاصة ",
  discription: " ابدأ رحلة لاكتشاف ",
  smallDescription: "عالم من استراتيجيات التصميم المبتكرة.",
  letsDoit: " دعنا نصمم غرضك هنا  "
}

export default function OureTeam() {
  const OurPhilosophy = {
    title: "فلسفتنا",
    discription: `نؤمن بالتعاون والابتكار وسرد القصص. تركز فلسفتنا على فهم العملاء، ودفع الحدود الإبداعية، وتقديم حلول فعالة.`,

    Box: [
      {
        smallText: "التعاون",
        title: "معًا، نخلق",
        description: `في سبعة، التعاون هو الأساس. نؤمن أن الأفكار العظيمة تأتي من العمل عن كثب مع العملاء ومع بعضنا البعض.`,
        icon: "/img/ProjectsDetails/people.svg",
      },
      {
        smallText: "الابتكار",
        title: "دفع الحدود",
        description: `الابتكار هو ما يدفعنا. نستكشف تقنيات جديدة وتكنولوجيا مبتكرة للبقاء في المقدمة.`,
        icon: "/img/ProjectsDetails/lamp-on.svg",
      },
      {
        smallText: "سرد القصص",
        title: "صياغة السرديات",
        description: `لكل علامة تجارية قصة، ونحن شغوفون بسرد قصتك. يربط سرد القصص، ويُلهم، ويشرك جمهورك.`,
        icon: "/img/ProjectsDetails/story.svg",
      },
    ],
  };

  return (
    <>
      <HeroTeamSection />
      <OurJourney />
      <Section2 />
      <SecondSeation OurPhilosophy={OurPhilosophy} />
      <LetsDoit data={LetsDitedata} />


    </>
  )
}
