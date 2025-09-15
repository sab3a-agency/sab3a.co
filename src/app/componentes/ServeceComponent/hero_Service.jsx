import Link from "next/link";
import OurProgectes from "./OurProgectes";

const Data = {
  title: "   دعنا",
  span: " نتعاون معك ",
  titleEnd: "لرفع مستوى علامتك التجارية وتحقيق أهدافك.",
  btnContent: " تواصل معنا ",
};

export default function Hero_Service() {
  return (
    <>
      <section className="Hero_Service mt-80">
        <div className="container">
          <div className="Hero">
            <div
              className="container head d-flex align-items-start justify-content-between flex-column"
              data-aos="fade-left"
            >
              <h1>
                {Data.title}
                <span>{Data.span}</span>
                {Data.titleEnd}
              </h1>
              <Link
                href="/ConcatUS"
                className="d-flex align-items-center gap-4 text-decoration-none  justify-content-center"
                data-aos="fade-up-right"
              >
                <img
                  id="arrow"
                  src="../img/ServicePage/arrow.svg"
                  alt="arrow"
                />
                <h4>{Data.btnContent}</h4>
              </Link>
            </div>

            <OurProgectes />
          </div>
        </div>
      </section>
    </>
  );
}
