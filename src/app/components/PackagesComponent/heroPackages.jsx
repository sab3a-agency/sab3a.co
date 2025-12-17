import { BoxPackage } from "./BoxPackage";

export default function HeroPackages() {
  let Data = {
    title: "اختر",
    span: "التسعير",
    innerspan: "الباقة",
    titleEnd: " التي تناسب مشروعك",
    discription:
      "سواء كنت تبحث عن بداية سريعة مع MVP أو تطوير مشروع كامل، نحن هنا لمساعدتك في تحقيق أهدافك بكل كفاءة واحترافية. اكتشف الباقات المناسبة أدناه وابدأ رحلتك الرقمية معنا!",
  };
  return (
    <div className="heroPackages mt-50">
      <div className="container">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          data-aos="fade-up"
        >
          <small>{Data.span}</small>
          <h1 className="my-4">
            {Data.title}
            <span>{Data.innerspan}</span>
            {Data.titleEnd}
          </h1>
          <p>{Data.discription}</p>
        </div>
        <BoxPackage />
      </div>
    </div>
  );
}
