import Link from "next/link";

let Data = [
  {
    ouetricon: "/img/Packages/Shape.svg",
    h4: ' باقة الإطلاق الأولي "MVP" ',
    h2: " 15,000 ريال سعودي ",
    p: " نقدم لك حلولًا سريعة وفعّالة لتنفيذ منتجك الأولي (MVP) بأسعار تنافسية وجودة عالية. ابدأ الآن واختبر فكرتك في السوق بأقل وقت وتكلفة! ",
    Innericon: "/img/ProjectsDetails/elements.svg",
    subTitle: [
      " تحليل متطلبات المشروع وتخطيط أولي. ",
      " تصميم واجهات مستخدم (UI/UX) لأهم ٨-١٢ شاشة. ",
      " تطوير واجهة المستخدم والخلفية لتطبيق MVP. ",
      " تكامل مع واجهات برمجية (APIs). ",
      " اختبار الجودة وإصلاح الأخطاء قبل الإطلاق. ",
      "نشر التطبيق/الموقع في بيئة تجريبية.",
      "نشر التطبيق/الموقع في بيئة تجريبية.",
    ],
    btnContent: "ابداء الان",
  },
  {
    ouetricon: "/img/Packages/twiceShape.svg",
    h4: "باقة المشاريع الكبيرة أو فرص التعاون ",
    h2: " السعر حسب التفاصيل",
    p: "سواء كنت تبحث عن تطوير مشروع ضخم أو تعاون طويل الأمد، نحن هنا لتحقيق أهدافك. تواصل معنا اليوم لمناقشة تفاصيل مشروعك!",
    Innericon: "/img/Packages/InnerIcon.svg",
    subTitle: [
      " دراسة جدوى فنية وتخطيط معمق للمشروع. ",
      " تصميم واجهات مستخدم مخصصة لجميع الشاشات. ",
      " تطوير كامل للتطبيق (واجهة المستخدم، الخلفية، وقاعدة البيانات). ",
      " تكامل مع أدوات وواجهات برمجية متقدمة. ",
      " اختبار شامل (وظيفي، أداء، وأمان). ",
      " نشر التطبيق في بيئة إنتاجية.  ",
      " دعم فني وصيانة لمدة 3-6 أشهر بعد الإطلاق. ",
      " تحديثات وتحسينات دورية حسب الطلب. ",
    ],
    btnContent: " تواصل معنا ",
  },
];
export function BoxPackage() {
  return (
    <section className="boxPackages mt-5 ">
      <div className="container">
        <div className="WrapperBoxOuter d-flex-column  d-md-flex d-xl-flex justify-content-center align-items-center gap-5">
          {Data.map((outeritem, index) => {
            return (
              <div
                key={index}
                className={`boxWrapper ${index === 1 ? "Active " : ""} `}
                // data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos="zoom-in"
              >
                <div className="container">
                  <small>
                    <img
                      src={outeritem.ouetricon}
                      alt="Icon"
                      onError={(e) => {
                        e.currentTarget.src = "../img/LoagingState.png";
                        e.currentTarget.style.objectFit = "contain";
                      }}
                    />
                  </small>
                  <h4 className="mt-4">{outeritem.h4}</h4>
                  <h2>{outeritem.h2}</h2>
                  <p className="mb-5">{outeritem.p} </p>
                  <div className="box-innerfeatures">
                    {outeritem.subTitle.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="innerfeatures d-flex justify-content-center align-items-center gap-3 my-3"
                        >
                          <img
                            src={outeritem.Innericon}
                            alt="check"
                            onError={(e) => {
                              e.currentTarget.src = "../img/LoagingState.png";
                              e.currentTarget.style.objectFit = "contain";
                            }}
                          />
                          <p key={index} className="inner_P_Tag mb-0">
                            {item}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="Wrapper ">
                  <Link
                    href="/ConcatUS"
                    className="d-flex justify-content-center"
                  >
                    <button>{outeritem.btnContent}</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
