"use client";
import Image from "next/image";
const DataAboutUs = {
  small: "من نحن",
  title: "نحن أفضل وكالة",
  spanText: "شريك تقني",
  titleEnd: " في مجال تقنية المعلومات",
  description:
    "استكشف مجموعة شاملة من خدمات تكنولوجيا المعلومات مصممة لتلبية الاحتياجات الفريدة لعملك. من تطوير البرمجيات المخصصة إلى استشارات تكنولوجيا المعلومات، نقدم حلولاً تدفع عملك إلى الأمام.",
  imgSrc: "/img/image.png",
  features: [
    {
      id: 1,
      iconSrc: "../img/magicicon.svg",
      title: "أفضل حل",
      description:
        "اكتشف أفضل حل لاحتياجاتك. حل التحديات، بسط العمليات، وحقق النتائج المثلى.",
    },
    {
      id: 2,
      iconSrc: "../img/Authentication_icon.svg",
      title: "جوائز أفضل اختيار",
      description:
        "نعترف بالتميز: اكتشف جوائز أفضل اختيار. اكتشف المنتجات والخدمات والعلامات التجارية الرائدة التي تستحق النظر فيها.",
    },
  ],
};
export default function HowWeAre() {
  return (
    <div className="HowWeAre mt-80">
      <div className="container py-5 mt-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center" data-aos="zoom-in">
            <div className="imgWrapp">
              <Image
                className="img-fluid"
                src={DataAboutUs.imgSrc}
                alt="meeting_img"
                loading="lazy"
                width={1000}
                height={1000}
              />
            </div>
          </div>

          <div
            className="col-12 col-md-6 d-flex flex-column gap-3"
            data-aos="zoom-in"
          >
            <div className="info mb-4 mt-5 container">
              <small>{DataAboutUs.small}</small>
              <h3 className="heroinfo my-4">
                {DataAboutUs.title} <span>{DataAboutUs.spanText}</span>
                {DataAboutUs.titleEnd}
              </h3>
              <p className="w-100">{DataAboutUs.description}</p>
            </div>

            <div className="WrappersubSession mt-5 mx-3 mx-md-0">
              <div className="boxs d-flex flex-column  gap-4">
                {DataAboutUs.features.map((feature) => (
                  <div
                    key={feature.id}
                    className="box d-flex gap-4 align-items-center "
                  >
                    <div className="icon ">
                      <img
                        src={feature.iconSrc}
                        style={{ maxWidth: "20rem !important" }}
                        alt="icon"
                      />
                    </div>
                    <div className="information  d-flex flex-column align-items-start justify-content-center ">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
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
