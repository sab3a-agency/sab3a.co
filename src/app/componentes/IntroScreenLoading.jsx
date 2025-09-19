"use client";
import Lottie from "lottie-react";
import React, { useEffect } from "react";
import loadingAnim from "../LoadingStripLoop.json";

export default function IntroScreenLoading() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="introScreen">
      <img className="backg" src="../img/HomeLoading.png" alt="Intro" />
      <div className="introWrap">
        <img
          src="../img/LoagingState.png"
          className="intrologo d-flex justify-content-center align-items-center position-absolute "
          alt="Sabaa Logo"
        />
        <Lottie
          className="LoadinAnim position-absolute"
          animationData={loadingAnim}
          loop={true}
        />
      </div>
    </div>
  );
}
