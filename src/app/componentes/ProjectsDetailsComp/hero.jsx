"use client";
import { useRouter } from "next/navigation";

export default function Hero({ DefultData }) {
  let Back = useRouter();
  return (
    <>
      <section className="Hero mt-50">
        <div className="container">
          <div className="Hero">
            {DefultData?.map((features, index) => (
              <div
                key={index}
                className="headWrapper d-flex flex-column align-items-start justify-content-between"
              >
                <div className="rigthside  d-flex align-items-center gap-4 ">
                  <a
                    onClick={() => Back.back()}
                    className="arrow"
                    style={{ cursor: "pointer" }}
                  >
                    <img src="../img/ProjectsDetails/Icon.svg" alt=" arrow" />
                  </a>
                  <h1 className="d-flex flex-column align-items-start">
                    {features.title}
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
