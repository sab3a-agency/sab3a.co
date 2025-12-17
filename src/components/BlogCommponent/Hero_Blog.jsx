"use client";
import { useEffect, useMemo, useState } from "react";
import ArticalGrid from "./ArticalGrid";

export default function Hero_Blog({ data }) {
  const HeroData = useMemo(() => {
    return {
      title: ` رؤى رقمية
  من خبراء `,
      span: " سبعة.",
      discriptions: `في سبعة، نقدم حلولًا رقمية مبتكرة لمساعدة العلامات التجارية على النمو والتميز. استكشف خدماتنا المصممة لتعزيز حضورك الرقمي.`,
    };
  }, []);

  return (
    <section className="HeroBlog mt-50">
      <div className="container">
        <div className="head container  d-flex flex-column   justify-content-between align-items-center align-text-justify">
          <h1>
            {HeroData.title}
            <span>{HeroData.span}</span>
          </h1>
          <p className="mt-5">{HeroData.discriptions}</p>
        </div>
        <ArticalGrid />
      </div>
    </section>
  );
}
