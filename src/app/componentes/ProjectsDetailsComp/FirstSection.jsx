"use client";

import { useParams } from "next/navigation";
import { use, useEffect } from "react";

import Image from "next/image";

const data = {
  intro: `
  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
  النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
  من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.`,
  FisrtDiscription: `            إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة
  عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد
  النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى
  كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.`,
  SecondDescription: `            إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة
  عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد
  النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى
          كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. هنا وجب على
          المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور
          مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة
          له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.`,
  src: "/img/ServicePage/img3.png",
};
const projectsData = [
  {
    id: 1,
    img: "/img/ServicePage/img1.png",
    title: "تطوير البرمجيات المخصصة",
    discription:
      "هذا النص هو مثال لنص يمكن ان يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
    tags: ["الرعاية الصحية", "العلامة التجارية", " الهوية البصرية", " التغليف"],
  },
  {
    id: 2,
    img: "/img/ServicePage/img2.png",
    title: " اسم المشروع",
    discription: "نقدم تحليلاً دقيقًا لأنظمتك",
    tags: ["الرعاية الصحية", "العلامة التجارية", " الهوية البصرية", " التغليف"],
  },
  {
    id: 3,
    img: "/img/ServicePage/img3.png",
    title: " اسم المشروع",
    discription: "نقدم تحليلاً دقيقًا لأنظمتك",
    tags: ["الرعاية الصحية", "العلامة التجارية", " الهوية البصرية", " التغليف"],
  },
  {
    id: 4,
    img: "/img/ServicePage/img4.png",
    title: " اسم المشروع",
    discription: "نقدم تحليلاً دقيقًا لأنظمتك",
    tags: ["الرعاية الصحية", "العلامة التجارية", " الهوية البصرية", " التغليف"],
  },
  {
    id: 5,
    img: "/img/ServicePage/img5.png",
    title: " اسم المشروع",
    discription: "نقدم تحليلاً دقيقًا لأنظمتك",
    tags: ["الرعاية الصحية", "العلامة التجارية", " الهوية البصرية", " التغليف"],
  },
  {
    id: 6,
    img: "/img/ServicePage/img6.png",
    title: " اسم المشروع",
    discription: "نقدم تحليلاً دقيقًا لأنظمتك",
    tags: ["الرعاية الصحية", "العلامة التجارية", " الهوية البصرية", " التغليف"],
  },
];
export default function FirstSection() {
  // Think About how to get the data  by id
  //  Still have a problem undifined id but in terminal its showing the id ??
  // --------------------
  // const params = useParams();
  // console.log(params.ProjectsDetails);

  // const projectId = Number(params.ProjectsDetails);
  // const project = projectsData.find((p) => p.id === projectId);

  // if (!project) {
  //   return <div>Project not found</div>;
  // }

  // const data = project;
  // --------------------

  return (
    <>
      <section className="FirstSection mt-50">
        <div className="container">
          <p className="mb-5">{data.intro}</p>
        </div>
        <div className="imgWrapper">
          <Image
            src={"/img/ServicePage/img3.png"}
            alt="img"
            width={1000}
            height={800}
            loading="lazy"
          />
        </div>
        <div className="infoWrapper d-flex flex-column justify-content-center align-items-center container">
          <p className="m-5">{data.FisrtDiscription}</p>

          <p>{data.SecondDescription}</p>
        </div>
      </section>
    </>
  );
}
