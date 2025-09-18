"use client";

import { useEffect, useState } from "react";

export function PartnersMarquee() {
  const [partners, setPartners] = useState([]);

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

  return (
    <>
      <marquee
        behavior="scroll"
        direction="left"
        scroll-amount="1900"
        className="marqueeLg mt-80"
        data-aos="zoom-out"
      >
        {partners.map((partner) => (
          <a
            key={partner.id}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-5"
          >
            <img
              src={partner.src}
              alt="partner logo"
              className="partner h-16 object-fit-cover"
              onError={(e) => {
                e.currentTarget.src = "../img/LoagingState.png";
                e.currentTarget.style.objectFit = "contain";
              }}
            />
          </a>
        ))}
      </marquee>

      <div
        className="PartnersMarquee_sm row mt-5 d-flex justify-content-center"
        data-aos="zoom-in"
      >
        {partners.map((partner) => (
          <div key={partner.id} className="col-4 col-xl-2  mb-3">
            <a href={partner.link} target="_blank" rel="noopener noreferrer">
              <div className="outerImgWrrap d-flex align-items-center justify-content-center">
                <img
                  src={partner.src}
                  alt="partner_logo"
                  className="partner_logo object-fit-contain"
                  style={{ height: "60px", width: "auto" }}
                  onError={(e) => {
                    e.currentTarget.src = "../img/LoagingState.png";
                    e.currentTarget.style.objectFit = "contain";
                  }}
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
