"use client";
import { useEffect, useRef } from "react";

const JourneyPoint = [
  {
    small: " 2020 ",
    h3: "  البداية من غزة ",
    p: `انطلقت سبعة (تحت اسم "TechBox") من قلب قطاع غزة على يد المؤسسين إبراهيم ونور. بدأنا كفريق صغير يعمل على مشاريع فريلانسر لصالح شركات ناشئة وأجنبية، بما في ذلك شركات سعودية. كان الاسم "تيك بوكس" يعكس طريقتنا في التفكير خارج الصندوق. أول مشروع لنا كان منصة مشابهة لهنقرستيشن، وكان محطة فخر لنا في بداية الطريق.`,
  },
  {
    small: " 2021 ",
    h3: "  أول عميل رئيسي ",
    p: `في العام التالي، عملنا على مشروع مميز لصالح شركة سعودية باسم Drive7، وكان نقلة نوعية في نوعية المشاريع التي ننفذها. ومع نهاية العام، قررنا توسيع الفريق، فقمنا ببناء فريق متكامل من كفاءات جامعية متعددة الخلفيات والتخصصات، مما أتاح لنا التعامل مع مشاريع أكبر وأكثر تنوعًا.`,
  },
  {
    small: " 2022 ",
    h3: " الانتقال إلى سلطنة عُمان",
    p: `انتقل الفريق المؤسس إلى سلطنة عُمان بهدف توسيع نطاق العمل والوصول إلى أسواق جديدة. كانت هذه الخطوة بداية حقيقية لتحوّل سبعة إلى كيان دولي يقدم خدماته لعملاء من مختلف دول العالم.`,
  },
  {
    small: " 2023 ",
    h3: " التوسع الدولي  ",
    p: `بدأنا العمل مع عملاء من أوروبا، والخليج، وشمال إفريقيا، مما عزز من مكانتنا كمزود حلول رقمية موثوق على مستوى دولي.`,
  },
  {
    small: " 2024 ",
    h3: "الآن: سبعة بهوية جديدة وانتشار أوسع",
    p: `اليوم، وبكل فخر، فريق سبعة يعمل من ثلاث مناطق مختلفة: سلطنة عُمان، مصر، وقطاع غزة. بهوية جديدة ورؤية متجددة، نواصل تقديم حلول تقنية مبتكرة وتجارب رقمية رائدة تخدم الأسواق المحلية والدولية.`,
  },
];

const target = [
  {
    src: "/img/TeamPage/briefcase.svg",
    target: "500",
    descrption: " مشاريع مكتملة ",
  },
  {
    src: "/img/TeamPage/award.svg",
    target: "15",
    descrption: " جوائز فازت بها",
  },
  {
    src: "/img/TeamPage/like.svg",
    target: "20",
    descrption: " سنوات من الخبرة",
  },
  {
    src: "/img/TeamPage/happyemoji.svg",
    target: "200",
    descrption: "عملاء سعداء",
  },
];

const data = JourneyPoint.slice(0, 2);
const data2 = JourneyPoint.slice(2, JourneyPoint.length);

export default function JourneyPoints() {
  const countersRef = useRef([]);

  useEffect(() => {
    const startCount = (counter, index) => {
      let start = 0;
      const end = parseInt(counter.dataset.target, 10);
      const duration = 3000;
      const step = Math.ceil(end / (duration / 100));

      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        counter.innerText = (index === 1 ? "" : "+") + start;
      }, 50);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            startCount(entry.target, index);
            observer.unobserve(entry.target);
          }
          if (index === 1 || index === 3) {
            entry.target.classList.add("red");
          }
          if (index === 0 || index === 2) {
            entry.target.classList.add("Green");
          }
        });
      },
      { threshold: 0.5 }
    );

    countersRef.current.forEach((counter, index) => {
      if (counter) observer.observe(counter);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="JourneyPoints">
      <div className="container">
        <div className="row container">
          <div className="col-12 col-md-6">
            {data.map((item, index) => (
              <div
                key={index}
                className="Dots_contants box d-flex align-items-start justify-content-center gap-4"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration={index * 500}
              >
                <div className={`cyrcle ${index === 0 ? "Active" : ""}`}></div>
                <small>{item.small}</small>
                <div className="heading d-flex flex-column justify-content-center align-items-start gap-2 ">
                  <h3>{item.h3}</h3>
                  <p>{item.p}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-12 col-md-6">
            {data2.map((item, index) => (
              <div
                key={index}
                className="Dots_contant box d-flex align-items-start gap-4"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration={index * 500 + 10}
              >
                <div
                  className={`cyrcle ${
                    index === data2.length - 1 ? "last-item" : ""
                  }`}
                ></div>
                <small>{item.small}</small>
                <div className="heading d-flex flex-column align-items-start gap-2">
                  <h3>{item.h3}</h3>
                  <p>{item.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="targets row mt-50">
          {target.map((item, index) => (
            <div key={index} className="col-6 col-md-3">
              <div className="box">
                <div className="detals d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex gap-5">
                    <img src={item.src} alt="icon" />
                    <h3
                      ref={(el) => (countersRef.current[index] = el)}
                      className="counter"
                      data-target={item.target}
                    >
                      0
                    </h3>
                  </div>
                  <p data-aos="fade-up">{item.descrption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
