"use client";

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
  Boxes: [
    {
      src: "./img/Vector.svg",
      title: "تحليل النظم",
      innerDescription: `
                          نقدم تحليلاً دقيقًا لأنظمتك لضمان الكفاءة والتكامل.
                          نحدد الثغرات ونقترح حلولًا تقنية لتحسين أداء عملك.`,
    },
    {
      src: "./img/brush.svg",
      title: "تطوير الواجهات الخلفية",
      innerDescription: `                          نبني أنظمة خلفية قوية وآمنة تدعم تطبيقاتك ومواقعك، مع
                          ضمان قابلية التطوير والأداء الفائق.`,
    },
    {
      src: "./img/message-programming.svg",
      title: "الفن الرقمي",
      innerDescription: `  نبتكر محتوى مرئيًا مذهلًا يعبر عن هوية علامتك
                          التجارية، من خلال تصميمات فنية رقمية تلهم وتجذب
                          الجمهور.
                          `,
    },
  ],
  Boxes2: [
    {
      src: "./img/color-swatch.svg",
      title: "تصميم واجهة المستخدم وتجربة المستخدم",
      innerDescription: `                          نصمم واجهات مستخدم جذابة وسهلة الاستخدام، مع التركيز
                          على تجربة مستخدم استثنائية تعزز تفاعل العملاء مع
                          منتجاتك.`,
    },
    {
      src: "./img/mobile-programming.svg",
      title: "تطوير تطبيقات الجوال والواجهات الأمامية",
      innerDescription: `   نحول أفكارك إلى تطبيقات جوال وواجهات ويب تفاعلية
                          وسريعة الاستجابة، مع ضمان أداء عالي وتجربة مستخدم
                          متميزة.`,
    },
    {
      src: "./img/brush.svg",
      title: "التسويق الرقمي",
      innerDescription: `
      
                          نطور استراتيجيات تسويقية مبتكرة لتعزيز وجودك الرقمي
                          وجذب العملاء المستهدفين، مع تحقيق أعلى عائد على
                          الاستثمار.`,
    },
  ],
};
export default function Services() {
  return (
    <>
      <div className="ContentOurServices">
        <div className="container p-5 mt-4">
          <div className="wapperServices row d-flex  justify-content-space-between ">
            <div className="col-md-4">
              <div className="Text">
                {data.title}

                <span>{data.span}</span>

                {data.titleEnd}
              </div>
            </div>
            <div className="col-md-4">
              <div className="Description">
                <p>{data.description}</p>
                <a
                  href="#"
                  className="btn btn-danger d-flex align-items-center justify-content-center"
                >
                  {data.btnText}
                </a>
              </div>
            </div>
          </div>

          <div className="infoServers p-5 mt-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6 d-flex justify-content-center  ">
                  <div className="side_1">
                    {data.Boxes.map((box, index) => (
                      <div
                        key={index}
                        className="box d-flex align-items-center justify-content-center"
                      >
                        <div className="Wrappericon d-flex justify-content-center align-items-center">
                          <img className="icon" src={box.src} alt="icon" />
                        </div>
                        <div className="info">
                          <h1>{box.title}</h1>
                          <p>{box.innerDescription}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="side_1">
                    {data.Boxes2.map((box, index) => (
                      <div
                        key={index}
                        className="box d-flex align-items-center justify-content-center"
                      >
                        <div className="Wrappericon d-flex justify-content-center align-items-center">
                          <img className="icon" src={box.src} alt="icon" />
                        </div>
                        <div className="info">
                          <h1>{box.title}</h1>
                          <p>{box.innerDescription}</p>
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
    </>
  );
}
