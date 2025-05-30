"use client"

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
  return (
    <>
      <HeroTeamSection />
      <OurJourney />
      <Section2 />
    </>
  )
}
