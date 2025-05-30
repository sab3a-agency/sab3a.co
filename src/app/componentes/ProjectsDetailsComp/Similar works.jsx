import OurProgectes from "../ServeceComponent/OurProgectes"

const DefultData = [
  {
    id: 1,
    src: "../img/ServicePage/img1.png",
    title: "تطوير البرمجيات المخصصة",
    discription:
      "هذا النص هو مثال لنص يمكن ان يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
    tags: ["الرعاية الصحية", "العلامة التجارية", " الهوية البصرية", " التغليف"]
  },
  {
    id: 2,
    src: "../img/ServicePage/img2.png",
    title: " اسم المشروع",
    discription: "نقدم تحليلاً دقيقًا لأنظمتك",
    tags: ["الرعاية الصحية", "العلامة التجارية", " الهوية البصرية", " التغليف"]
  }
]
export default function SimilarWorks() {
  return (
    <section className="SimilarWorks mt-80 ">
      <div className="container">
        <div className="Hero">
          <div className="headWrapper d-flex align-items-center justify-content-between">
            <div className="leftSide d-flex flex-column  gap-4">
              <small className="d-flex align-items-center gap-3">
                <span className="dot">.</span>
                أعمال مشابهة
              </small>
              <p>خارج كل علامة تجارية، هناك حل يحدث فرقًا.</p>
            </div>
          </div>
        </div>
        <OurProgectes DefultData={DefultData} />
      </div>
    </section>
  )
}
