"use client";

let data = {
  title: "  تفاعل مع  ",
  span: " فريقنا ",
  titleEnd: " الإبداعي ",
  discription: `   نعمل على إنشاء أكثر الأماكن جاذبية وذات مغزى للأعمال الصغيرة.
                فريقنا دائمًا جاهز لمساعدتك.`,
  box1: [
    "/img/Avatar0.svg",
    "/img/Avatar1.svg",
    "/img/Avatar2.svg",
    "/img/Avatar3.svg",
    "/img/Review_Faces.svg",
  ],
  box2: [
    "/img/Avatar4.svg",
    "/img/Avatar5.svg",
    "/img/Logomark.svg",
    "/img/Avatar0.svg",
  ],
};

export default function ActWithTeam() {
  return (
    <div className="ActOurTeam mt-80">
      <div className="container p-5">
        <div className="row d-flex flex-column align-items-center gap-5">
          <div className="col-md-6" data-aos="zoom-in-down">
            <div className="Actinfo d-flex flex-column align-items-center flex-column">
              <h3>
                {data.title}
                <span>{data.span}</span>
                {data.titleEnd}
              </h3>
              <p>{data.discription}</p>
            </div>
          </div>

          <div className="col-md-6 col-12" data-aos="zoom-in-up">
            <div className="box1  d-flex justify-content-center gap-5">
              {data.box1.map((item, index) => {
                return (
                  <div className="imgWrapper" key={index}>
                    <a href="#">
                      <img src={item} alt="img" />
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="box2 d-flex justify-content-center gap-5">
              {data.box2.map((item, index) => {
                return (
                  <div
                    style={{ cursor: "pointer", width: "100px" }}
                    key={index}
                  >
                    <a href="#">
                      <img src={item} alt="img" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
