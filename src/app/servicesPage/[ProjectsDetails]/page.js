"use client";

import FirstSection from "@/app/componentes/ProjectsDetailsComp/FirstSection";
import Hero from "@/app/componentes/ProjectsDetailsComp/hero";
import ImgesSection from "@/app/componentes/ProjectsDetailsComp/ImgesSection";
import SecondSeation from "@/app/componentes/ProjectsDetailsComp/SecondSections";
import SimilarWorks from "@/app/componentes/ProjectsDetailsComp/Similar works";
import Aos from "aos";
import { useEffect } from "react";





export default function ProjectsDitales() {
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
            <Hero />
            <FirstSection />
            <SecondSeation />
            <ImgesSection />
            <SimilarWorks />
        </>
    );
}
