"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SkeletonBox from "../SkeletonBox";
import ErrorRequest from "../ErrorRequest";

export default function OurProgectes({ Data }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (Data && Array.isArray(Data) && Data.length === 2) {
      setProjects(Data);
      setLoading(false);
      return;
    }

    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();

        setProjects(data.data.items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, [Data]);

  if (loading) {
    return (
      <div
        className="projectsWrapper mt-5"
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
    <div
      className="projectsWrapper mt-5"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="row justify-content-between flex-wrap-wrap">
        {projects.map((project) => (
          <div key={project.id} className="box col-12 col-md-6">
            <Link
              href={`/services/${project.id}`}
              className="imgWrapper"
              style={{ cursor: "pointer" }}
            >
              <img
                src={project.cover_image?.replace(/\\/g, "/")}
                alt={project.title}
                loading="eager"
                onError={(e) => {
                  e.currentTarget.src = "../img/LoagingState.png";
                  e.currentTarget.style.objectFit = "contain";
                }}
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
