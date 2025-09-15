"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const data = {
  intro: `
  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
  النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
  من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.`,
  FisrtDiscription: `           إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة
  عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد
  النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى
  كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.`,
  SecondDescription: `           إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة
  عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد
  النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى
           كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. هنا وجب على
           المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور
           مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة
           له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.`,
};

export default function FirstSection() {
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
      <section className="FirstSection mt-50">
        <div className="container">
          <p
            className="mb-5 skeleton-loader text"
            style={{ width: "90%", height: 20 }}
          ></p>
        </div>
        <div
          className="imgWrapper skeleton-loader image"
          style={{ height: 400 }}
        >
          {/* The img tag itself is replaced by the skeleton placeholder */}
        </div>
        <div className="infoWrapper d-flex flex-column justify-content-center align-items-center container">
          <p className="mt-5 text-center text-md-end container">
            {/* Multiple lines for the description placeholder */}
            <span
              className="skeleton-loader text"
              style={{ width: "90%", height: 18 }}
            ></span>
            <span
              className="skeleton-loader text"
              style={{ width: "85%", height: 18 }}
            ></span>
            <span
              className="skeleton-loader text"
              style={{ width: "95%", height: 18 }}
            ></span>
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return <p>حدث خطأ: {error} </p>;
  }

  if (!projectData) {
    return <p>لم يتم العثور على المشروع. 🔍</p>;
  }

  return (
    <>
      <section className="FirstSection mt-50">
        <div className="container">
          <p className="mb-5">{projectData.description}</p>
        </div>
        <div className="imgWrapper">
          <img src={projectData.cover_image} alt="img" loading="lazy" />
        </div>
        <div className="infoWrapper d-flex flex-column justify-content-center align-items-center container">
          <p className="mt-5 text-center text-md-end container">
            {projectData.description}
          </p>
        </div>
      </section>
    </>
  );
}
