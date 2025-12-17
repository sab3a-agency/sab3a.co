"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import FirstSection from "@/app/componentes/ProjectsDetailsComp/FirstSection";
import Hero from "@/app/componentes/ProjectsDetailsComp/hero";
import ImgesSection from "@/app/componentes/ProjectsDetailsComp/ImgesSection";
import SecondSeation from "@/app/componentes/ProjectsDetailsComp/SecondSections";
import SimilarWorks from "@/app/componentes/ProjectsDetailsComp/Similar works";
import Erorr from "@/app/componentes/Erorr";
import ErrorRequest from "@/app/componentes/ErrorRequest";

export default function ProjectsDitales() {
  const param = useParams();
  const id = param.ProjectsDetails;
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
      <Erorr />
    )
  }

  if (error) {
    return <ErrorRequest />;
  }

  if (!projectData) {
    return <ErrorRequest />;
  }

  const heroData = [
    {
      title: projectData.title || "عنوان المشروع غير متوفر",
      titleEtc: projectData.sub_title || "وصف مختصر للمشروع",
      span:
        projectData.implemented_date
          ? new Date(projectData.implemented_date).toLocaleDateString("ar-EG", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
          : new Date(projectData.created_at).toLocaleDateString("ar-EG", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }) || "تاريخ غير متوفر",
      small: projectData.category || projectData.type || "تصنيف غير محدد",
    },
  ];

  return (
    <>
      <Hero data={heroData} />
      <FirstSection projectsData={projectData} />
      <SecondSeation projectData={projectData} />
      <ImgesSection images={projectData.images} />
      <SimilarWorks />
    </>
  );
}
