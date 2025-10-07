"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ErrorRequest from "../ErrorRequest";
const data = {
  srces: [
    "/img/withHeadphone.png",
    "/img/image.png",
    "/img/withMindMap.png",
    "/img/AlwaysReady.png",
  ],
  title: " رفع ",
  span: " وجودك الرقمي ",
  titleEnd: "  من خلال الابتكار  ",
  discription: `  اكتشف القصة وراء سبعة. نحن أكثر من مجرد وكالة تكنولوجيا
                  المعلومات؛ نحن شريكك الاستراتيجي في التنقل عبر المشهد الرقمي.
                  التزامنا هو تمكين الشركات من خلال حلول تكنولوجية تحويلية.`,
  btn: "    اقرا المزيد ",
  // boxes: [
  //   {
  //     title: " الخبراء ",
  //     discription: `                            يقدم فريقنا المتمرس من محترفي تكنولوجيا المعلومات
  //                           ثروة من الخبرة، مع مهارات متنوعة وشغف بالابتكار. `,
  //   },
  //   {
  //     title: " سجل حافل مثبت ",
  //     discription: `                             ثق في النتائج. النجاح الراسخ لإنو تك هو دليل على
  //                           قدرتنا على تقديم مشاريع ناجحة.  `,
  //   },
  //   {
  //     title: " حلول مخصصة ",
  //     discription: `                              نقوم بصياغة حلول تكنولوجيا المعلومات المصممة خصيصًا
  //                           لتتناسب مع احتياجات عملك المحددة، مما يضمن توافقًا
  //                           مثاليًا مع أهدافك.        `,
  //   },
  //   {
  //     title: " دعم مستمر ",
  //     discription: `                            يقدم فريقنا المتمرس من محترفي تكنولوجيا المعلومات
  //                           ثروة من الخبرة، مع مهارات متنوعة وشغف بالابتكار. `,
  //   },
  // ],
};

function HeroSkeleton() {
  return (
    <div className="part2 pt-md-5 mt-80">
      <div className="row">
        {/* Left side skeleton */}
        <div className="col-md-6">
          <div className="BoxText" data-aos="zoom-in">
            <h3>
              <span className="placeholder col-6 rounded me-2"></span>
              <span className="placeholder col-4 rounded me-2"></span>
              <span className="placeholder col-5 rounded"></span>
            </h3>
            <p>
              <span className="placeholder col-12 rounded mb-2"></span>
              <span className="placeholder col-10 rounded mb-2"></span>
              <span className="placeholder col-8 rounded"></span>
            </p>
            <div
              className="btn btn-danger placeholder-wave"
              style={{ width: "150px", height: "40px" }}
            ></div>
          </div>
        </div>

        {/* Right side skeleton */}
        <div className="col-md-6">
          <div className="ContenerWrapper">
            <div className="row d-flex flex-wrap">
              {/* FirstSide */}
              <div className="col-12 col-sm-6 d-flex justify-content-center">
                <div className="FirstSide d-flex flex-column align-items-center gap-3">
                  {[...Array(2)].map((_, index) => (
                    <div
                      key={index}
                      className="box placeholder-wave"
                      style={{ width: "100%", minHeight: "100px" }}
                    >
                      <div className="boxContent">
                        <span className="placeholder col-8 rounded mb-2"></span>
                        <span className="placeholder col-10 rounded"></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SecondSide */}
              <div className="col-12 col-sm-6 d-flex justify-content-center">
                <div className="SecondSide d-flex flex-column align-items-center gap-3">
                  {[...Array(2)].map((_, index) => (
                    <div
                      key={index}
                      className="box placeholder-wave"
                      style={{ width: "100%", minHeight: "100px" }}
                    >
                      <div className="boxContent">
                        <span className="placeholder col-8 rounded mb-2"></span>
                        <span className="placeholder col-10 rounded"></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const [homepageData, setHomepageData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/projects/homepage");
        if (!res.ok) throw new Error("Failed to fetch");

        const result = await res.json();
        if (result.code !== 200) throw new Error(result.message);

        const cleanedStatistics = result.data.statistics.map((item) => ({
          ...item,
          numericValue: parseInt(item.value.replace(/\D/g, ""), 10) || 0,
        }));

        setHomepageData({
          ...result.data,
          statistics: cleanedStatistics,
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  if (!homepageData) return <ErrorRequest />;

  console.log("feauter :: ", homepageData.features);

  return (
    <div className="sessionWhyChooseUs ">
      <div className="container p-5 mt-5">
        <div className="partImages">
          {
            <div className="row">
              <div className="col-6 col-xl-2 col-md-3 mb-3 d-none d-md-block">
                <div className="wapp">
                  <Image
                    src={data.srces[0]}
                    width={1000}
                    height={1000}
                    alt="img"
                    data-aos="fade-left"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-12 col-xl-3 col-md-11 mb-3 order-3 order-md-2">
                <div className="wappLongimg">
                  <Image
                    id="wappLongimg"
                    src={data.srces[1]}
                    alt="img "
                    data-aos="zoom-in"
                    width={1000}
                    height={1000}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-6 col-xl-3 col-md-4 mb-3">
                <div className="wappLongimg">
                  <Image
                    src={data.srces[2]}
                    alt="img"
                    data-aos="zoom-in"
                    width={1000}
                    height={1000}
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="col-6 col-xl-2 col-md-4 mb-3 ">
                <div className="wappLongimg">
                  <Image
                    src={data.srces[3]}
                    alt="img"
                    width={1000}
                    data-aos="zoom-in"
                    height={1000}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          }
        </div>
        <div className="part2 pt-md-5 mt-80">
          <div className="row">
            <div className="col-md-6">
              <div className="BoxText" data-aos="zoom-in">
                <h3>
                  {data.title}
                  <span>{data.span}</span>
                  {data.titleEnd}
                </h3>
                <p>{data.discription}</p>
                <button className="btn btn-danger d-flex align-items-center  justify-content-center">
                  {data.btn}
                </button>
              </div>
            </div>

            <div className="col-md-6">
              <div className="ContenerWrapper">
                <div className="row d-flex flex-wrap">
                  <div className="col-12 col-sm-6 d-flex justify-content-center">
                    <div className="FirstSide d-flex flex-column align-items-center">
                      {homepageData.features.slice(0, 2).map((box, index) => {
                        return (
                          <div
                            key={index}
                            className={`box ${index === 0 ? "Active" : ""}`}
                          >
                            <div className="boxContent" data-aos="fade-zoom-in">
                              <h2>{box.title}</h2>
                              <p>{box.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 d-flex justify-content-center">
                    <div className="SecondSide d-flex flex-column align-items-center">
                      {homepageData.features.slice(2, 4).map((box, index) => (
                        <div key={index} className="box">
                          <div className="boxContent" data-aos="fade-zoom-in">
                            <h2>{box.title}</h2>
                            <p>{box.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
