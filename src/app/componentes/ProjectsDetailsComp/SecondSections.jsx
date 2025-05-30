export default function SecondSeation() {
  let Data = [
    {
      title: "ما قمنا به:",
      discription: `              نؤمن بالتعاون والابتكار وسرد القصص. تركز فلسفتنا على فهم العملاء،
              ودفع الحدود الإبداعية، وتقديم حلول فعالة.`,
      Box: [
        {
          icon: "/img/ProjectsDetails/people.svg",
          title: "تصميم",
          innerIcon: "/img/ProjectsDetails/elements.svg",
          subTitle: [
            "هوية العلامة التجارية",
            "التغليف",
            "الأدوات المكتبية",
            "الهوية الرقمية",
            "إرشادات العلامة التجارية",
            "الزي الرسمي"
          ]
        },
        {
          icon: "/img/ProjectsDetails/lamp-on.svg",
          title: "المحتوى",
          innerIcon: "/img/ProjectsDetails/elements.svg",
          subTitle: [
            "كتابة النصوص",
            "كتابة السيناريو",
            " إدارة التصوير الفوتوغرافي",
            " خطة التسويق"
          ]
        },
        {
          icon: "/img/ProjectsDetails/lamp-on.svg",
          title: "الاستراتيجية",
          innerIcon: "/img/ProjectsDetails/elements.svg",
          subTitle: [
            " تحديد موقع العلامة التجارية",
            "استراتيجية التواصل ",
            " إدارة التصوير الفوتوغرافي",
            " هيكل العلامة التجارية "
          ]
        },
        {
          icon: "/img/ProjectsDetails/story.svg",
          title: "التكنولوجيا",
          innerIcon: "/img/ProjectsDetails/elements.svg",
          subTitle: [
            "دعم التكامل",
            "الموقع الإلكتروني",
            " واجهة المستخدم",
            " تجربة المستخدم",
            " النمذجة "
          ]
        }
      ]
    }
  ]
  return (
    <section className="SecondSeation mt-50">
      <div className="container">
        <div className="hero d-flex flex-column text-justify ">
          {Data.map((feature) => (
            <div key={feature.title} className="title text-justify">
              <h1>{feature.title}</h1>
              <p>{feature.discription}</p>
            </div>
          ))}
        </div>
        <div className="container">
          <div className="wapperBox mt-5">
            <div className="row">
              {Data.map((feature) =>
                feature.Box.map((boxItem) => (
                  <div
                    key={boxItem.title}
                    className="Box col-6 col-sm-6  col-md-3"
                  >
                    <div className="icon">
                      <img src={boxItem.icon} alt="meeting_icon" />
                    </div>
                    <h3 className="my-4">{boxItem.title}</h3>

                    {boxItem.subTitle.map((subtitle) => (
                      <li key={subtitle}>
                        <div className="innerinfo d-flex gap-3 align-items-center">
                          <img
                            src={boxItem.innerIcon}
                            alt="Check_Icone"
                            id="Check_Icone"
                          />
                          <h4>{subtitle}</h4>
                        </div>
                      </li>
                    ))}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
