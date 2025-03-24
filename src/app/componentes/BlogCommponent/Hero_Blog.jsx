"use client";
import { useMemo } from "react";
import ArticalGrid from "./ArticalGrid";

export default function Hero_Blog() {
  const Data = useMemo(() => {
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
        <div className="head  d-flex flex-column   justify-content-between align-items-start align-text-justify">
          <h1>
            {Data.title}
            <span>{Data.span}</span>
          </h1>
          <p className="mt-5">{Data.discriptions}</p>
        </div>
        <ArticalGrid />
      </div>
    </section>
  );
}
