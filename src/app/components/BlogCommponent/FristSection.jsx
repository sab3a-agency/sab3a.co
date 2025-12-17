"use client";

import React from "react";

export default function FirstSection({ projectsData }) {
  return (
    <>
      <section className="FirstSection mt-50">
        {projectsData.map((project, index) => (
          <div key={project.id || index}>
            <div className="container">
              <p className="mb-5 mx-2 mx-md-0">{project.intro}</p>
            </div>

            <div className="imgWrapper">
              {project.images && project.images.length > 0 ? (
                project.images.map((imgSrc, imgIndex) => (
                  <img
                    key={`${project.id || index}-img-${imgIndex}`}
                    src={imgSrc.replace("\\", "/")}
                    alt={`img-${imgIndex}`}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "../img/LoagingState.png";
                      e.currentTarget.style.objectFit = "contain";
                    }}
                  />
                ))
              ) : (
                <img
                  src={project.src}
                  alt="img-Blog"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "../img/LoagingState.png";
                    e.currentTarget.style.objectFit = "contain";
                  }}
                />
              )}
            </div>

            <div className="infoWrapper d-flex flex-column justify-content-center align-items-center ">
              <p className="mt-5 mx-2 mx-md-0 text-center ">
                {project.FisrtDiscription}
              </p>
              <p className="mt-2 mx-2 mx-md-0 text-center ">
                {project.SecondDescription}
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
