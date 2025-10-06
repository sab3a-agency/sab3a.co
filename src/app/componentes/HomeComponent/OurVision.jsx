"use client";

import { useEffect, useRef, useState } from "react";

const OurVisionDataDefult = {
  small: " رؤيتنا ",
  title: "  نؤمن بأن  ",
  span: " التكنولوجيا والإبداع  ",
  titleEnd: `هما سر نجاحك في العالم الرقمي.`,
  discription: " ",
  box1: {
    target: "97",
    title: " حلول إبداعية ",
    innerdescrption: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.`,
  },
  box2: {
    target: "95",
    title: " الاستراتيجية الرقمية  ",
    innerdescrption: `نطور استراتيجيات رقمية مبتكرة تساعدك على تحقيق أهدافك وتعزيز وجودك في السوق الرقمي.`,
  },
};

export default function OurVision() {
  const barsRef = useRef([]);
  const numbersRef = useRef([]);
  const [OurVisionData] = useState(OurVisionDataDefult);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    if (!barsRef.current.length || !numbersRef.current.length) return;

    // IntersectionObserver for bars
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const bar2 = entry.target;
          const span2 = bar2.querySelector("span");
          const number2 = bar2.querySelector(".number");
          const targetHeight2 = parseInt(span2.dataset.height);

          if (bar2.dataset.animated === "true") return;
          bar2.dataset.animated = "true";

          let currentHeight2 = 0;

          const animateHeight = () => {
            if (currentHeight2 < targetHeight2) {
              currentHeight2++;
              span2.style.height = `${currentHeight2}%`;
              number2.textContent = `${currentHeight2} مشروع`;

              if (currentHeight2 >= 85) {
                span2.style.background = "rgba(137, 175, 72, 1)";
              }

              requestAnimationFrame(animateHeight);
            }
          };

          requestAnimationFrame(animateHeight);
          observer.unobserve(bar2);
        });
      },
      { threshold: 0.5 }
    );

    barsRef.current.forEach((bar2) => observer.observe(bar2));

    // IntersectionObserver for number counters
    const numberObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const numberEl = entry.target;
          const targetValue = parseInt(numberEl.dataset.target);
          if (numberEl.dataset.animated === "true") return;
          numberEl.dataset.animated = "true";

          let currentValue = 0;

          const animateNumber = () => {
            if (currentValue < targetValue) {
              currentValue++;
              numberEl.textContent = `${currentValue} %`;
              requestAnimationFrame(animateNumber);
            }
          };

          requestAnimationFrame(animateNumber);
        });
      },
      { threshold: 0.5 }
    );

    numbersRef.current.forEach((numberEl) => numberObserver.observe(numberEl));

    import("bootstrap/dist/js/bootstrap.esm.min.js").then(({ Tooltip }) => {
      const tooltipTriggerList = document.querySelectorAll(
        '[data-bs-toggle="tooltip"]'
      );
      tooltipTriggerList.forEach((el) => new Tooltip(el));
    });

    return () => {
      observer.disconnect();
      numberObserver.disconnect();
    };
  }, [stats]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/projects/heroprogress", {
          cache: "no-store",
        });
        const json = await res.json();
        if (json?.data?.statistics) {
          const filtered = json.data.statistics.filter((s) =>
            [5, 6, 7, 8].includes(s.id)
          );
          setStats(filtered);
        }
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="OurVision mt-80">
      <div className="container p-5">
        <div className="OurVisionWapper container">
          <div className="info" data-aos="fade-left">
            <small>{OurVisionData.small}</small>
            <h3>
              {OurVisionData.title}
              <span>{OurVisionData.span}</span>
              {OurVisionData.titleEnd}
            </h3>
          </div>

          <div
            className="boxWrapper d-flex flex-column align-items-center text-center"
            data-aos="zoom-in"
          >
            <div className="boxWrap d-flex-column  d-xl-flex justify-content-center gap-4 ">
              <div className="box d-flex flex-column justify-content-center align-items-center flex-grow-1">
                <span
                  ref={(el) => (numbersRef.current[0] = el)}
                  className="number"
                  data-target={OurVisionData.box1.target}
                >
                  0%
                </span>
                <h3>{OurVisionData.box1.title}</h3>
                <p>{OurVisionData.box1.innerdescrption}</p>
              </div>

              <div className="box d-flex flex-column justify-content-center align-items-center box2 flex-grow-1">
                <span
                  ref={(el) => (numbersRef.current[1] = el)}
                  className="number stragety"
                  data-target={OurVisionData.box2.target}
                >
                  0%
                </span>
                <h3 className="stragety">{OurVisionData.box2.title}</h3>
                <p>{OurVisionData.box2.innerdescrption}</p>
              </div>
            </div>

            <div className="divWitherProgress row d-flex flex-column gap-1">
              <div className="outerWrapper col-12 col-md-6">
                <div className="boxImg">
                  <img
                    src="../img/Meating.jpeg"
                    alt="img"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "../img/LoagingState.png";
                      e.currentTarget.style.objectFit = "contain";
                    }}
                  />
                </div>
              </div>

              <div className="heroprogress col-12 col-md-6">
                <div className="innerWrapper d-flex justify-content-center align-items-center gap-2">
                  {stats.map((item, index) => (
                    <div
                      key={item.id}
                      ref={(el) => (barsRef.current[index] = el)}
                      className="bar2 d-flex flex-column justify-content-end align-items-center"
                    >
                      <small className="ProjectTitle text-white fw-normal mb-2">
                        {item.title}
                      </small>

                      <span
                        data-height={`${item.value}%`}
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={`${item.value}%`}
                        style={index === 0 ? { background: "#89AF48" } : {}}
                      >
                        <div
                          className="number  "
                          style={
                            index === 0
                              ? {
                                  background: "#000",
                                  color: "#fff",
                                }
                              : {}
                          }
                        >
                          0 مشروع
                        </div>
                      </span>
                    </div>
                  ))}

                  <div className="position">
                    <div className="boxing">
                      <h4>زيادة في التحويل</h4>
                      <span className="fw-bolder">20%</span>
                      <span className="fw-bolder">+</span>
                    </div>
                    <img
                      src="../img/shape.svg"
                      alt="Shape"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = "../img/LoagingState.png";
                        e.currentTarget.style.objectFit = "contain";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
