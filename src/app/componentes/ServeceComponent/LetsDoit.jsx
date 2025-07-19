"use client";

import Link from "next/link";

export default function LetsDoit({ data }) {
  return (
    <section className="letsDoit mt-80">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="wrapper">
              <a href="#">{data.btnContent}</a>
              <p className="mt-5">
                {data.discription}
                <small>{data.smallDescription}</small>
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-start align-items-end">
            <Link
              href="/ConcatUS"
              className="d-flex align-items-center gap-4 text-decoration-none  justify-content-center"
            >
              <img id="arrow" src="../img/ServicePage/arrow.svg" alt="arrow" />
              <h4>{data.letsDoit}</h4>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
