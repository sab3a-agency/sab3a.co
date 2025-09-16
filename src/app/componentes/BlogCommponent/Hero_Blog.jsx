"use client";
import { useEffect, useMemo, useState } from "react";
import ArticalGrid from "./ArticalGrid";
import SkeletonBox from "../SkeletonBox";

export default function Hero_Blog({ data }) {
  const HeroData = useMemo(() => {
    return {
      title: ` رؤى رقمية
  من خبراء `,
      span: " سبعة.",
      discriptions: `في سبعة، نقدم حلولًا رقمية مبتكرة لمساعدة العلامات التجارية على النمو والتميز. استكشف خدماتنا المصممة لتعزيز حضورك الرقمي.`,
    };
  }, []);

  const [Bloges, setBloges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (data && Array.isArray(data) && data.length > 0) {
      setBloges(data.slice(0, 2));
      setLoading(false);
      return;
    }

    fetch("/api/projects/blogs")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        const mapped = data.data.items.map((item) => ({
          id: item.id,
          cover_image: item.cover_image.replace("\\", "/"), // يصلح الباث لو فيه \
          title: item.title,
          type: item.type,
          span: new Date(item.created_at).toLocaleDateString("ar-EG", {
            day: "numeric",
            month: "long",
          }), // مثال: "8 سبتمبر"
          small: item.type, // أو ثابته "الأعمال"
          date: new Date(item.created_at).toLocaleDateString("ar-EG"), // مثال: "2025/09/08"
        }));

        setBloges(mapped);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [data]);

  if (loading) {
    const skeletonCount = data && data.length > 0 ? 2 : 6;
    return (
      <div
        className="projectsWrapper mt-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="row justify-content-between flex-wrap-wrap">
          {[...Array(skeletonCount)].map((_, i) => (
            <SkeletonBox key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

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
        <ArticalGrid data={Bloges} />
      </div>
    </section>
  );
}
