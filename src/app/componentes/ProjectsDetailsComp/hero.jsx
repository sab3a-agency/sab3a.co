"use client";
import { useRouter } from "next/navigation";

export default function Hero({ data }) {
  const router = useRouter();

  if (!data) {
    return null;
  }

  return (
    <section className="Hero mt-50">
      <div className="container">
        <div className="Hero">
          <div className="headWrapper d-flex flex-column align-items-start justify-content-between">
            <div className="rigthside d-flex align-items-center gap-4">
              <a
                onClick={() => router.back()}
                className="arrow"
                style={{ cursor: "pointer" }}
              >
                <img
                  src="/img/ProjectsDetails/Icon.svg"
                  alt="arrow"
                  onError={(e) => {
                    e.currentTarget.src = "../img/LoagingState.png";
                    e.currentTarget.style.objectFit = "contain";
                  }}
                />
              </a>
              <h1 className="d-flex flex-column align-items-start text-end">
                {data.title || "عنوان افتراضي"}
                {data.titleEtc || "وصف مختصر"}
              </h1>
            </div>
            <div className="leftSide d-flex align-items-center gap-4">
              <span>{data.span || "2025-01-01"}</span>
              <span className="dot">.</span>
              <small>{data.small || "عام"}</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
