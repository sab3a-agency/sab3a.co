"use client";

export function PartnersMarquee() {
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
  ];

  return (
    <>
      <marquee
        behavior="scroll"
        direction="left"
        scroll-amount="1900"
        className="marqueeLg mt-80"
        data-aos="zoom-out"
      >
        {partners.map((partner, index) => (
          <a
            key={index}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-5"
          >
            <img src={partner.src} alt="partner logo" className="h-16 w-auto" />
          </a>
        ))}
      </marquee>

      <div
        className="PartnersMarquee_sm row mt-5 justify-content-center"
        data-aos="zoom-in"
      >
        {partners.map((partner, index) => (
          <div key={index} className="col-4 d-flex justify-content-center mb-3">
            <a href={partner.link} target="_blank" rel="noopener noreferrer">
              <div className="outerImgWrrap d-flex align-items-center justify-content-center">
                <img
                  src={partner.src}
                  alt="partner_logo"
                  className="partner_logo"
                  style={{ height: "60px", width: "auto" }}
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
