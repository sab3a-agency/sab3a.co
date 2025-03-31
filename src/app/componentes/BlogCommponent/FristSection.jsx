"use client";

import { useParams } from "next/navigation";
import React from "react";
import { data } from "react-router-dom";

export default function FirstSection({ projectsData }) {
  // Think About how to get the data  by id
  // const param = useParams();

  return (
    <>
      <section className="FirstSection mt-50">
        {projectsData.map((project) => {
          return (
            <div key={project.id}>
              <div className="container">
                <p className="mb-5">{project.intro}</p>
              </div>
              <div className="imgWrapper">
                <img src={project.src} alt="img" loading="lazy" />
              </div>
              <div className="infoWrapper d-flex flex-column justify-content-center align-items-center container">
                <p className="m-5">{project.FisrtDiscription}</p>

                <p>{project.SecondDescription}</p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
