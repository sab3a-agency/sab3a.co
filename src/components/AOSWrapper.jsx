"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosWrapper = ({ children }) => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return <>{children}</>;
};

export default AosWrapper;
