import Link from "next/link"
import GrideTeam from "./GrideTeam"

const Data = {
  title: "   فريقنا: ",
  span: " شريكك   ",
  titleEnd: " المثالي لتحقيق التميز ",
  otherSpan: "  الرقمي!   ",
  btnContent: " تواصل معنا "
}

export default function HeroTeamSection() {
  return (
    <section className="Hero mt-50">
      <div className="container">
        <div
          className="head d-flex align-items-start justify-content-between flex-column gap-5"
          data-aos="fade-left"
        >
          <h1 className="d-flex flex-column align-items-start">
            <small>
              {Data.title}
              <span>{Data.span}</span>
            </small>
            <small>
              {Data.titleEnd}
              <span>{Data.otherSpan}</span>
            </small>
          </h1>
          <Link
            href="/ConcatUS"
            className="d-flex align-items-center gap-4 text-decoration-none  justify-content-center"
            data-aos="fade-up-right"
          >
            <img id="arrow" src="../img/ServicePage/arrow.svg" alt="arrow" />
            <h4>{Data.btnContent}</h4>
          </Link>
        </div>
        <GrideTeam />
      </div>
    </section>
  )
}
