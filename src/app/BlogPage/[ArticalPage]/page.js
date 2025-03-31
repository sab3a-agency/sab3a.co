"use client";
import FirstSection from "@/app/componentes/BlogCommponent/FristSection";
import OtherArticals from "@/app/componentes/BlogCommponent/otherArticals";
import Hero from "@/app/componentes/ProjectsDetailsComp/hero";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import "../../css/BolgStyle.css";


export default function ArticalPage() {
    //Assume you have an array of projects  you will get from the backend
    const Articals = useMemo(
        () => [
            {
                id: "1",
                src: "../img/Blog/img1.png",
                title: "عنوان المقال التجريبي",
                btn: "اقرا المزيد",
                span: "20 أكتوبر",
                small: "الأعمال",
            },
            {
                id: "2",
                src: "../img/Blog/img2.png",
                title: "عنوان المقال التجريبي",
                btn: "اقرا المزيد",
                span: "20 أكتوبر",
                small: "الأعمال",
            },
            {
                id: "3",
                src: "../img/Blog/img3.png",
                title: "عنوان المقال التجريبي",
                btn: "اقرا المزيد",
                span: "20 أكتوبر",
                small: "الأعمال",
            },
            {
                id: "4",
                src: "../img/Blog/img4.png",
                title: "عنوان المقال التجريبي",
                btn: "اقرا المزيد",
                span: "20 أكتوبر",
                small: "الأعمال",
            },
            {
                id: "5",
                src: "../img/Blog/img5.png",
                title: "عنوان المقال التجريبي",
                btn: "اقرا المزيد",
                span: "20 أكتوبر",
                small: "الأعمال",
            },
            {
                id: "6",
                src: "../img/Blog/img6.png",
                title: "عنوان المقال التجريبي",
                btn: "اقرا المزيد",
                span: "20 أكتوبر",
                small: "الأعمال",
            },
        ],
        []
    );
    // to giet the id from the url
    const params = useParams();
    const Artical = Articals.find((Artical) => Artical.id === params.ArticalPage);
    // console.log(`The found Artical is ::  `, Artical);


    //Hero Data
    const HeroData = [
        {
            title: Artical.title,
            titleEtc: "",
            span: Artical.span,
            small: Artical.small,
        },
    ];
    //the Artical target Data will disply
    const Firstdata = [{
        id: Artical.id,
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
        src: `${Artical.src}`
    }];



    return (
        <div className="ArticalPage">
            <Hero DefultData={HeroData} />
            <FirstSection projectsData={Firstdata} />
            <OtherArticals />

        </div>
    )
}