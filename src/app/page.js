"use client";
import { HomePage } from "./Homepage/page";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out",

    });

    return () => {
      AOS.refresh(); // إعادة ضبط AOS عند تحديث المكون
    };
  }, []);
  return (
    <>
      <HomePage />
    </>
  );
}

