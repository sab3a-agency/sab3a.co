"use client"
import { useEffect, useState } from "react"
import FirstSection from "@/app/componentes/BlogCommponent/FristSection"
import OtherArticals from "@/app/componentes/BlogCommponent/otherArticals"
import Hero from "@/app/componentes/ProjectsDetailsComp/hero"
import { useParams } from "next/navigation"
import "../../css/BolgStyle.css"

export default function ArticalPage() {
  const params = useParams()
  const id = params.ArticalPage

  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchArticle() {
      try {
        const res = await fetch(`/api/projects/blogs/${id}`, {
          cache: "no-store",
        })
        if (!res.ok) throw new Error("فشل في جلب بيانات المقالة")
        const data = await res.json()
        setArticle(data.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    if (id) fetchArticle()
  }, [id])
  const defaultArticle = {
    id: "0",
    title: "جاري التحميل...",
    sub_title: "",
    type: "",
    description: "",
    description_below: "",
    cover_image: "../img/Blog/img1.png",
    images: ["../img/Blog/img1.png"],
    created_at: new Date().toISOString(),
  }

  // لو الـ API رجع بيانات، نستخدمها مباشرة
  const finalArticle = article ?? defaultArticle

  // Hero Data
  const HeroData = [
    {
      title: finalArticle.title,
      titleEtc: finalArticle.sub_title,
      span: new Date(finalArticle.created_at).toLocaleDateString("ar-EG", {
        day: "numeric",
        month: "long",
      }),
      small: finalArticle.type,
    },
  ]

  // First Section Data
  const Firstdata = [
    {
      id: finalArticle.id,
      intro: finalArticle.description,
      FisrtDiscription: finalArticle.description,
      SecondDescription:
        finalArticle.description_below ||
        "لا توجد فقرة ثانية متوفرة.",
      src:
        finalArticle.images?.[0]?.replace(/\\/g, "/") ||
        finalArticle.cover_image?.replace(/\\/g, "/"),
    },
  ]

  if (loading) return (
    <div className="ArticalPage">
      {/* Hero Skeleton */}
      <section className="Hero mt-50">
        <div className="container">
          <div className="Hero">
            <div className="headWrapper d-flex flex-column align-items-start justify-content-between">
              <div className="rigthside d-flex align-items-center gap-4">
                <div className="skeleton skeleton-icon" />
                <h1 className="skeleton skeleton-text w-50" />
              </div>
              <div className="leftSide d-flex align-items-center gap-4">
                <span className="skeleton skeleton-text w-25" />
                <span className="dot">.</span>
                <small className="skeleton skeleton-text w-25" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Section Skeleton */}
      <section className="FirstSection mt-50">
        <div>
          <div className="container">
            <p className="skeleton skeleton-text w-75 mb-5" />
          </div>
          <div className="imgWrapper">
            <div className="skeleton skeleton-img w-100 h-300" />
          </div>
          <div className="infoWrapper d-flex flex-column justify-content-center align-items-center ">
            <p className="skeleton skeleton-text w-75 mt-5" />
            <p className="skeleton skeleton-text w-50 mt-2" />
          </div>
        </div>
      </section>

      {/* Similar Articles Skeleton */}
      <section className="SimilarArticals mt-5">
        <div className="container">
          <div className="Hero">
            <div className="headWrapper d-flex align-items-center justify-content-between">
              <div className="leftSide d-flex flex-column gap-4 justify-content-justify">
                <p className="skeleton skeleton-text w-25" />
                <span className="skeleton skeleton-text w-50" />
              </div>
            </div>
          </div>

          <div className="ArticalGrid container mt-5">
            <div className="row">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="col-12 col-md-6 mb-5 aos-init"
                  data-aos="fade-up"
                >
                  <div className="box w-100">
                    <div className="skeleton skeleton-img w-100 h-200" />
                    <div className="boxbody mt-3 d-flex flex-column align-items-start">
                      <small className="d-flex gap-3 justify-content-center align-items-center">
                        <span className="skeleton skeleton-text w-25" />
                        <small className="skeleton skeleton-text w-25" />
                      </small>
                      <h5 className="skeleton skeleton-text w-50 my-4" />
                      <div className="skeleton skeleton-btn w-25 h-30" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  )
  if (error) return <p style={{ color: "red" }}> {error}</p>

  return (
    <div className="ArticalPage">
      <Hero data={HeroData[0]} />
      <FirstSection projectsData={Firstdata} />
      <OtherArticals />
    </div>
  )
}
