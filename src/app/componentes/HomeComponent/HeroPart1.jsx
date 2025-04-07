"use client";
import { useEffect, useRef } from "react";

const data = {
  Massges: `                  انضم إلينا في رحلة الابتكار والإبداع، حيث نبني معًا شيئًا
                  استثنائيًا يفوق التوقعات.`,
  src: "/img/SomeOne_kofia.png",
  title: "وكالة رقمية إبداعية",
  advPoster: "نحو عالم رقمي يرفع من مستوى أعمالك",
};

export default function HeroPart1() {
  const countersRef = useRef([]);

  useEffect(() => {
    function startCount(el) {
      if (el.dataset.animated === "true") return;
      let goal = parseInt(el.dataset.goal);
      let current = 0;

      el.dataset.animated = "true";

      let count = setInterval(() => {
        el.textContent = ++current;
        if (current >= goal) {
          clearInterval(count);
        }
      }, 2000 / goal);
    }

    function handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCount(entry.target);
        }
      });
    }

    let observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    countersRef.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container p-5 mt-80 pt-0">
      <div className="Part1 row w-100 mx-auto mb-5">
        <div className="wrap col-md-12 d-flex flex-column gap-5">
          <div className="imgWithText">
            <div
              className="imgWrapper d-flex align-items-center"
              data-aos="fade-left"
            >
              <p className="imgText w-100">{data.Massges}</p>
            </div>
          </div>
          <img
            className="w-50"
            alt="صورة شخص يرتدي كوفية"
            data-aos="fade-up"
            src={data.src}
            loading="eager"
          />
          <div className="col-md-5" data-aos="fade-right">
            <p className="text-wikala">{data.title}</p>
          </div>
        </div>
      </div>

      <div className="row mt-5 my-5 position-relative" data-aos="fade-up">
        <div className="col-md-9 d-flex justify-content-center">
          <p className="BigText">{data.advPoster}</p>
        </div>
        <div className="wrapperPoster col-md-3" data-aos="fade-up">
          <div className="position-relative">
            <img
              className="w-75 SecondImg"
              src="/img/BoardsPoster.png"
              alt="لوحة إعلانية"
              loading="eager"
            />
            <img
              id="innerManshit"
              src="/img/withHeroHome.png"
              alt="manshit"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <div className="d-flex" data-aos="fade-up">
        <div className="innerWrappe col-md-3 gap-5">
          <div className="text">
            <p className="textBox spaheal d-flex align-items-center">
              نحن نبتكر، نصمم، ونحول الأفكار إلى واقع رقمي لنلبي احتياجات
              عملائنا بتميز وإبداع.
            </p>
          </div>

          <div className="box_1 d-flex justify-content-center">
            <div className="Box-wrapper d-flex align-items-baseline">
              <span ref={(el) => (countersRef.current[0] = el)} data-goal="12">
                0
              </span>
              <p className="textBox">سنوات الخبرة</p>
            </div>
          </div>

          <div className="box_2 d-flex justify-content-center">
            <div className="Box-wrapper d-flex align-items-baseline">
              <span ref={(el) => (countersRef.current[1] = el)} data-goal="240">
                0
              </span>
              <p className="textBox">تم الانتهاء من المشروع</p>
            </div>
          </div>

          <div className="box_3">
            <div className="d-flex justify-content-center gap-4">
              <div className="imgs">
                <img src="../img/Avatar.png" alt="" />
              </div>
              <div className="innerBox">
                <h3>عميل سعيد</h3>
                <div className="text d-flex align-items-baseline">
                  <span className="Star">
                    <img src="../img/Star.svg" alt="" />
                  </span>
                  <p className="p-1 textBox">4.8 (12K تقييم)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
