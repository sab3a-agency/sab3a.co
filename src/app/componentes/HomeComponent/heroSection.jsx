"use client";
const data = {
  src: "/img/meting.jpeg",
  innerSrc: "/img/decorative star.svg",
  smallcontent: [
    "تطوير",
    "تصميم واجهة المستخدم وتجربة المستخدم",
    "تصميم جرافيكي",
    "رسم توضيحي",
  ],
};
export default function Herosection() {
  return (
    <section className="HeroContent  ">
      <div className="container p-5  pt-0">
        <div className="lastPart row mt-90">
          <div className="container">
            <div className="imgWrapper" data-aos="fade-up">
              <img src={data.src} alt="meeting" />
            </div>
          </div>
        </div>
      </div>
      <div className="RunningLikePost row mt-0 p-0">
        <div className="col-md-12">
          <div className="Text-Running">
            <div className="row">
              <marquee
                behavior="scroll"
                direction="left"
                scrollamount="15"
                loop="infinite"
              >
                <div className=" col-md-12 d-flex justify-content-center gap-5">
                  {data.smallcontent.map((title, index) => {
                    return (
                      <div
                        key={index}
                        className="sliderImg col-md-3 d-flex justify-content-center align-items-center gap-5"
                      >
                        <img src={data.innerSrc} alt="Star" />
                        <small>{title}</small>
                      </div>
                    );
                  })}
                </div>
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
