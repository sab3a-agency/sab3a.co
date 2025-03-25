import "../css/ConcatUS.css";
export default function ConcatUS() {
    const data = {
        small: "اتصل",
        title: "نود أن نسمع منك",
        discription: "فريقنا الرقمي متاح لمساعدتك والإجابة على جميع استفساراتك عبر القنوات التالية:",
        boxes: [
            {
                img: "/img/ConcatUS/Location.svg",
                title: "البريد الإلكتروني",
                text: "تواصل معنا على مدار الساعة",
                link: "sab3a.agency@gmail.com"
            },
            {
                img: "/img/ConcatUS/Massage.svg",
                title: "مكتب",
                text: "تواصل معنا من أي مكان!",
                span: "وكالة سبعة رقمية تخدم السعودية، عُمان، ومصر عن بُعد."
            },
            {
                img: "/img/ConcatUS/Telphone.svg",
                title: "ساعات العمل",
                text: "من الأحد إلى الخميس من 9:30 صباحًا حتى 5:30 مساءً.",
                phone: "+96878495068"
            }
        ]
    };

    return (
        <section className="ConcatUS mt-50">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="head">
                            <div className="containerTitle d-flex justify-content-center align-items-baseline gap-3">
                                <div className="doted"></div>
                                <small>
                                    {data.small}
                                </small>
                            </div>
                            <h3>{data.title}</h3>
                            <p className="my-4">{data.discription}</p>
                        </div>
                        <div className="ContentText d-flex flex-wrap gap-3 mt-5 justify-content-start">
                            {
                                data.boxes.map((box, index) => (
                                    <div key={index} className="box mb-5 d-flex flex-column align-items-start gap-2 ">
                                        <img src={box.img} alt="message-img" />
                                        <h4 className="my-3">{box.title}</h4>
                                        <p>{box.text}</p>
                                        {box.span && <span>{box.span}</span>}
                                        {box.link && <a href={`mailto:${box.link}`}>{box.link}</a>}
                                        {box.phone && <a href={`tel:${box.phone}`}>{box.phone}</a>}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="head d-flex flex-column gap-3 align-items-start">
                            <h3>تواصل معنا</h3>
                            <p>لديك أسئلة أو تحتاج إلى استشارة؟ املأ النموذج أدناه، وسيتواصل معك فريقنا في أقرب وقت.</p>
                        </div>
                        <form>
                            <div className="d-flex gap-5">
                                <label>
                                    <h6>   الاسم الأول</h6>
                                    <input type="text" name="" placeholder="الاسم الاول" />
                                </label>
                                <label>
                                    <h6>    اسم العائلة</h6>
                                    <input type="text" name="" placeholder="اسم العائلة" />
                                </label>
                            </div>
                            <div className="d-flex gap-5">
                                <label>
                                    <h6>     البريد الإلكتروني</h6>
                                    <input type="email" name="" placeholder="البريد الإلكتروني" />
                                </label>
                                <label>
                                    <h6>     رقم الهاتف</h6>
                                    <input type="text" name="" placeholder="اسم العائلة" />
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
