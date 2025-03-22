"use client";
import { useEffect } from "react";
const JourneyPoint = [
  {
    small: " 2004 ",
    h3: " تأسيس سبعة ",
    p: " تأسست إنوفارت ستوديو في عام 2004 برؤية لدمج الابتكار والفن، مقدمة تجارب رقمية فريدة. ",
  },
  {
    small: " 2006 ",
    h3: " تأسيس سبعة ",
    p: " في عام 2006، حصلنا على أول عميل رئيسي لنا، وهو إنجاز كبير أكد نهجنا وأسس لمرحلة النمو المستقبلية.",
  },
  {
    small: " 2012 ",
    h3: " توسيع الفريق ",
    p: " في عام 2012، نما فريقنا، حيث جلبنا مواهب جديدة ووجهات نظر متنوعة. سمح لنا هذا التوسع بتولي مشاريع أكثر طموحاً وتقديم نتائج أفضل لعملائنا.  ",
  },
  {
    small: " 2015 ",
    h3: " جوائز الصناعة ",
    p: " في عام 2015، حصلنا على أول جائزة في الصناعة، تقديراً لالتزامنا بالابتكار والتميز. ",
  },
  {
    small: " 2018 ",
    h3: " عملاء دوليون ",
    p: " بحلول عام 2018، وسعنا نطاقنا، متعاونين مع عملاء من جميع أنحاء العالم. ",
  },
  {
    small: " 2024 ",
    h3: " الآن ",
    p: " اليوم، في عام 2024، تقف إنوفارت ستوديو كمنارة للإبداع والابتكار. مع فريق موهوب ومحفظة متنوعة، نستمر في تقديم تجارب رقمية استثنائية للعملاء في جميع أنحاء العالم. ",
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
const data = JourneyPoint.slice(0, 3);
const data2 = JourneyPoint.slice(3, JourneyPoint.length);
export default function JourneyPoints() {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");

    const startCount = (counter, index) => {
      let start = 0;
      const end = parseInt(counter.getAttribute("data-target"), 10);
      const duration = 3000;
      const step = Math.ceil(end / (duration / 100));

      const updateCounter = () => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }

        counter.innerText = (index === 1 ? "" : "+") + start;
      };

      const interval = setInterval(updateCounter, 50);
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
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter, index) => observer.observe(counter, index));
  }, []);

  return (
    <section className="JourneyPoints  ">
      <div className="container">
        <div className="row ">
          <div className="col-12 col-md-6">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="box d-flex align-items-start justify-content-center gap-4"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration={index * 500}
                >
                  <div
                    className={`cyrcle ${index === 0 ? "Active" : ""}`}
                  ></div>
                  <small>{item.small}</small>
                  <div className="heading d-flex flex-column justify-content-center align-items-start gap-2">
                    <h3>{item.h3}</h3>
                    <p>{item.p}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-12 col-md-6">
            {data2.map((item, index) => {
              return (
                <div
                  key={index}
                  className="box d-flex align-items-start  gap-4"
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
                  <div className="heading d-flex flex-column  align-items-start gap-2">
                    <h3>{item.h3}</h3>
                    <p>{item.p}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="targets row mt-50">
          {target.map((item, index) => {
            return (
              <div key={index} className="col-6 col-md-3">
                <div className="box ">
                  <div className="detals d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex gap-5">
                      <img src={item.src} alt="icon" />
                      <h3 className="counter" data-target={item.target}>
                        0
                      </h3>
                    </div>
                    <p data-aos="fade-up">{item.descrption}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
