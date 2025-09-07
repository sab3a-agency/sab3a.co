"use client";

import Image from "next/image";
import { useState } from "react";

const partners = [
  {
    src: "/img/partnersLogo/transport-general-authority-seeklogo 1.svg",
    link: "https://example.com/1",
  },
  {
    src: "/img/partnersLogo/saudi-inovation-logo .svg",
    link: "https://example.com/2",
  },
  { src: "/img/partnersLogo/image 9.svg", link: "https://example.com/3" },
  { src: "/img/partnersLogo/image 8.svg", link: "https://example.com/4" },
  { src: "/img/partnersLogo/image 7.svg", link: "https://example.com/5" },
  { src: "/img/partnersLogo/image 6.svg", link: "https://example.com/6" },
  { src: "/img/partnersLogo/image 5.svg", link: "https://example.com/7" },
  { src: "/img/partnersLogo/image 4.svg", link: "https://example.com/8" },
  { src: "/img/partnersLogo/image 3.svg", link: "https://example.com/9" },
  { src: "/img/partnersLogo/image 2.svg", link: "https://example.com/10" },
  {
    src: "/img/partnersLogo/GATEKEEPER_LOGO_72 1.svg",
    link: "https://example.com/11",
  },
  { src: "/img/partnersLogo/download.svg", link: "https://example.com/12" },
  {
    src: "/img/partnersLogo/Asset 11200 1.svg",
    link: "https://example.com/13",
  },
  {
    src: "/img/partnersLogo/transport-general-authority-seeklogo 1.svg",
    link: "https://example.com/1",
  },
  {
    src: "/img/partnersLogo/saudi-inovation-logo .svg",
    link: "https://example.com/2",
  },
  { src: "/img/partnersLogo/image 9.svg", link: "https://example.com/3" },
  { src: "/img/partnersLogo/image 8.svg", link: "https://example.com/4" },
  { src: "/img/partnersLogo/image 7.svg", link: "https://example.com/5" },
  { src: "/img/partnersLogo/image 6.svg", link: "https://example.com/6" },
  { src: "/img/partnersLogo/image 5.svg", link: "https://example.com/7" },
  { src: "/img/partnersLogo/image 4.svg", link: "https://example.com/8" },
  { src: "/img/partnersLogo/image 3.svg", link: "https://example.com/9" },
];

const chunkArray = (arr, size) => {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const groupedPartners = chunkArray(partners, 11);

export default function PartnerSession() {
  const [leftBtnSrc, setLeftBtnSrc] = useState("/img/DefultBTN.svg");
  const [rightBtnSrc, setRightBtnSrc] = useState("/img/DefultBTN.svg");

  return (
    <div className="Your_partner_in_success position-relative">
      <div className="container mt-80">
        <div
          className="title m-5 d-flex justify-content-between align-items-center "
          data-aos="zoom-in"
        >
          <h3>
            شريكك في <span>النجاح الرقمي</span>
          </h3>
          {/* ================================== */}

          <div className="SucessBtns d-flex justify-content-between align-items-center gap-5 position-absolute">
            <img
              src={leftBtnSrc}
              alt="Previous"
              className="leftBTN carousel-control-prev"
              onMouseEnter={() => setLeftBtnSrc("/img/HoverBTN.svg")}
              onMouseLeave={() => setLeftBtnSrc("/img/DefultBTN.svg")}
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            />
            <img
              className="rightBTN carousel-control-next"
              src={rightBtnSrc}
              alt="Next"
              onMouseEnter={() => setRightBtnSrc("/img/HoverBTN.svg")}
              onMouseLeave={() => setRightBtnSrc("/img/DefultBTN.svg")}
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            />
          </div>
        </div>

        <div className="partnersLogos" data-aos="fade-up">
          <div
            id="carouselExampleInterval"
            className="carousel slide position-relative"
          >
            {/* ================================== */}

            <div className="carousel-inner">
              {groupedPartners.map((group, index) => {
                return (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <div className="d-flex flex-column align-items-center gap-3">
                      <div className="Wrapperbox d-flex flex-wrap justify-content-center gap-3">
                        {group.map((partner, i) => (
                          <div
                            key={i}
                            className="box p-2 d-flex justify-content-center align-items-center"
                          >
                            <a
                              href={partner.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                src={partner.src}
                                alt="شعار الشريك"
                                className="img-fluid"
                                width={150}
                                height={150}
                                loading="lazy"
                              />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
