"use client"

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
          <button className="SecondSectionBtn">
            <span>حدد موعد مكالمتك الآن</span>
            <img alt="arrow" src="/img/arrowPrive.svg" />
          </button>
        </div>
      </div>
    </section>
  )
}
