"use client";

import Link from "next/link";

export default function LetsDoit({ data }) {
  return (
    <section className="letsDoit">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6" data-aos="fade-up">
            <div className="wrapper">
              <a href="#">{data.btnContent}</a>
              <p className="mt-5">
                {data.discription}
                <small>{data.smallDescription}</small>
              </p>
            </div>
          </div>
          <div
            className="col-12 col-md-6 d-flex justify-content-start align-items-end"
            data-aos="fade-up"
          >
            <Link
              href="/contact-us"
              className="d-flex align-items-center gap-4 text-decoration-none  justify-content-center"
            >
              <img loading="lazy"
                id="arrow"
                src="../img/ServicePage/arrow.svg"
                alt="arrow"
                onError={(e) => {
                  e.currentTarget.src = "../img/LoagingState.png";
                  e.currentTarget.style.objectFit = "contain";
                }}
              />
              <h4>{data.letsDoit}</h4>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
