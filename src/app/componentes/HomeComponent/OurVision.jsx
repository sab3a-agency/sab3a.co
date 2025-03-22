"use client";

import { useEffect } from "react";

const OurVisionData = {
  small: " رؤيتنا ",
  title: "  نؤمن بأن  ",
  span: " التكنولوجيا والإبداع  ",
  titleEnd: `هما سر نجاحك في العالم الرقمي.`,
  discription: " ",
  box1: {
    target: "97",
    title: " حلول إبداعية ",
    innerdescrption: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص من مولد النص العربى.`,
  },
  box2: {
    target: "95",
    title: " الاستراتيجية الرقمية  ",
    innerdescrption: `نطور استراتيجيات رقمية مبتكرة تساعدك على تحقيق أهدافك وتعزيز وجودك في السوق الرقمي.`,
  },
};

export default function OurVision() {
  useEffect(() => {
    const handleScroll = () => {
      const boxWrapper = document.querySelector(".boxWrapper");
      if (!boxWrapper) return;

      if (window.scrollY + window.innerHeight >= boxWrapper.offsetTop) {
        document.querySelectorAll(".bar2").forEach((bar2) => {
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
              number2.textContent = `${currentHeight2}%`;

              if (currentHeight2 >= 85) {
                span2.style.background = "rgba(137, 175, 72, 1)";
              }

              setTimeout(() => requestAnimationFrame(animateHeight), 10);
            }
          };

          requestAnimationFrame(animateHeight);
        });

        // to be sure that the number is animated
        document.querySelectorAll(".number").forEach((numberEl) => {
          const targetValue = parseInt(numberEl.dataset.target);
          if (numberEl.dataset.animated === "true") return;
          numberEl.dataset.animated = "true";

          let currentValue = 0;

          const animateNumber = () => {
            if (currentValue < targetValue) {
              currentValue++;
              numberEl.textContent = `${currentValue}%`;
              setTimeout(() => requestAnimationFrame(animateNumber), 5);
            }
          };

          requestAnimationFrame(animateNumber);
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="OurVision mt-80">
        <div className="container p-5 ">
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
              <div className="boxWrap d-flex justify-content-center gap-4">
                <div className="box d-flex flex-column justify-content-center align-items-center">
                  <span
                    className="number"
                    data-target={OurVisionData.box1.target}
                  >
                    0%
                  </span>
                  <h3>{OurVisionData.box1.title}</h3>
                  <p>{OurVisionData.box1.innerdescrption}</p>
                </div>

                <div className="box d-flex flex-column justify-content-center align-items-center box2">
                  <span
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
                    <img src="../img/Meating.jpeg" alt="img" loading="lazy" />
                  </div>
                </div>
                <div className="heroprogress col-12 col-md-6">
                  <div className="innerWrapper d-flex justify-content-center align-items-center gap-2">
                    <div className="bar2">
                      <span data-height="95%">
                        <div className="number">0%</div>
                      </span>
                    </div>
                    <div className="bar2">
                      <span data-height="40%">
                        <div className="number">0%</div>
                      </span>
                    </div>
                    <div className="bar2">
                      <span data-height="75%">
                        <div className="number">0%</div>
                      </span>
                    </div>
                    <div className="bar2">
                      <span data-height="20%">
                        <div className="number">0%</div>
                      </span>
                    </div>
                    <div className="position">
                      <div className="boxing">
                        <h4>زيادة في التحويل</h4>
                        <span>20%</span>
                        <span>+</span>
                      </div>
                      <img src="../img/shape.svg" alt="Shape" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
