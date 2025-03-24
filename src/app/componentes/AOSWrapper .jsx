"use client"; // استخدم هذا إذا كنت في Next.js 13+ مع App Router
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const AOSWrapper = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  return <>{children}</>;
};

export default AOSWrapper;
