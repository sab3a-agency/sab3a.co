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
    <div className="container px-5 mt-80 pt-0">
      <div className="Part1 row w-100 mx-auto" data-aos="fade-up">
        <div className="wrap d-md-flex justify-content-between align-content-center align-items-center gap-5">
          <div
            className="imgWrapper d-flex align-items-center justify-content-start gap-0 w-100 position-relative "
            data-aos="fade-up "
          >
            <img
              className="CofiaVector"
              alt="صورة شخص يرتدي كوفية"
              src={data.src}
              loading="eager"
            />

            <p className="imgText w-100 text-center text-md-start">
              {data.Massges}
            </p>
          </div>

          <div className=" d-flex align-items-center gap-3 w-100  ">
            <div className="col-12 col-md-10">
              <p className="text-wikala d-flex justify-content-start align-items-start">
                {data.title}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mt-2 my-0 position-relative d-flex justify-content-center align-items-center"
        data-aos="fade-up"
      >
        <p className="BigText">{data.advPoster}</p>

        <img
          src="/img/BoardsPoster.svg"
          className="d-none d-md-none d-xl-flex justify-content-center align-items-start  "
          alt="Saba-Image"
        />
      </div>

      <div className="d-flex" data-aos="fade-up">
        <div className="innerWrappe col-md-3 gap-5">
          <div className="text">
            <p className="textBox spaheal d-flex align-items-center">
              نحن نبتكر، نصمم، ونحول الأفكار إلى واقع رقمي لنلبي احتياجات
              عملائنا بتميز وإبداع.
            </p>
          </div>

          <div className="d-flex my-0 my-md-5 my-xl-0 justify-content-between align-items-center gap-5 w-auto">
            <div className="box_1 d-flex justify-content-center">
              <div className="Box-wrapper d-flex align-items-baseline">
                <span
                  ref={(el) => (countersRef.current[0] = el)}
                  data-goal="12"
                >
                  0
                </span>
                <p className="textBox">سنوات الخبرة</p>
              </div>
            </div>

            <div className="box_2 d-flex justify-content-center">
              <div className="Box-wrapper d-flex align-items-baseline">
                <span
                  ref={(el) => (countersRef.current[1] = el)}
                  data-goal="240"
                >
                  0
                </span>
                <p className="textBox">تم الانتهاء من المشروع</p>
              </div>
            </div>
          </div>

          <div className="box_3 d-flex">
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
                  <p className="p-1 textBox3">4.8 (12K تقييم)</p>
                </div>
              </div>
            </div>

            <img
              src="/img/BoardsPoster.svg"
              className="d-md-flex d-xl-none justify-content-center align-items-center  position-relative"
              style={{ top: "-9rem", width: "18rem", height: "18rem" }}
              alt="Saba-Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
