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
      if (!id) {
        // لو الـ id مش موجود نوقف اللودينج ونحط قيم ديفولت
        setProjectData({
          title: "عنوان افتراضي",
          sub_title: "وصف مختصر",
          created_at: new Date().toISOString(),
          category: "عام",
        });
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/projects/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch project details.");
        }
        const data = await response.json();
        setProjectData(data.data);
      } catch (err) {
        setError(err.message);
        // fallback: بيانات افتراضية لو حصل error
        setProjectData({
          title: "عنوان افتراضي",
          sub_title: "وصف مختصر",
          created_at: new Date().toISOString(),
          category: "عام",
        });
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
    // بدل ما يرجع error فقط، نعرضه ونكمل بالديفولت
    console.warn("Error fetching project:", error);
  }

  if (!projectData) {
    return null; // fallback لو حتى الديفولت مش موجود
  }

  // نستخدم البيانات أو الديفولت
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
                  <img
                    src="/img/ProjectsDetails/Icon.svg"
                    alt="arrow"
                    onError={(e) => {
                      e.currentTarget.src = "../img/LoagingState.png";
                      e.currentTarget.style.objectFit = "contain";
                    }}
                  />
                </a>
                <h1 className="d-flex flex-column align-items-start text-end">
                  {projectData.title || "عنوان افتراضي"}
                  <br />
                  {projectData.sub_title || "وصف مختصر"}
                </h1>
              </div>
              <div className="leftSide d-flex align-items-center gap-4">
                <span>
                  {projectData.created_at
                    ? projectData.created_at.split("T")[0]
                    : "2025-01-01"}
                </span>
                <span className="dot">.</span>
                <small>{projectData.category || "عام"}</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
