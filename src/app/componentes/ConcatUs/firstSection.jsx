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
  const [phoneValue, setPhone] = useState("");
  const [country, setCountry] = useState("US");

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
  // Now need to do Functionality to accept data from form

  const [value, setValue] = useState({
    name: "",
    family: "",
    email: "",
    phone: "",
    message: "",
    Accept: false,
  });
  const handleChange = (phoneValue, countryData) => {
    setPhone(phoneValue);
    setCountry(countryData?.countryCode?.toUpperCase() || "SA");
    setValue((prev) => ({ ...prev, phone: phoneValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `
      TestingFormSendData ..
      
    Hello :: 
     Your Name :: ${value.name} ${value.family} ,
     Your Email :: ${value.email} ,
     your PhoneNumber :: ${value.phone} ,
     your Massage :: ${value.message} ,
     your Accept :: ${value.Accept} `
    );
  };

  return (
    <section className="ConcatUS mt-50">
      <div className="container">
        <div className="row mx-2 mx-md-0">
          <div className="col-12 col-md-6">
            <div className="head">
              <div className="containerTitle  d-flex justify-content-center align-items-baseline gap-3">
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

            {/* Form */}
            <form className="mt-5" onSubmit={handleSubmit}>
              <div className="container">
                <div className="row g-3">
                  {[
                    { label: "الاسم الأول", key: "name", type: "text" },
                    { label: "اسم العائلة", key: "family", type: "text" },
                    { label: "البريد الإلكتروني", key: "email", type: "email" },
                  ].map(({ label, key, type }) => (
                    <div key={key} className="col-6 col-md-6">
                      <label className="form-label">
                        <h6>{label}</h6>
                        <input
                          type={type}
                          className="form-control"
                          placeholder={label}
                          required
                          value={value[key]}
                          onChange={(e) =>
                            setValue((prev) => ({
                              ...prev,
                              [key]: e.target.value,
                            }))
                          }
                        />
                      </label>
                    </div>
                  ))}

                  <div className="col-6 col-md-6">
                    <div className="phone-input-container">
                      <label className="phone-label form-label">
                        <h6>رقم الهاتف</h6>
                      </label>
                      <div className="custom-phone-input">
                        <PhoneInput
                          country={country.toLowerCase()}
                          value={phoneValue}
                          onChange={handleChange}
                          enableSearch={true}
                          disableSearchIcon={true}
                          placeholder={`+${getCountryCallingCode(
                            country
                          )} 5XX XXXX`}
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
                        value={value.message}
                        onChange={(e) =>
                          setValue((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-6 col-md-12 d-flex align-items-center gap-4">
                    <input
                      type="checkbox"
                      required
                      id=""
                      name=""
                      onClick={() => {
                        setValue((prev) => ({
                          ...prev,
                          Accept: !prev.Accept,
                        }));
                      }}
                    />
                    <label>
                      <h6 className="config my-4">
                        أنت توافق على سياسة الخصوصية الودية لدينا.
                      </h6>
                    </label>
                  </div>

                  <button className="btn btn-success p-3">إرسال الرسالة</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
