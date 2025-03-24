"use client";

import FirstSection from "@/app/componentes/ProjectsDetailsComp/FirstSection";
import Hero from "@/app/componentes/ProjectsDetailsComp/hero";
import ImgesSection from "@/app/componentes/ProjectsDetailsComp/ImgesSection";
import SecondSeation from "@/app/componentes/ProjectsDetailsComp/SecondSections";
import SimilarWorks from "@/app/componentes/ProjectsDetailsComp/Similar works";





export default function ProjectsDitales() {


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
