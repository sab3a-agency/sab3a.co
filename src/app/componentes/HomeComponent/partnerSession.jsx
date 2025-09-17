"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const chunkArray = (arr, size) => {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

export default function PartnerSession() {
  const [partners, setPartners] = useState([]);
  const [leftBtnSrc, setLeftBtnSrc] = useState("/img/DefultBTN.svg");
  const [rightBtnSrc, setRightBtnSrc] = useState("/img/DefultBTN.svg");

  useEffect(() => {
    async function fetchPartners() {
      try {
        const res = await fetch("/api/projects/partners", {
          cache: "no-store",
        });

        if (!res.ok) throw new Error("Failed to fetch partners");

        const result = await res.json();
        setPartners(result.partners || []);
      } catch (err) {
        console.error("Error fetching partners:", err);
      }
    }

    fetchPartners();
  }, []);

  const groupedPartners = chunkArray(partners, 11);

  return (
    <div className="Your_partner_in_success position-relative">
      <div className="container mt-80">
        <div
          className="title m-5 d-flex justify-content-between align-items-center"
          data-aos="zoom-in"
        >
          <h3>
            شريكك في <span>النجاح الرقمي</span>
          </h3>

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
              src={rightBtnSrc}
              alt="Next"
              className="rightBTN carousel-control-next"
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
            <div className="carousel-inner">
              {groupedPartners.map((group, index) => (
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
