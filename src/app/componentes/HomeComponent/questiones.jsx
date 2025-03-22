"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Questiones({ faqData }) {
  return (
    <>
      <hr />
      <section className="questiones mt-5 p-5" data-aos="zoom-in-up">
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
