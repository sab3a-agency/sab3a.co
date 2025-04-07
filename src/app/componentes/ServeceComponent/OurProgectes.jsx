"use client";

import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import Link from "next/link";
const DefultBoxData = [
  {
    id: 1,
    src: "/img/ServicePage/img1.png",
    title: "تطوير البرمجيات المخصصة",
    discription:
      "هذا النص هو مثال لنص يمكن ان يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
    tags: ["الرعاية الصحية", "العلامة التجارية", " الهوية البصرية", " التغليف"],
  },
  {
    id: 2,
    src: "/img/ServicePage/img2.png",
    title: " اسم المشروع",
    discription: "نقدم تحليلاً دقيقًا لأنظمتك",
    tags: ["الرعاية الصحية", "العلامة التجارية", " الهوية البصرية", " التغليف"],
  },
  {
    id: 3,
    src: "/img/ServicePage/img3.png",
    title: " اسم المشروع",
    discription: "نقدم تحليلاً دقيقًا لأنظمتك",
    tags: ["الرعاية الصحية", "العلامة التجارية", " الهوية البصرية", " التغليف"],
  },
  {
    id: 4,
    src: "/img/ServicePage/img4.png",
    title: " اسم المشروع",
    discription: "نقدم تحليلاً دقيقًا لأنظمتك",
    tags: ["الرعاية الصحية", "العلامة التجارية", " الهوية البصرية", " التغليف"],
  },
  {
    id: 5,
    src: "/img/ServicePage/img5.png",
    title: " اسم المشروع",
    discription: "نقدم تحليلاً دقيقًا لأنظمتك",
    tags: ["الرعاية الصحية", "العلامة التجارية", " الهوية البصرية", " التغليف"],
  },
  {
    id: 6,
    src: "/img/ServicePage/img6.png",
    title: " اسم المشروع",
    discription: "نقدم تحليلاً دقيقًا لأنظمتك",
    tags: ["الرعاية الصحية", "العلامة التجارية", " الهوية البصرية", " التغليف"],
  },
];

export default function OurProgectes({ DefultData }) {
  // const Router = useRouter();

  const [boxData, setBoxData] = useState(DefultBoxData);

  useEffect(() => {
    if (DefultData && Array.isArray(DefultData)) {
      setBoxData(DefultData);
    }
  }, [DefultData]);

  return (
    <div
      className="projectsWrapper mt-80"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="row justify-content-between flex-wrap-wrap">
        {boxData.map((features, index) => (
          <div key={index} className="box col-12 col-md-6 ">
            <Link
              href={`/servicesPage/${features.id}`}
              //  onClick={() => Router.push(`/servicesPage/${features.id}`)}
              className="imgWrapper"
              style={{ cursor: "pointer" }}
            >
              <img src={features.src} alt="box_img" loading="eager" />
            </Link>

            <div className="info mt-2 p-3">
              <h2 className="mb-4">{features.title}</h2>
              <p className="my-3">{features.discription}</p>
            </div>
            <div className="anchors d-flex gap-3 container">
              {features.tags.map((subtitle, i) => (
                <a href="#" key={i}>
                  {subtitle}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
