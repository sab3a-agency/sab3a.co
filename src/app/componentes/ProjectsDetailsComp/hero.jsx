"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  const params = useParams();
  const id = params.ProjectsDetails;

  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProject() {
      if (!id) return;

      try {
        const response = await fetch(`/api/projects/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch project details.");
        }
        const data = await response.json();
        setProjectData(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <section className="Hero mt-50">
        <div className="container">
          <div className="Hero">
            <div className="headWrapper d-flex flex-column align-items-start justify-content-between">
              <div className="rigthside d-flex align-items-center gap-4">
                <div
                  className="arrow skeleton-loader circle"
                  style={{ width: 48, height: 48 }}
                ></div>
                <h1 className="d-flex flex-column align-items-start text-end">
                  <div
                    className="skeleton-loader text"
                    style={{ width: 200, height: 24 }}
                  ></div>
                  <div
                    className="skeleton-loader text"
                    style={{ width: 150, height: 20, marginTop: 8 }}
                  ></div>
                </h1>
              </div>
              <div className="leftSide d-flex align-items-center gap-4">
                <div
                  className="skeleton-loader text"
                  style={{ width: 80, height: 16 }}
                ></div>
                <span
                  className="dot skeleton-loader circle"
                  style={{ width: 8, height: 8 }}
                ></span>
                <div
                  className="skeleton-loader text"
                  style={{ width: 60, height: 16 }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!projectData) {
    return null; // Or a placeholder if needed
  }

  // Use the fetched data to populate the component
  return (
    <>
      <section className="Hero mt-50">
        <div className="container">
          <div className="Hero">
            <div className="headWrapper d-flex flex-column align-items-start justify-content-between">
              <div className="rigthside d-flex align-items-center gap-4">
                <a
                  onClick={() => router.back()}
                  className="arrow"
                  style={{ cursor: "pointer" }}
                >
                  <img src="/img/ProjectsDetails/Icon.svg" alt="arrow" />
                </a>
                <h1 className="d-flex flex-column align-items-start text-end">
                  {projectData.title}
                  {projectData.sub_title}
                </h1>
              </div>
              <div className="leftSide d-flex align-items-center gap-4">
                {/* The API data doesn't contain 'span' or 'small', so you need to decide what to show here.
                    Using category and created_at as an example. */}
                <span>{projectData.created_at.split("T")[0]}</span>
                <span className="dot">.</span>
                <small>{projectData.category}</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
