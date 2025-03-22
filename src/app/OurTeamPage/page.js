"use client";
import Aos from "aos";
import LetsDoit from "../componentes/ServeceComponent/LetsDoit";
import Section2 from "../componentes/ServeceComponent/section2";
import HeroTeamSection from "../componentes/TeamPageComponent/Hero";
import OurJourney from "../componentes/TeamPageComponent/OurJourney";
import "../css/Teampage.css";
import { useEffect } from "react";

const LetsDitedata = {
    btnContent: " معاملة خاصة ",
    discription: " ابدأ رحلة لاكتشاف ",
    smallDescription: "عالم من استراتيجيات التصميم المبتكرة.",
    letsDoit: " دعنا نصمم غرضك هنا  ",
};
export default function OureTeam() {
    useEffect(() => {
        Aos.init({
            duration: 600,
            once: true,
            easing: "ease-out",

        });

        return () => {
            Aos.refresh();
        };
    }, []);

    return (
        <>
            <HeroTeamSection />
            <OurJourney />
            <Section2 />
            <LetsDoit data={LetsDitedata} />

        </>
    );
}
