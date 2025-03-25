"use client";
import { useMemo } from "react";
import ArticalGrid from "./ArticalGrid";

export default function Hero_Blog() {
  const HeroData = useMemo(() => {
    return {
      title: ` رؤى رقمية
  من خبراء `,
      span: " سبعة.",
      discriptions: `في سبعة، نقدم حلولًا رقمية مبتكرة لمساعدة العلامات التجارية على النمو والتميز. استكشف خدماتنا المصممة لتعزيز حضورك الرقمي.`,
    };
  }, []);

  const data = useMemo(
    () => [
      {
        id: 1,
        src: "/img/Blog/img1.png",
        title: "عنوان المقال التجريبي",
        btn: "اقرا المزيد",
        span: "20 أكتوبر",
        small: "الأعمال",
      },
      {
        id: 2,
        src: "/img/Blog/img2.png",
        title: "عنوان المقال التجريبي",
        btn: "اقرا المزيد",
        span: "20 أكتوبر",
        small: "الأعمال",
      },
      {
        id: 3,
        src: "/img/Blog/img3.png",
        title: "عنوان المقال التجريبي",
        btn: "اقرا المزيد",
        span: "20 أكتوبر",
        small: "الأعمال",
      },
      {
        id: 4,
        src: "/img/Blog/img4.png",
        title: "عنوان المقال التجريبي",
        btn: "اقرا المزيد",
        span: "20 أكتوبر",
        small: "الأعمال",
      },
      {
        id: 5,
        src: "/img/Blog/img5.png",
        title: "عنوان المقال التجريبي",
        btn: "اقرا المزيد",
        span: "20 أكتوبر",
        small: "الأعمال",
      },
      {
        id: 6,
        src: "/img/Blog/img6.png",
        title: "عنوان المقال التجريبي",
        btn: "اقرا المزيد",
        span: "20 أكتوبر",
        small: "الأعمال",
      },
    ],
    []
  );

  return (
    <section className="HeroBlog mt-50">
      <div className="container">
        <div className="head  d-flex flex-column   justify-content-between align-items-start align-text-justify">
          <h1>
            {HeroData.title}
            <span>{HeroData.span}</span>
          </h1>
          <p className="mt-5">{HeroData.discriptions}</p>
        </div>
        <ArticalGrid data={data} />
      </div>
    </section>
  );
}
