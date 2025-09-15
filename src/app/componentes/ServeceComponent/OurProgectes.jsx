"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Skeleton Component
function SkeletonBox() {
  return (
    <div className="box col-12 col-md-6 animate-pulse mb-4">
      <div
        className="imgWrapper bg-gray-300 rounded-lg w-100"
        style={{ height: "250px" }}
      ></div>
      <div className="info mt-3">
        <div className="h-6 bg-gray-300 rounded w-50 mb-3"></div>
        <div className="h-4 bg-gray-300 rounded w-75 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-60"></div>
      </div>
      <div className="anchors d-flex gap-2 mt-3">
        <div className="h-4 bg-gray-300 rounded w-25"></div>
        <div className="h-4 bg-gray-300 rounded w-25"></div>
      </div>
    </div>
  );
}

export default function OurProgectes({ Data }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (Data && Array.isArray(Data) && Data.length > 0) {
      setProjects(Data.slice(0, 2));
      setLoading(false);
      return;
    }

    fetch("/api/projects")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setProjects(data.data.items);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [Data]);

  if (loading) {
    const skeletonCount = Data && Data.length > 0 ? 2 : 6;
    return (
      <div
        className="projectsWrapper mt-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="row justify-content-between flex-wrap-wrap">
          {[...Array(skeletonCount)].map((_, i) => (
            <SkeletonBox key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div
      className="projectsWrapper mt-5"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="row justify-content-between flex-wrap-wrap">
        {projects.length > 0 &&
          projects.map((project) => (
            <div key={project.id} className="box col-12 col-md-6">
              <Link
                href={`/servicesPage/${project.id}`}
                className="imgWrapper"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={project.cover_image?.replace(/\\/g, "/")}
                  alt={project.title}
                  loading="eager"
                />
              </Link>
              <div className="info mt-2 p-3">
                <h2 className="mb-4">{project.title}</h2>
                <p className="my-3">{project.sub_title}</p>
              </div>
              <div className="anchors d-flex gap-3 container">
                <a href="#">{project.category}</a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
