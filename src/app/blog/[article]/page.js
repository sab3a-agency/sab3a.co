"use client";
import { useEffect, useState } from "react";
import FirstSection from "@/app/componentes/BlogCommponent/FristSection";
import OtherArticals from "@/app/componentes/BlogCommponent/otherArticals";
import Hero from "@/app/componentes/ProjectsDetailsComp/hero";
import { useParams } from "next/navigation";
import "../../css/BlogStyle.css";

export default function ArticlePage() {
  const params = useParams();
  const articleId = params.article;

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchArticle() {
      try {
        console.log("Fetching article with id:", articleId);
        const res = await fetch(`/api/projects/blogs/${articleId}`, {
          cache: "no-store",
        });

        if (!res.ok) throw new Error("فشل في جلب بيانات المقالة");

        const data = await res.json();
        console.log("API response:", data);

        const articleData = data.data ?? data;
        setArticle(articleData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (articleId) fetchArticle();
  }, [articleId]);

  const defaultArticle = {
    id: "0",
    title: "جاري التحميل...",
    sub_title: "",
    type: "",
    description: "",
    description_below: "",
    cover_image: "../img/Blog/img1.png",
    images: ["../img/Blog/img1.png"],
    created_at: new Date().toISOString(),
  };

  const finalArticle = article ?? defaultArticle;

  // Hero Data
  const HeroData = [
    {
      title: finalArticle.title,
      titleEtc: finalArticle.sub_title,
      span: new Date(finalArticle.created_at).toLocaleDateString("ar-EG", {
        day: "numeric",
        month: "long",
      }),
      small: finalArticle.type,
    },
  ];

  // First Section Data
  const Firstdata = [
    {
      id: finalArticle.id,
      intro: finalArticle.description,
      FisrtDiscription: finalArticle.description,
      SecondDescription:
        finalArticle.description_below || "لا توجد فقرة ثانية متوفرة.",
      src:
        finalArticle.images?.[0]?.replace(/\\/g, "/") ||
        finalArticle.cover_image?.replace(/\\/g, "/"),
    },
  ];

  // Skeleton Loading Component
  const Skeleton = () => (
    <div className="ArticalPage">
      <section className="Hero mt-50">
        <div className="container">
          <div className="skeleton skeleton-text w-75 h-50 mb-3" />
          <div className="skeleton skeleton-text w-50 h-20" />
        </div>
      </section>
      <section className="FirstSection mt-50">
        <div className="container">
          <div className="skeleton skeleton-text w-75 mb-3" />
          <div className="skeleton skeleton-img w-100 h-300 mb-3" />
          <div className="skeleton skeleton-text w-50" />
        </div>
      </section>
      <section className="SimilarArticals mt-5">
        <div className="container">
          <div className="skeleton skeleton-text w-50 mb-3" />
          <div className="row">
            {[1, 2].map((i) => (
              <div key={i} className="col-12 col-md-6 mb-5">
                <div className="skeleton skeleton-img w-100 h-200 mb-3" />
                <div className="skeleton skeleton-text w-50 mb-2" />
                <div className="skeleton skeleton-btn w-25 h-30" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  if (loading) return <Skeleton />;

  if (error)
    return (
      <Error />
    );

  return (
    <div className="ArticalPage">
      <Hero data={HeroData} />
      <FirstSection projectsData={Firstdata} />
      <OtherArticals />
    </div>
  );
}
