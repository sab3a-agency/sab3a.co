"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";

export default function ArticalGrid({ data }) {
  const articles = useMemo(() => data, [data]);

  return (
    <div className="ArticalGrid container mt-5">
      <div className="row">
        {articles.map((item, index) => (
          <div key={index} className="col-12 col-md-6 mb-5" data-aos="fade-up">
            <div className="box w-100">
              <Link href={`/BlogPage/${item.id}`}>
                <Image
                  src={item.src}
                  alt={item.title || "img"}
                  className="box-img-top"
                  width={1000}
                  height={1000}
                  loading="eager"
                />
              </Link>

              <div className="boxbody mt-3 d-flex flex-column align-items-start">
                <small className="d-flex gap-3 justify-content-center align-items-center">
                  <span>{item.span}</span>
                  <div></div>
                  <small>{item.small}</small>
                </small>

                <span>{item.date}</span>
                <h5 className="boxTitle my-4">{item.title}</h5>

                <Link href={`/BlogPage/${item.id}`} className="btn btn-success">
                  {item.btn}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
