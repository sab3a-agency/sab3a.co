"use client"
import ActWithTeam from "../componentes/HomeComponent/ActWithTeam"
import HeroPart1 from "../componentes/HomeComponent/HeroPart1"
import Herosection from "../componentes/HomeComponent/heroSection"
import HowWeAre from "../componentes/HomeComponent/HowWeAre"
import OurVision from "../componentes/HomeComponent/OurVision"
import PartnerSession from "../componentes/HomeComponent/partnerSession"
import Questiones from "../componentes/HomeComponent/questiones"
import Services from "../componentes/HomeComponent/services"
import WhyChooseUs from "../componentes/HomeComponent/whyChooseUs"
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";



export function HomePage() {
  return (
    <>
      <div className="HeaderWithHeroSition"> </div>
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
  )
}
