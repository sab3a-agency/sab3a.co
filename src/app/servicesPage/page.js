"use client";
import Hero_Service from "../componentes/ServeceComponent/hero_Service";
import Section2 from "../componentes/ServeceComponent/section2";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



export default function ServicesPage() {
    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true,
            easing: "ease-out",

        });

        return () => {
            AOS.refresh();
        };
    }, []);
    return (
        <>
            <Hero_Service />
            <Section2 />
        </>
    );
}
