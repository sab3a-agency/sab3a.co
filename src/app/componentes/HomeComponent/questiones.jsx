"use client";
import { useEffect, useState } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Questiones() {
  const [faqData, setFaqData] = useState({
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
    questions: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch("/api/projects/faqs");
        if (!res.ok) throw new Error("Failed to fetch FAQs");

        const result = await res.json();
        console.log("Fetched FAQs:", result);

        const questions = result.data.items
          .sort((a, b) => a.order - b.order)
          .map((item) => ({
            id: `faq-${item.id}`,
            question: item.question,
            answer: item.answer,
          }));

        setFaqData((prev) => ({ ...prev, questions }));
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  if (loading)
    return (
      <>
        <hr />
        <section className="questiones mt-5 p-5" data-aos="zoom-in">
          <div className="container">
            <div className="wrapper">
              <div className="head text-center">
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
                {loading ? (
                  // Skeleton Loader
                  <div className="space-y-3">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="h-12 bg-gray-200 rounded animate-pulse"
                      ></div>
                    ))}
                  </div>
                ) : (
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
                )}
              </div>
            </div>
          </div>
        </section>
      </>
    );

  return (
    <>
      <hr />
      <section className="questiones mt-5 p-5" data-aos="zoom-in">
        <div className="container">
          <div className="wrapper">
            <div className="head text-center">
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
