"use client"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/globals.css"

import Footer from "../componentes/HomeComponent/Footer"
import Header from "../componentes/HomeComponent/Header"
import { useEffect, useState } from "react"
import AosWrapper from "../componentes/AOSWrapper "
import IntroScreenLoading from "../componentes/IntroScreenLoading"



export default function HomeLayout({ children }) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
  }, [])
  return (
    showIntro ? <IntroScreenLoading /> :
      <AosWrapper >
        < Header />
        {children}
        <Footer />
      </AosWrapper>


  )
}
