"use client";
import { useState, useEffect } from "react";
import ArticalGrid from "./ArticalGrid";
import SkeletonBox from "../SkeletonBox";

export default function OtherArticals() {
  const [Bloges, setBloges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/projects/blogs")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        const mapped = data.data.items.map((item) => ({
          id: item.id,
          cover_image: item.cover_image.replace("\\", "/"),
          title: item.title,
          type: item.type,
          span: new Date(item.created_at).toLocaleDateString("ar-EG", {
            day: "numeric",
            month: "long",
          }),
          small: item.type,
          date: new Date(item.created_at).toLocaleDateString("ar-EG"),
        }));

        // ناخد عنصرين بس
        setBloges(mapped.slice(0, 2));
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div
        className="projectsWrapper mt-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="row justify-content-between flex-wrap-wrap">
          {[...Array(2)].map((_, i) => (
            <SkeletonBox key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <section className="SimilarArticals mt-5 ">
      <div className="container">
        <div className="Hero">
          <div className="headWrapper d-flex align-items-center justify-content-between">
            <div className="leftSide d-flex flex-column gap-4 justify-content-justify">
              <p>مقالات قد تهمك</p>
              <span>
                استكشف مقالات مختارة بعناية لمساعدتك على فهم أعمق وتطبيق عملي في
                عالم التسويق الرقمي.
              </span>
            </div>
          </div>
        </div>
        {/* هنا هنمرر المقالات اللي جبناها */}
        <ArticalGrid data={Bloges} />
      </div>
    </section>
  );
}
