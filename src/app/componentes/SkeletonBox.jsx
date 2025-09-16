import React from "react";

export default function SkeletonBox() {
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
