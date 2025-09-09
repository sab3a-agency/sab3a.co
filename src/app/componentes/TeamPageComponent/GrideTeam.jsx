"use client";
import {
  faInstagram,
  faLinkedin,
  faSquareFacebook,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const DataDefult = [
  {
    src: "/img/TeamPage/ibrahim.png",
    name: " إبراهيم رامز مشتهى ",
    small: [
      " الرئيس التنفيذي ",
      " المؤسس ",
      "  خبير في تصميم تجارب المستخدم وحلول الأعمال التقنية. ",
    ],

    socialLinks: [
      { icon: faSquareFacebook, link: "#" },
      { icon: faLinkedin, link: "#" },
    ],
  },
  {
    src: "/img/TeamPage/Nour.png",
    name: " نور ياسر النحال ",
    small: [
      " الرئيس التقني ",
      "  المؤسس المشارك  ",
      "  خبير في تطوير الأنظمة الخلفية وتحليل البيانات. ",
    ],
    socialLinks: [
      { icon: faSquareFacebook, link: "#" },
      { icon: faLinkedin, link: "#" },
    ],
  },
];

const RestOfTheTeamDefualt = [
  {
    src: "/img/TeamPage/omar.png",
    name: " عمر أبو مطر ",
    jobTitle: " مطور تطبيقات أيفون ",
  },
  {
    src: "/img/TeamPage/Mohamed.png",
    name: "محمد المدهون ",
    jobTitle: " مطور تطبيقات أندرويد   ",
  },
  {
    src: "/img/TeamPage/om_Matar.png",
    name: "عمر مطر ",
    jobTitle: "   مطور مواقع إلكترونية  ",
  },
  {
    src: "/img/TeamPage/Feras.png",
    name: "فراس أبو القمبز ",
    jobTitle: "   مطور الواجهة الخلفية   ",
  },
];
export default function GrideTeam() {
  const [Data, setData] = useState(DataDefult);
  const [RestOfTheTeam, setRestOfTheTeam] = useState(RestOfTheTeamDefualt);
  return (
    <div className="Gred mt-50 container" data-aos="fade-up">
      <div className="row">
        {Data.map((item, index) => (
          <div key={item.name || index} className="col-12 col-md-6">
            <div className="wrapperImge mt-3">
              <img src={item.src} alt={item.name} loading="eager" />
            </div>
            <div className="information d-flex flex-column justify-content-center align-items-start">
              <div className="container">
                <h5 className="my-4 d-flex">{item.name}</h5>

                <div className="icones d-flex gap-3 justify-content-between">
                  {item.small?.length > 0 && (
                    <p>
                      {item.small.map((smallItem, index) => (
                        <small key={index}>{smallItem}</small>
                      ))}
                    </p>
                  )}

                  {item.socialLinks?.length > 0 && (
                    <div className="wrapperLink d-flex gap-3 ">
                      {item.socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-flex justify-content-between align-items-center "
                        >
                          <div className="icon">
                            <FontAwesomeIcon icon={social.icon} size="2x" />
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="RestOfTheTeam mt-5 ">
        <div className="row">
          {RestOfTheTeam.map((item, index) => (
            <div key={item.name || index} className="col-6 col-md-3">
              <div
                className="box mt-5"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="Wrapp">
                  <img src={item.src} alt={item.name} loading="lazy" />
                </div>
                <div className="about d-flex flex-column align-items-start ">
                  <h5 className="mt-3">{item.name}</h5>
                  <span>{item.jobTitle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
