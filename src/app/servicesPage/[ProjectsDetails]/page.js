"use client";

import FirstSection from "@/app/componentes/ProjectsDetailsComp/FirstSection";
import Hero from "@/app/componentes/ProjectsDetailsComp/hero";
import ImgesSection from "@/app/componentes/ProjectsDetailsComp/ImgesSection";
import SecondSeation from "@/app/componentes/ProjectsDetailsComp/SecondSections";
import SimilarWorks from "@/app/componentes/ProjectsDetailsComp/Similar works";
import { useParams } from "next/navigation";





export default function ProjectsDitales() {



    // Assume you have an array of projects  you will get from the backend
    const projectsData = [
        {
            id: 1,
            src: "/img/ServicePage/img1.png",
            title: "تطوير البرمجيات المخصصة",
            discription:
                "هذا النص هو مثال لنص يمكن ان يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
            tags: ["الرعاية الصحية", "العلامة التجارية", " الهوية البصرية", " التغليف"],
            titleEtc: " تطبيق سوبر صديق للأطفال ",
            span: "20 أكتوبر",
            small: "ترفيه",
        },
        {
            id: 2,
            src: "/img/ServicePage/img2.png",
            title: " اسم المشروع",
            discription: "نقدم تحليلاً دقيقًا لأنظمتك",
            tags: ["الرعاية الصحية", "العلامة التجارية", " الهوية البصرية", " التغليف"],
            titleEtc: " ",
            span: "20 أكتوبر",
            small: "ابداع",
        },
        {
            id: 3,
            src: "/img/ServicePage/img3.png",
            title: " اسم المشروع",
            discription: "نقدم تحليلاً دقيقًا لأنظمتك",
            tags: ["الرعاية الصحية", "العلامة التجارية", " الهوية البصرية", " التغليف"],
            titleEtc: " ",
            span: "20 أكتوبر",
            small: "مغامره",
        },
        {
            id: 4,
            src: "/img/ServicePage/img4.png",
            title: " اسم المشروع",
            discription: "نقدم تحليلاً دقيقًا لأنظمتك",
            tags: ["الرعاية الصحية", "العلامة التجارية", " الهوية البصرية", " التغليف"],
            titleEtc: " ",
            span: "20 أكتوبر",
            small: "ابتكار",
        },
        {
            id: 5,
            src: "/img/ServicePage/img5.png",
            title: " اسم المشروع",
            discription: "نقدم تحليلاً دقيقًا لأنظمتك",
            tags: ["الرعاية الصحية", "العلامة التجارية", " الهوية البصرية", " التغليف"],
            titleEtc: "",
            span: "20 أكتوبر",
            small: "عمل",
        },
        {
            id: 6,
            src: "/img/ServicePage/img6.png",
            title: " اسم المشروع",
            titleEtc: " ",
            discription: "نقدم تحليلاً دقيقًا لأنظمتك",
            tags: ["الرعاية الصحية", "العلامة التجارية", " الهوية البصرية", " التغليف"],
            span: "20 أكتوبر",
            small: "ترفيه",
        },
    ];
    //to git the id
    const param = useParams();
    const CurrentData = projectsData.find((project) => {
        return project.id === Number(param.ProjectsDetails);
    });


    //   Hero Data
    const DefultData = [
        {
            title: `${CurrentData?.title}`,
            titleEtc: `${CurrentData?.titleEtc}`,
            span: `${CurrentData?.span}`,
            small: `${CurrentData?.small}`,

        },
    ];

    return (
        <>
            <Hero DefultData={DefultData} />
            <FirstSection projectsData={projectsData} />
            <SecondSeation />
            <ImgesSection />
            <SimilarWorks />
        </>
    );
}
