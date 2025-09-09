"use client";

export default function SecondSection() {
  return (
    <section className="SecondSection position-relative mt-50">
      <img src="/img/ConcatUS/Star.svg" lt="star" className="hero-star" />
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
            type="submit"
            onClick={() => {
              window.location.href = "tel:+96878495068";
            }}
          >
            <span className="fw-semibold fs-5">حدد موعد مكالمتك الآن</span>
            <img
              alt="arrow"
              src="/img/arrowPrive.svg"
              style={{ width: "10rem", height: "50px" }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
