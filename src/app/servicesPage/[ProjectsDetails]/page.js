"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import FirstSection from "@/app/componentes/ProjectsDetailsComp/FirstSection";
import Hero from "@/app/componentes/ProjectsDetailsComp/hero";
import ImgesSection from "@/app/componentes/ProjectsDetailsComp/ImgesSection";
import SecondSeation from "@/app/componentes/ProjectsDetailsComp/SecondSections";
import SimilarWorks from "@/app/componentes/ProjectsDetailsComp/Similar works";
import Erorr from "@/app/componentes/Erorr";

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
    return <div>Some Things go Wrong {error} </div>;
  }

  if (!projectData) {
    return <div>Project not found. 🔍</div>;
  }

  const heroData = [
    {
      title: projectData.title,
      titleEtc: projectData.sub_title,
      span: "20 أكتوبر",
      small: projectData.category,
    },
  ];

  return (
    <>
      <Hero DefultData={heroData} />
      <FirstSection projectsData={projectData} />
      <SecondSeation projectData={projectData} />
      <ImgesSection images={projectData.images} />
      <SimilarWorks />
    </>
  );
}