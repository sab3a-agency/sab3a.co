"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import {
  getCountryCallingCode,
  getRegionCodeForCountryCode,
} from "libphonenumber-js";
import "react-phone-input-2/lib/style.css";

const PhoneInput = dynamic(() => import("react-phone-input-2"), { ssr: false });

const getCountryName = (countryCode) => {
  const countryNames = new Intl.DisplayNames(["ar"], { type: "region" });
  return countryNames.of(countryCode) || "غير معروف";
};

export default function FirstSiction() {
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("US");

  const handleChange = (value, countryData) => {
    setPhone(value);
    setCountry(countryData?.countryCode?.toUpperCase() || "SA");
  };

  const data = {
    small: "اتصل",
    title: "نود أن نسمع منك",
    discription:
      "فريقنا الرقمي متاح لمساعدتك والإجابة على جميع استفساراتك عبر القنوات التالية:",
    boxes: [
      {
        img: "/img/ConcatUS/Location.svg",
        title: "البريد الإلكتروني",
        text: "تواصل معنا على مدار الساعة",
        link: "sab3a.agency@gmail.com",
      },
      {
        img: "/img/ConcatUS/Massage.svg",
        title: "مكتب",
        text: "تواصل معنا من أي مكان!",
        span: "وكالة سبعة رقمية تخدم السعودية، عُمان، ومصر عن بُعد.",
      },
      {
        img: "/img/ConcatUS/Telphone.svg",
        title: "ساعات العمل",
        text: "من الأحد إلى الخميس من 9:30 صباحًا حتى 5:30 مساءً.",
        phone: "+96878495068",
      },
    ],
  };

  return (
    <section className="ConcatUS mt-50">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="head">
              <div className="containerTitle d-flex justify-content-center align-items-baseline gap-3">
                <div className="doted"></div>
                <small>{data.small}</small>
              </div>
              <h3>{data.title}</h3>
              <p className="my-4">{data.discription}</p>
            </div>
            <div className="ContentText d-flex flex-wrap gap-3 mt-5 justify-content-start">
              {data.boxes.map((box, index) => (
                <div
                  key={index}
                  className="box mb-5 d-flex flex-column align-items-start gap-2"
                >
                  <img src={box.img} alt="message-img" />
                  <h4 className="my-3">{box.title}</h4>
                  <p>{box.text}</p>
                  {box.span && <span>{box.span}</span>}
                  {box.link && <a href={`mailto:${box.link}`}>{box.link}</a>}
                  {box.phone && <a href={`tel:${box.phone}`}>{box.phone}</a>}
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="head d-flex flex-column gap-3 align-items-start">
              <h3>تواصل معنا</h3>
              <p>
                لديك أسئلة أو تحتاج إلى استشارة؟ املأ النموذج أدناه، وسيتواصل
                معك فريقنا في أقرب وقت.
              </p>
            </div>

            <form className="mt-5">
              <div className="container">
                <div className="row g-3">
                  {["الاسم الأول", "اسم العائلة", "البريد الإلكتروني"].map(
                    (label, idx) => (
                      <div key={idx} className="col-6 col-md-6">
                        <label className="form-label">
                          <h6>{label}</h6>
                          <input
                            type={
                              label === "البريد الإلكتروني" ? "email" : "text"
                            }
                            className="form-control"
                            placeholder={label}
                            required
                          />
                        </label>
                      </div>
                    )
                  )}

                  <div className="col-6 col-md-6">
                    <div className="phone-input-container">
                      <label className="phone-label form-label">
                        <h6>رقم الهاتف</h6>
                      </label>
                      <div className="custom-phone-input">
                        <PhoneInput
                          country={country.toLowerCase()}
                          value={phone}
                          onChange={handleChange}
                          enableSearch={true}
                          disableSearchIcon={true}
                          placeholder={`+${getCountryCallingCode(
                            country
                          )}+ +966 5XX XXXX`}
                          inputClass="custom-input"
                          containerClass="phone-wrapper"
                          buttonClass="hide-flag"
                          required
                        />
                        <div className="country-name-box">
                          {getCountryName(country)}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-12">
                    <div className="phone-input-container">
                      <label className="phone-label form-label">
                        <h6>رسالتك</h6>
                      </label>
                      <textarea
                        placeholder="كيف يمكننا مساعدتك؟"
                        className="form-control"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-6 col-md-12 d-flex align-items-center gap-4">
                    <input type="checkbox" required id="" name="" />
                    <label>
                      <h6 className="config my-4">
                        أنت توافق على سياسة الخصوصية الودية لدينا.
                      </h6>
                    </label>
                  </div>

                  <button
                    className="btn btn-success p-3"
                    onClick={(event) => {
                      event.preventDefault();
                    }}
                  >
                    إرسال الرسالة
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
