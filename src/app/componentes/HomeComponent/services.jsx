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
                  {data.Boxes.map((box, index) => (
                    <div
                      key={index}
                      className="box d-flex align-items-start p-3 rounded"
                    >
                      <div className="Wrappericon me-3 d-flex align-items-center justify-content-center">
                        <img className="icon" src={box.src} alt="icon" />
                      </div>
                      <div className="info">
                        <h5 className="fw-bold fs-3">{box.title}</h5>
                        <p>{box.innerDescription}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side */}
              <div className="col-md-6">
                <div className="d-flex flex-column gap-5">
                  {data.Boxes2.map((box, index) => (
                    <div
                      key={index}
                      className="box d-flex align-items-start p-3 rounded"
                    >
                      <div className="Wrappericon me-3 d-flex align-items-center justify-content-center">
                        <img className="icon" src={box.src} alt="icon" />
                      </div>
                      <div className="info">
                        <h5 className="fw-bold fs-3">{box.title}</h5>
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
    </>
  );
}
