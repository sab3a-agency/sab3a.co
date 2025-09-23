"use client";

import { useEffect, useState } from "react";
import ErrorRequest from "../ErrorRequest";

let data = {
  titleEnd: "المصممة لاحتياجات عملك",
  span: " تكنولوجيا المعلومات  ",
  title: "حلول",
  description: `
                  استكشف مجموعة شاملة من خدمات تكنولوجيا المعلومات مصممة لتلبية
                  الاحتياجات الفريدة لعملك. من تطوير البرمجيات المخصصة إلى
                  استشارات تكنولوجيا المعلومات، نقدم حلولاً تدفع عملك إلى
                  الأمام.`,
  btnText: "    اقرأ المزيد",
  // Boxes: [
  //   {
  //     src: "./img/Vector.svg",
  //     title: "تحليل النظم",
  //     innerDescription: `
  //                         نقدم تحليلاً دقيقًا لأنظمتك لضمان الكفاءة والتكامل.
  //                         نحدد الثغرات ونقترح حلولًا تقنية لتحسين أداء عملك.`,
  //   },
  //   {
  //     src: "./img/brush.svg",
  //     title: "تطوير الواجهات الخلفية",
  //     innerDescription: `                          نبني أنظمة خلفية قوية وآمنة تدعم تطبيقاتك ومواقعك، مع
  //                         ضمان قابلية التطوير والأداء الفائق.`,
  //   },
  //   {
  //     src: "./img/message-programming.svg",
  //     title: "الفن الرقمي",
  //     innerDescription: `  نبتكر محتوى مرئيًا مذهلًا يعبر عن هوية علامتك
  //                         التجارية، من خلال تصميمات فنية رقمية تلهم وتجذب
  //                         الجمهور.
  //                         `,
  //   },
  // ],
  // Boxes2: [
  //   {
  //     src: "./img/color-swatch.svg",
  //     title: "تصميم واجهة المستخدم وتجربة المستخدم",
  //     innerDescription: `                          نصمم واجهات مستخدم جذابة وسهلة الاستخدام، مع التركيز
  //                         على تجربة مستخدم استثنائية تعزز تفاعل العملاء مع
  //                         منتجاتك.`,
  //   },
  //   {
  //     src: "./img/mobile-programming.svg",
  //     title: "تطوير تطبيقات الجوال والواجهات الأمامية",
  //     innerDescription: `   نحول أفكارك إلى تطبيقات جوال وواجهات ويب تفاعلية
  //                         وسريعة الاستجابة، مع ضمان أداء عالي وتجربة مستخدم
  //                         متميزة.`,
  //   },
  //   {
  //     src: "./img/brush.svg",
  //     title: "التسويق الرقمي",
  //     innerDescription: `

  //                         نطور استراتيجيات تسويقية مبتكرة لتعزيز وجودك الرقمي
  //                         وجذب العملاء المستهدفين، مع تحقيق أعلى عائد على
  //                         الاستثمار.`,
  //   },
  // ],
};

