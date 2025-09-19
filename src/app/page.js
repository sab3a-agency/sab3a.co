"use client"; // لو انت في Next.js App Router

import { useState, useEffect } from "react";
import IntroScreenLoading from "./componentes/IntroScreenLoading";
import { HomePage } from "./Homepage/page";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro ? <IntroScreenLoading /> : <HomePage />}
    </>
  );
}
