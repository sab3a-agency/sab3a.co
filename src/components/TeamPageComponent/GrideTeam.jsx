"use client"
import {
  faLinkedin,
  faSquareFacebook
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"

export default function GrideTeam() {
  const [teamData, setTeamData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchTeam() {
      try {
        const res = await fetch("/api/projects/teams", { cache: "no-store" })
        const json = await res.json()
        if (json.code === 200) {
          setTeamData(json.data.items) // نأخذ items من data
        }
      } catch (error) {
        console.error("Failed to fetch team:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchTeam()
  }, [])

  const Data = teamData.slice(0, 2)
  const RestOfTheTeam = teamData.slice(2)

  // Fallback function for image
  const getImage = (src) =>
    src && src.trim() !== "" ? src : "../img/LoagingState.png"

  // onError fallback handler
  const handleImageError = (e) => {
    e.target.src = "../img/LoagingState.png"
    e.currentTarget.style.objectFit = "contain"
  }

  // Skeleton Loader
  const SkeletonCard = ({ type }) => (
    <div className={type === "main" ? "col-12 col-md-6" : "col-6 col-md-3"}>
      <img
        loading="lazy"
        src={getImage("../img/LoagingState.png")}
        alt="Loading"
        onError={handleImageError}
        style={{
          height: type === "main" ? "auto" : "auto"
        }}
      />
      <div className="information d-flex flex-column justify-content-center align-items-start mt-2">
        <div className="container">
          <h5
            className="my-4"
            style={{ backgroundColor: "#e0e0e0", width: "60%", height: "20px" }}
          ></h5>
          <p>
            <small
              style={{
                display: "block",
                backgroundColor: "#e0e0e0",
                width: "80%",
                height: "14px",
                marginBottom: "4px"
              }}
            ></small>
            <small
              style={{
                display: "block",
                backgroundColor: "#e0e0e0",
                width: "50%",
                height: "14px"
              }}
            ></small>
          </p>
          <div className="wrapperLink d-flex gap-3">
            <div
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#e0e0e0",
                borderRadius: "50%"
              }}
            ></div>
            <div
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#e0e0e0",
                borderRadius: "50%"
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="Gred mt-50 container aos-init" data-aos="fade-up">
      <div className="row">
        {loading
          ? [0, 1].map((_, idx) => <SkeletonCard key={idx} type="main" />)
          : Data.map((item) => (
              <div key={item.id} className="col-12 col-md-6">
                <div className="wrapperImge mt-3">
                  <img
                    loading="lazy"
                    src={getImage(item.image)}
                    alt={item.name}
                    className="object-fit-cover w-100"
                    onError={handleImageError}
                  />
                </div>
                <div className="information d-flex flex-column justify-content-center align-items-start">
                  <div className="container">
                    <h5 className="my-4 d-flex">{item.name}</h5>
                    <div className="icones d-flex gap-3 justify-content-between">
                      {item.position && (
                        <p>
                          {item.position.split("|").map((smallItem, idx) => (
                            <small key={idx}>{smallItem.trim()}</small>
                          ))}
                        </p>
                      )}
                      {item.links && (
                        <div className="wrapperLink d-flex gap-3">
                          {Object.entries(item.links).map(
                            ([icon, link], idx) => (
                              <a
                                key={idx}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="d-flex justify-content-between align-items-center"
                              >
                                <div className="icon">
                                  {icon.includes("linkedin") && (
                                    <FontAwesomeIcon
                                      icon={faLinkedin}
                                      size="2x"
                                    />
                                  )}
                                  {icon.includes("facebook") && (
                                    <FontAwesomeIcon
                                      icon={faSquareFacebook}
                                      size="2x"
                                    />
                                  )}
                                </div>
                              </a>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>

      <div className="RestOfTheTeam mt-5">
        <div className="row">
          {loading
            ? [0, 1, 2, 3].map((_, idx) => (
                <SkeletonCard key={idx} type="rest" />
              ))
            : RestOfTheTeam.map((item) => (
                <div key={item.id} className="col-6 col-md-3">
                  <div className="box mt-5 aos-init" data-aos="zoom-in">
                    <div className="Wrapp">
                      <img
                        loading="lazy"
                        src={getImage(item.image)}
                        alt={item.name}
                        onError={handleImageError}
                      />
                    </div>
                    <div className="about d-flex flex-column align-items-start">
                      <h5 className="mt-3">{item.name}</h5>
                      <span>{item.position}</span>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  )
}
