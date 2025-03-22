"use client";

import { useMemo, useState } from "react";

const Defultdata = {
  srces: [
    "/img/withHeadphone.png	",
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
  boxes: [
    {
      title: " الخبراء ",
      discription: `                            يقدم فريقنا المتمرس من محترفي تكنولوجيا المعلومات
                            ثروة من الخبرة، مع مهارات متنوعة وشغف بالابتكار. `,
    },
    {
      title: " سجل حافل مثبت ",
      discription: `                             ثق في النتائج. النجاح الراسخ لإنو تك هو دليل على
                            قدرتنا على تقديم مشاريع ناجحة.  `,
    },
    {
      title: " حلول مخصصة ",
      discription: `                              نقوم بصياغة حلول تكنولوجيا المعلومات المصممة خصيصًا
                            لتتناسب مع احتياجات عملك المحددة، مما يضمن توافقًا
                            مثاليًا مع أهدافك.        `,
    },
    {
      title: " دعم مستمر ",
      discription: `                            يقدم فريقنا المتمرس من محترفي تكنولوجيا المعلومات
                            ثروة من الخبرة، مع مهارات متنوعة وشغف بالابتكار. `,
    },
  ],
};
export default function WhyChooseUs() {
  const data = useMemo(() => Defultdata, []);
  return (
    <div className="sessionWhyChooseUs ">
      <div className="container p-5 mt-5">
        <div className="partImages">
          {
            <div className="row">
              <div className="col-6 col-md-2 mb-3  d-none d-md-block">
                <div className="wapp">
                  <img src={data.srces[0]} alt="img" data-aos="fade-left" />
                </div>
              </div>
              <div className="col-6 col-md-6 mb-3 order-3 order-md-2">
                <div className="wappLongimg">
                  <img
                    id="wappLongimg"
                    src={data.srces[1]}
                    alt="img "
                    data-aos="zoom-in"
                  />
                </div>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <div className="wappLongimg">
                  <img src={data.srces[2]} alt="img" data-aos="zoom-in" />
                </div>
              </div>

              <div className="col-6 col-md-2 mb-3">
                <div className="wappLongimg">
                  <img src={data.srces[3]} alt="img" data-aos="fade-right" />
                </div>
              </div>
            </div>
          }
        </div>
        <div className="part2 pt-5 mt-80">
          <div className="row">
            <div className="col-md-6">
              <div className="BoxText" data-aos="fade-up">
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

            <div className="col-md-6" data-aos="fade-right">
              <div className="ContenerWrapper">
                <div className="row d-flex flex-wrap">
                  <div className="col-12 col-sm-6 d-flex justify-content-center">
                    <div className="FirstSide d-flex flex-column align-items-center">
                      {data.boxes.slice(0, 2).map((box, index) => {
                        return (
                          <div
                            key={index}
                            className={`box ${index === 0 ? "Active" : ""}`}
                          >
                            <div className="boxContent">
                              <h2>{box.title}</h2>
                              <p>{box.discription}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 d-flex justify-content-center">
                    <div className="SecondSide d-flex flex-column align-items-center">
                      {data.boxes.slice(2, 4).map((box, index) => (
                        <div key={index} className="box">
                          <div className="boxContent">
                            <h2>{box.title}</h2>
                            <p>{box.discription}</p>
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
