"use client";
import { useState } from "react";

export default function SecondSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="SecondSection position-relative mt-50">
      <img src="/img/ConcatUS/Star.svg" alt="star" className="hero-star" />
      <div className="container">
        <div className="d-flex flex-column justify-content-between align-items-start w-100">
          <div className="head d-flex flex-column align-items-start">
            <h3>هل لا زلت لديك أسئلة؟</h3>
            <p>
              فريقنا مستعد لمساعدتك! احجز مكالمة مجانية وناقش احتياجاتك مباشرة
              مع خبرائنا.
            </p>
          </div>
          <button
            className="SecondSectionBtn d-flex align-items-center justify-content-center gap-3 px-4 py-3 rounded-full shadow"
            type="button"
            onClick={() => {
              window.location.href = "tel:+96878495068";
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="fw-semibold fs-5">حدد موعد مكالمتك الآن</span>
            <img
              alt="arrow"
              src={isHovered ? "/img/Icon2.svg" : "/img/Icon1.svg"}
              style={{ width: "5rem !important", height: "5rem !important" }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