function HeroSkeleton() {
  return (
    <div className="ContentOurServices">
      <div className="container p-5 mt-4">
        {/* Wrapper Text & Description */}
        <div
          className="wapperServices d-flex flex-column flex-md-row justify-content-between"
          data-aos="fade-down"
        >
          {/* Text Skeleton */}
          <div className="Text placeholder-wave">
            <span className="placeholder bg-secondary col-8 rounded-pill mb-2"></span>
            <span className="placeholder bg-secondary col-6 rounded-pill mb-2"></span>
            <span className="placeholder bg-secondary col-4 rounded-pill"></span>
          </div>

          {/* Description Skeleton */}
          <div className="Description d-flex flex-column gap-3">
            <p className="placeholder-wave">
              <span className="placeholder bg-secondary col-12 rounded-pill mb-2"></span>
              <span className="placeholder bg-secondary col-10 rounded-pill mb-2"></span>
              <span className="placeholder bg-secondary col-8 rounded-pill"></span>
            </p>
            <a
              href="#"
              className="btn placeholder-wave d-flex align-items-center justify-content-center bg-secondary"
              style={{ width: "150px", height: "40px" }}
            ></a>
          </div>
        </div>

        {/* Servers Skeleton */}
        <div className="infoServers mt-50" data-aos="fade-up">
          <div className="row">
            {/* Left Side */}
            <div className="col-md-6">
              <div className="d-flex flex-column gap-4">
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className="box d-flex align-items-start p-3 rounded placeholder-wave"
                  >
                    <div
                      className="Wrappericon me-3 d-flex align-items-center justify-content-center placeholder bg-secondary rounded-circle"
                      style={{ width: "60px", height: "60px" }}
                    ></div>
                    <div className="info flex-grow-1">
                      <h5 className="fw-bold fs-3 placeholder bg-secondary col-8 rounded-pill mb-2"></h5>
                      <p className="placeholder bg-secondary col-10 rounded-pill"></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="col-md-6">
              <div className="d-flex flex-column gap-4">
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className="box d-flex align-items-start p-3 rounded placeholder-wave"
                  >
                    <div
                      className="Wrappericon me-3 d-flex align-items-center justify-content-center placeholder bg-secondary rounded-circle"
                      style={{ width: "60px", height: "60px" }}
                    ></div>
                    <div className="info flex-grow-1">
                      <h5 className="fw-bold fs-3 placeholder bg-secondary col-8 rounded-pill mb-2"></h5>
                      <p className="placeholder bg-secondary col-10 rounded-pill"></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/projects/homepage");

        if (!res.ok) {
          throw new Error("Failed to fetch homepage data");
        }

        const result = await res.json();

        if (result.code !== 200) {
          throw new Error(result.message || "Upstream API error");
        }

        setServices(result.data.services || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !services) {
    return <HeroSkeleton />;
  }

  if (error) {
    return <ErrorRequest />;
  }
  // console.log("Servicess :: ", services);

  return (
    <>
      <div className="ContentOurServices">
        <div className="container p-5 mt-4">
          <div
            className="wapperServices  d-flex flex-column flex-md-row justify-content-space-between "
            data-aos="fade-down"
          >
            <div className="Text">
              {data.title}

              <span>{data.span}</span>

              {data.titleEnd}
            </div>

            <div className="Description">
              <p className="">{data.description}</p>
              <a
                href="#"
                className="btn btn-danger d-flex align-items-center justify-content-center"
              >
                {data.btnText}
              </a>
            </div>
          </div>

          {/* Servers */}
          <div className="infoServers mt-50" data-aos="fade-up">
            <div className="row">
              {/* Left side */}
              <div className="col-md-6">
                <div className="d-flex flex-column gap-5">
                  {services
                    .slice(0, Math.ceil(services.length / 2))
                    .map((service) => (
                      <div
                        key={service.id}
                        className="box d-flex align-items-start p-3 rounded"
                      >
                        <div className="Wrappericon me-3 d-flex align-items-center justify-content-center">
                          <img
                            className="icon"
                            src={service.icon}
                            alt={service.title}
                            onError={(e) => {
                              e.currentTarget.src = "../img/LoagingState.png";
                              e.currentTarget.style.objectFit = "contain";
                            }}
                          />
                        </div>
                        <div className="info">
                          <h5 className="fw-bold fs-3">{service.title}</h5>
                          <p>{service.description}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Right side */}
              <div className="col-md-6">
                <div className="d-flex flex-column gap-5">
                  {services
                    .slice(Math.ceil(services.length / 2))
                    .map((service) => (
                      <div
                        key={service.id}
                        className="box d-flex align-items-start p-3 rounded"
                      >
                        <div className="Wrappericon me-3 d-flex align-items-center justify-content-center">
                          <img
                            className="icon"
                            src={service.icon}
                            alt={service.title}
                            onError={(e) => {
                              e.currentTarget.src = "../img/LoagingState.png";
                              e.currentTarget.style.objectFit = "contain";
                            }}
                          />
                        </div>
                        <div className="info">
                          <h5 className="fw-bold fs-3">{service.title}</h5>
                          <p>{service.description}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
