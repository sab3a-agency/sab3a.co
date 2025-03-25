"use client";
import { useMemo } from "react";
import ArticalGrid from "./ArticalGrid";

export default function OtherArticals() {
  //Assume you have an array of projects  you will get from the backend
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
    ],
    []
  );

  return (
    <section className="SimilarArticals mt-50 ">
      <div className="container">
        <div className="Hero">
          <div className="headWrapper d-flex align-items-center justify-content-between">
            <div className="leftSide d-flex flex-column  gap-4 justify-content-justify">
              <p>مقالات قد تهمك</p>
              <span>
                استكشف مقالات مختارة بعناية لمساعدتك على فهم أعمق وتطبيق عملي في
                عالم التسويق الرقمي.
              </span>
            </div>
          </div>
        </div>
        <ArticalGrid data={data} />
      </div>
    </section>
  );
}
