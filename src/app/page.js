"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HomePage } from "./Homepage/page";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      easing: "ease-out",
    });
  }, []);

  return <HomePage />;
}
