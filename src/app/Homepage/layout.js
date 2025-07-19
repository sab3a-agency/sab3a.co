"use client"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/globals.css"

import Footer from "../componentes/HomeComponent/Footer"
import Header from "../componentes/HomeComponent/Header"
import { useEffect } from "react"
import AosWrapper from "../componentes/AOSWrapper "



export default function HomeLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
  }, [])
  return (
    <AosWrapper >
      < Header />
      {children}
      <Footer />
    </AosWrapper>


  )
}
