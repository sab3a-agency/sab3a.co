import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ThirdeSection() {
  return (
    <section className="ThirdeSection">
      <div className="row">
        <div className="col-12 col-md-6">
          <img src="/img/ConcatUS/herosimg.png" alt="img" />
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mx-2 mx-md-0 ">
          <div className="box_ditales d-flex flex-column align-items-start">
            <div className="container">
              <div className=" d-flex ">
                <small>ابدأ منتجك الأولي بأفضل سعر!</small>
                <img
                  src="/img/ConcatUS/Huge-icon.png"
                  alt="dimon"
                  className="dimon"
                />
              </div>
              <p className="my-4">
                حوّل فكرتك إلى واقع مع MVP جاهز للانطلاق مقابل{" "}
                <span>15,000 ريال </span>فقط. لا تفوّت الفرصة، وانطلق اليوم!
              </p>
              <a href="#" className="see_more d-flex align-items-center gap-2">
                الإطلاع على الميزات
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        id="Wow-Emoje"
        src="/img/ConcatUS/Wow-Emoje.svg"
        alt="Wow-Emoje.svg"
      />
      <img src="/img/ConcatUS/Star.svg" lt="dimon" className="star" />
    </section>
  );
}
