"use client";
import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";

export default function ArticalGrid({ data }) {
  return (
    <div className="ArticalGrid row mt-50">
      {data.map((item, index) => {
        return (
          <div key={index} className="col-12 col-md-4 mt-5">
            <div className="box mt-5">
              <Link href={`/BlogPage/${item.id}`}>
                <Image
                  src={item.src}
                  className="box-img-top"
                  alt="img"
                  loading="lazy"
                  width={1000}
                  height={1000}
                />
              </Link>
              <div className="boxbody mt-3 container d-flex flex-column align-items-start">
                <small className="d-flex gap-3 justify-content-center align-items-center">
                  <span>{item.span}</span>
                  <div></div>
                  <small>{item.small}</small>
                </small>
                <span>{item.date}</span>
                <h5 className="boxTitle my-4">{item.title}</h5>
                <Link
                  href={`/BlogPage/${item.id}`}
                  className="btn btn-success "
                >
                  {item.btn}
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
