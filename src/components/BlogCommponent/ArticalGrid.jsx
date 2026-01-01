"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import SkeletonBox from "../SkeletonBox";
import ErrorRequest from "../ErrorRequest";

const getTwoRandomItems = (arr) => {
  if (!arr || arr.length <= 2) return arr;
  const firstIndex = Math.floor(Math.random() * arr.length);
  let secondIndex;
  do {
    secondIndex = Math.floor(Math.random() * arr.length);
  } while (secondIndex === firstIndex);
  return [arr[firstIndex], arr[secondIndex]];
};

export default function ArticalGrid({ data }) {
  const [Bloges, setBloges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (data && Array.isArray(data) && data.length === 2) {
      setBloges(data);
      setLoading(false);
      return;
    }

    async function fetchBlogs() {
      try {
        const res = await fetch("/api/projects/blogs");
        if (!res.ok) throw new Error("Network response was not ok");
        const apiData = await res.json();

        const mapped = apiData.data.items.map((item) => ({
          id: item.id,
          cover_image: item.cover_image.replace("\\", "/"),
          title: item.title,
          type: item.type,
          span: new Date(item.created_at).toLocaleDateString("ar-EG", {
            day: "numeric",
            month: "long",
          }),
          small: item.type,
          date: new Date(item.created_at).toLocaleDateString("ar-EG"),
        }));

        setBloges(getTwoRandomItems(mapped));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, [data]);

  if (loading) {
    return (
      <div
        className="projectsWrapper mt-5 aos-init"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="row justify-content-between flex-wrap-wrap">
          {[...Array(2)].map((_, i) => (
            <SkeletonBox key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (error) return <ErrorRequest />;

  return (
    <div className="ArticalGrid container mt-5">
      <div className="row">
        {Bloges.map((item) => (
          <div
            key={item.id}
            className="col-12 col-md-6 mb-5 aos-init"
            data-aos="fade-up"
          >
            <div className="box w-100">
              <Link href={`/blog/${item.id}`}>
                <Image
                  src={item.cover_image}
                  alt={item.title || "img"}
                  className="box-img-top"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "../img/LoagingState.png";
                    e.currentTarget.style.objectFit = "contain";
                  }}
                />
              </Link>
              <div className="boxbody mt-3 d-flex flex-column align-items-start">
                <small className="d-flex gap-3 justify-content-center align-items-center">
                  <span>{item.span}</span>
                  <div></div>
                  <small>{item.small}</small>
                </small>
                <h5 className="boxTitle my-4">{item.title}</h5>
                <Link href={`/blog/${item.id}`} className="btn btn-success">
                  {item.title}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
