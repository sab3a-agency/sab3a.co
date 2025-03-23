import Link from "next/link";

const data = [
  {
    src: "/img/Blog/img1.png",
    title: "عنوان المقال التجريبي",
    btn: "اقرا المزيد",
    span: "20 أكتوبر",
    small: "الأعمال",
  },
  {
    src: "/img/Blog/img2.png",
    title: "عنوان المقال التجريبي",
    btn: "اقرا المزيد",
    span: "20 أكتوبر",
    small: "الأعمال",
  },
  {
    src: "/img/Blog/img3.png",
    title: "عنوان المقال التجريبي",
    btn: "اقرا المزيد",
    span: "20 أكتوبر",
    small: "الأعمال",
  },
  {
    src: "/img/Blog/img4.png",
    title: "عنوان المقال التجريبي",
    btn: "اقرا المزيد",
    span: "20 أكتوبر",
    small: "الأعمال",
  },
  {
    src: "/img/Blog/img5.png",
    title: "عنوان المقال التجريبي",
    btn: "اقرا المزيد",
    span: "20 أكتوبر",
    small: "الأعمال",
  },
  {
    src: "/img/Blog/img6.png",
    title: "عنوان المقال التجريبي",
    btn: "اقرا المزيد",
    span: "20 أكتوبر",
    small: "الأعمال",
  },
];

export default function ArticalGrid() {
  return (
    <div className="ArticalGrid row mt-50">
      {data.map((item, index) => {
        return (
          <div key={index} className="col-12 col-md-4 mt-5">
            <div className="box mt-5">
              <img src={item.src} className="box-img-top" alt="img" />
              <div className="boxbody mt-3 container d-flex flex-column align-items-start">
                <small className="d-flex gap-3 justify-content-center align-items-center">
                  <span>{item.span}</span>
                  <div></div>
                  <small>{item.small}</small>
                </small>
                <span>{item.date}</span>
                <h5 className="boxTitle my-4">{item.title}</h5>
                <Link href="/" className="btn btn-success ">
                  {item.btn}
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
