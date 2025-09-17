"use client";

import { useEffect, useState } from "react";
import OurProgectes from "../ServeceComponent/OurProgectes";
import SkeletonBox from "../SkeletonBox";

const getTwoRandomItems = (arr) => {
  if (arr.length <= 2) return arr;

  const firstIndex = Math.floor(Math.random() * arr.length);
  let secondIndex;
  do {
    secondIndex = Math.floor(Math.random() * arr.length);
  } while (secondIndex === firstIndex);

  return [arr[firstIndex], arr[secondIndex]];
};

export default function SimilarWorks() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();

        const twoRandom = getTwoRandomItems(data.data.items);
        setProjects(twoRandom);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

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

  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <section className="SimilarWorks mt-80">
      <div className="container">
        <div className="Hero">
          <div className="headWrapper d-flex align-items-center justify-content-between">
            <div className="leftSide d-flex flex-column gap-4">
              <small className="d-flex align-items-center gap-3">
                <span className="dot">.</span>
                أعمال مشابهة
              </small>
              <p>خارج كل علامة تجارية، هناك حل يحدث فرقًا.</p>
            </div>
          </div>
        </div>

        {projects.length > 0 && <OurProgectes Data={projects} />}
      </div>
    </section>
  );
}
