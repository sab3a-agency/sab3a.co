"use client";

import ArticalGrid from "./ArticalGrid";
import SkeletonBox from "../SkeletonBox";

export default function OtherArticals({ data }) {
  // إذا وصلت بيانات عبر البروبس → نمررها مباشرة
  // خلاف ذلك → سيقوم ArticalGrid بجلبها من الـ API
  return (
    <section className="SimilarArticals mt-5">
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

        {/* مرر بيانات البروبس إذا وجدت، أو سيجلبها ArticalGrid */}
        <ArticalGrid data={data} />
      </div>
    </section>
  );
}
