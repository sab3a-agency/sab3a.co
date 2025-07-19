"use client";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const faqData = {
  head: {
    title: "أسئلة متكررة حول ",
    highlight: "وكالة سبعة",
    description:
      "كوكالة رائدة في الحلول الرقمية، نقدم إجابات شاملة لأسئلتك لمساعدتك على فهم كيفية تحويل أفكارك إلى نجاح رقمي.",
    links: [
      { text: "اتصل بنا", href: "#" },
      { text: "أسئلة أخرى", isButton: true, icon: faArrowLeft },
    ],
  },
  questions: [
    {
      id: "flush-collapseOne",
      question: "لماذا تعتبر الحلول التقنية مهمة لأعمالي؟",
      answer:
        "الحلول التقنية تساعد في تحسين كفاءة الأعمال، وتقليل التكاليف، وزيادة الإنتاجية...",
    },
    {
      id: "flush-collapseTwo",
      question: "كيف يمكن لسبعة مساعدتي في تطوير تطبيقات الويب والجوال؟",
      answer:
        "نحن نقدم حلولًا متكاملة تشمل تطوير التطبيقات، تحسين تجربة المستخدم، والتكامل مع الأنظمة الأخرى.",
    },
    {
      id: "flush-collapseThree",
      question: "كم من الوقت يستغرق رؤية نتائج الحلول التقنية؟",
      answer:
        "يعتمد الوقت على نوع الحلول التقنية التي تحتاجها، لكن غالبًا ما تبدأ النتائج في الظهور خلال بضعة أسابيع إلى أشهر.",
    },
    {
      id: "flush-collapseFour",
      question: "كيف تقيس سبعة نجاح الحلول التقنية التي تقدمها؟",
      answer:
        "نعتمد على معايير مثل تحسين الكفاءة، زيادة الإيرادات، تحسين تجربة العملاء، وتقليل الأخطاء التشغيلية.",
    },
    {
      id: "flush-collapseFive",
      question: "كيف يمكن لسبعة مساعدة الشركات الناشئة؟",
      answer:
        "نحن نقدم حلولًا مرنة تتناسب مع احتياجات الشركات الناشئة، بما في ذلك التطوير السريع والدعم الفني المستمر.",
    },
    {
      id: "flush-collapseSix",
      question: "ما الذي يميز سبعة في سوق الخليج؟",
      answer:
        "نحن نتميز بفهم عميق للسوق الخليجي، ونعمل على تقديم حلول تقنية متوافقة مع متطلبات العملاء في المنطقة.",
    },
  ],
};

export default function Questiones() {
  return (
    <>
      <hr />
      <section className="questiones mt-5 p-5" data-aos="zoom-in">
        <div className="container">
          <div className="wrapper">
            <div className="head">
              <h3>
                {faqData.head.title} <span>{faqData.head.highlight}</span>
              </h3>
              <p>{faqData.head.description}</p>
              <div className="linkes d-flex gap-3 justify-content-center align-items-center">
                {faqData.head.links.map((link, index) =>
                  link.isButton ? (
                    <button
                      key={index}
                      type="button"
                      className="btn btn-success d-flex justify-content-center align-items-center"
                    >
                      {link.text} <FontAwesomeIcon icon={link.icon} />
                    </button>
                  ) : (
                    <a key={index} href={link.href}>
                      {link.text}
                    </a>
                  )
                )}
              </div>
            </div>
            <div className="Qu mt-5 w-100">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                {faqData.questions.map((item) => (
                  <div className="accordion-item" key={item.id}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${item.id}`}
                        aria-expanded="false"
                        aria-controls={item.id}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={item.id}
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
