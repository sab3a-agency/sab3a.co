"use client"

import Image from "next/image"

const partners = [
  {
    src: "/img/partnersLogo/transport-general-authority-seeklogo 1.svg",
    link: "https://example.com/1"
  },
  {
    src: "/img/partnersLogo/saudi-inovation-logo .svg",
    link: "https://example.com/2"
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
    link: "https://example.com/11"
  },
  { src: "/img/partnersLogo/download.svg", link: "https://example.com/12" },
  {
    src: "/img/partnersLogo/Asset 11200 1.svg",
    link: "https://example.com/13"
  },
  {
    src: "/img/partnersLogo/transport-general-authority-seeklogo 1.svg",
    link: "https://example.com/1"
  },
  {
    src: "/img/partnersLogo/saudi-inovation-logo .svg",
    link: "https://example.com/2"
  },
  { src: "/img/partnersLogo/image 9.svg", link: "https://example.com/3" },
  { src: "/img/partnersLogo/image 8.svg", link: "https://example.com/4" },
  { src: "/img/partnersLogo/image 7.svg", link: "https://example.com/5" },
  { src: "/img/partnersLogo/image 6.svg", link: "https://example.com/6" },
  { src: "/img/partnersLogo/image 5.svg", link: "https://example.com/7" },
  { src: "/img/partnersLogo/image 4.svg", link: "https://example.com/8" },
  { src: "/img/partnersLogo/image 3.svg", link: "https://example.com/9" }
  // { src: "/img/partnersLogo/image 2.svg", link: "https://example.com/10" },
  // {
  //   src: "/img/partnersLogo/GATEKEEPER_LOGO_72 1.svg",
  //   link: "https://example.com/11",
  // },
  // { src: "/img/partnersLogo/download.svg", link: "https://example.com/12" },
  // {
  //   src: "/img/partnersLogo/Asset 11200 1.svg",
  //   link: "https://example.com/13",
  // },
]

const chunkArray = (arr, size) => {
  let result = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}

const groupedPartners = chunkArray(partners, 11)

export default function PartnerSession() {
  return (
    <div className="Your_partner_in_success">
      <div className="container mt-80">
        <div
          className="title m-5 d-flex justify-content-between align-items-center"
          data-aos="zoom-in"
        >
          <h3>
            شريكك في <span>النجاح الرقمي</span>
          </h3>
          <div className="btns">
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="partnersLogos row" data-aos="fade-up">
          <div id="carouselExampleInterval" className="carousel slide">
            <div className="carousel-inner">
              {/* data-bs-interval="carousel" to auto scroll */}
              {groupedPartners.map((group, index) => {
                return (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <div className="d-flex flex-column align-items-center gap-3">
                      <div className="Wrapperbox d-flex  gap-3">
                        {group.map((partner, i) => (
                          <div
                            key={i}
                            className="box p-2 d-flex  justify-content-center align-items-center "
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
                                width={1000}
                                height={1000}
                                loading="lazy"
                              />
                            </a>
                          </div>
                        ))}
                      </div>

                      {/* <div className="Wrapperbox d-flex flex-wrap justify-content-center gap-3">
                        {row2.map((partner, i) => (
                          <div
                            key={i}
                            className="p-2 box d-flex justify-content-center align-items-center"
                          >
                            <a
                              href={partner.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={partner.src}
                                alt="شعار الشريك"
                                className="img-fluidv d-flex flex-wrap align-items-center justify-content-center "
                                loading="lazy"
                              />
                            </a>
                          </div>
                        ))}
                      </div> */}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
