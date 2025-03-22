import { useRouter } from "next/navigation";

const DefultData = [
  {
    title: " قبعات الأطفال ",
    titleEtc: " تطبيق سوبر صديق للأطفال ",
    span: "20 أكتوبر",
    small: "ترفيه",
  },
];
export default function Hero() {
  let Back = useRouter();
  return (
    <>
      <section className="Hero mt-50">
        <div className="container">
          <div className="Hero">
            {DefultData.map((features, index) => (
              <div
                key={index}
                className="headWrapper d-flex flex-column align-items-start justify-content-between"
              >
                <div className="rigthside  d-flex align-items-center gap-4 ">
                  <a
                    onClick={() => Back.push("/servicesPage")}
                    className="arrow"
                    style={{ cursor: "pointer" }}
                  >
                    <img src="../img/ProjectsDetails/Icon.svg" alt=" arrow" />
                  </a>
                  <h1 className="d-flex flex-column align-items-start">
                    <small> {features.title}</small>
                    {features.titleEtc}
                  </h1>
                </div>
                <div className="leftSide d-flex align-items-center gap-4">
                  <span>{features.span}</span>
                  <span className="dot">.</span>
                  <small>{features.small}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
