"use client"
import LetsDoit from "./LetsDoit"
import { PartnersMarquee } from "./marquees"
const LetsDitedata = {
  btnContent: " معاملة خاصة ",
  discription: " ابدأ رحلة لاكتشاف ",
  smallDescription: "عالم من استراتيجيات التصميم المبتكرة.",
  letsDoit: " دعنا نصمم غرضك هنا  "
}

const Data = {
  title: "      شريكك في",
  span: "  النجاح الرقمي ",
  innerTitle: "      في",
  innerSpan: "   سبعة ",
  innerTitleEnd: "، نؤمن بأن التصميم الاستثنائي يتجاوز الجماليات.",
  discriptions: ` إنه يشمل الوظائف والقدرة على تحقيق الغرض المقصود. فريقنا الم
                dedicated هو مدفوع بهدف إنشاء علامات تجارية تُحدث تأثيرًا ذا
                مغزى.`
}
export default function Section2() {
  return (
    <section className="Section2 mt-80 ">
      <div className="container">
        <div className="adv">
          <div className="row align-items-center">
            <div className="info col-12 col-md-6" data-aos="fade-left">
              <h2 className=" d-flex gap-2 justify-content-start">
                {Data.title}
                <span>{Data.span}</span>
              </h2>
            </div>
            <div
              className="info col-12 col-md-6  d-flex flex-column gap-5"
              data-aos="fade-right"
            >
              <p>
                {Data.innerTitle}
                <span>{Data.innerSpan}</span>
                {Data.innerTitleEnd}
              </p>
              <p>{Data.discriptions}</p>
            </div>
          </div>
        </div>
      </div>
      <PartnersMarquee />
      <LetsDoit data={LetsDitedata} />
    </section>
  )
}
