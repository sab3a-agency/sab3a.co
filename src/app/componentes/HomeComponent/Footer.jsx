"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const footerData = {
  socialLinks: [
    { icon: faSquareFacebook, link: "#" },
    { icon: faInstagram, link: "#" },
    { icon: faLinkedin, link: "#" },
    { icon: faTiktok, link: "#" },
    { icon: faYoutube, link: "#" },
  ],
  quickLinks: ["الرئيسية", "خدماتنا", "الباقات", "المدونة", "من نحن"],
  fields: [
    "تطوير البرمجيات",
    "تصميم تجربة المستخدم",
    "تطوير التطبيقات والمواقع",
    "الفن الرقمي",
    "التسويق الرقمي",
  ],
  contacts: [
    {
      icon: "../img/phone.svg",
      title: "هاتف",
      value: "+968 7849 5068",
      link: "tel:+96878495068",
    },
    {
      icon: "../img/Massge.svg",
      title: "البريد الإلكتروني",
      value: "sab3a.agency@gmail.com",
      link: "mailto:sab3a.agency@gmail.com",
    },
  ],
  infoItems: [
    { icon: "../img/location.svg", text: "نعمل عن بعد من عُمان ومصر" },
    {
      icon: "../img/clock.svg",
      text: "من الأحد إلى الخميس، 9:30 صباحًا - 5:30 مساءً",
    },
  ],
};

export default function Footer() {
  return (
    <>
      <footer className="footer mt-5 ">
        <div className="line"></div>
        <div className="FooterWrapper container p-5">
          <div className="containerrWrap">
            <div className="logo text-justify d-flex">
              <a href="#">
                <img src="/img/IconSite.svg" alt="Logo" />
              </a>
            </div>

            <div className="innerFooterContent d-flex justify-content-between flex-column align-items-start gap-5 ">
              <div className="info">
                <p>
                  وكالة تقنية متخصصة في تقديم حلول رقمية مبتكرة. نعتمد على
                  الإبداع والتكنولوجيا لتحويل أفكارك إلى واقع ملموس، مع التركيز
                  على الجودة والاحترافية. نعمل عن بعد من عُمان ومصر لخدمة
                  عملائنا في جميع أنحاء العالم.
                </p>
                <div className="IconWithText ">
                  {footerData.infoItems.map((item, index) => (
                    <div
                      key={index}
                      className="part d-flex   align-items-center justify-content-center gap-1"
                    >
                      <img src={item.icon} alt="" />
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="d-flex wrap  gap-5">
                <div className="list ">
                  <h4>روابط سريعة</h4>
                  <ul>
                    {footerData.quickLinks.map((link, index) => (
                      <li key={index}>
                        <a href="#">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="list ">
                  <h4>المجالات التي نعمل بها</h4>
                  <ul>
                    {footerData.fields.map((field, index) => (
                      <li key={index}>
                        <a href="#">{field}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="contact">
                {footerData.contacts.map((contact, index) => (
                  <div
                    key={index}
                    className="part d-flex flex-column justify-content-start align-items-start"
                  >
                    <div className="info">
                      <img src={contact.icon} alt={contact.title} />
                      <h2>{contact.title}</h2>
                    </div>
                    <a href={contact.link}>{contact.value}</a>
                  </div>
                ))}
              </div>
            </div>
            <div className="sabaShadow">
              <img src="/img/Sab3a.svg" alt="img" />
            </div>
            <hr />
            <div className="FooterBottom mt-4 d-flex justify-content-between">
              <div className="textBox d-flex gap-5">
                <a href="#">سياسة الاستخدام والخصوصية</a>
                <a href="#">شروط الاستخدام</a>
              </div>
              <p className="Text_copyRight">
                جميع الحقوق محفوظة&copy; 2025 <span>وكالة سبعة الرقمية</span>
              </p>
              <div className="social ">
                <div className="icons d-flex justify-content-between align-items-center gap-5">
                  {footerData.socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon icon={social.icon} size="2x" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
