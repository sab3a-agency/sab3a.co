"use client"
import { useState } from "react"
import Select from "react-select"

const SubjectOptions = [
  { value: "باقة الإطلاق الأولي 'MVP'", label: "باقة الإطلاق الأولي 'MVP'" },
  {
    value: "باقة المشاريع الكبيرة أو فرص التعاون",
    label: "باقة المشاريع الكبيرة أو فرص التعاون"
  }
]

export default function FirstSiction() {
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const data = {
    small: "اتصل",
    title: "تواصل معنا",
    discription:
      "لديك أسئلة أو تحتاج إلى استشارة؟ املأ النموذج أدناه، وسيتواصل معك فريقنا في أقرب وقت.",
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
      }
      // {
      //   img: "/img/ConcatUS/Telphone.svg",
      //   title: "الهاتف",
      //   text: "من الأحد إلى الخميس من 9:30 صباحًا حتى 5:30 مساءً.",
      //   phone: "+96878495068",
      //   full: true
      // }
    ]
  }

  // Now need to do Functionality to accept data from form

  const [value, setValue] = useState({
    name: "",
    family: "",
    email: "",
    phone: "",
    subject: "باقة الإطلاق الأولي 'MVP'",
    message: "",
    Accept: false
  })
  const handlePhoneChange = (e) => {
    const phoneValue = e.target.value
    setValue((prev) => ({ ...prev, phone: phoneValue }))
  }

  const [notification, setNotification] = useState({
    message: "",
    type: "", // "success", "error", "loading"
    visible: false
  })

  const validateForm = () => {
    const newErrors = {}

    if (!value.name.trim() || value.name.length < 2) {
      newErrors.name = "الاسم الأول يجب أن يحتوي على حرفين على الأقل."
    }

    if (!value.family.trim() || value.family.length < 2) {
      newErrors.family = "اسم العائلة يجب أن يحتوي على حرفين على الأقل."
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value.email)) {
      newErrors.email = "يرجى إدخال بريد إلكتروني صحيح."
    }

    if (!value.phone || value.phone.length < 8) {
      newErrors.phone = "يرجى إدخال رقم هاتف صحيح."
    }

    if (!value.message.trim() || value.message.length < 10) {
      newErrors.message = "الرسالة يجب أن تكون على الأقل 10 أحرف."
    }

    if (!value.Accept) {
      newErrors.Accept = "يجب الموافقة على سياسة الخصوصية."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      setNotification({
        message: "يرجى تصحيح الأخطاء قبل الإرسال.",
        type: "error",
        visible: true
      })
      return
    }

    setIsSubmitting(true)
    setNotification({
      message: "جاري الإرسال ...",
      type: "loading",
      visible: true
    })

    const payload = {
      name: `${value.name} ${value.family}`,
      email: value.email,
      phone: value.phone,
      subject: value.subject,
      message: value.message,
      agree_to_policy: value.Accept
    }

    try {
      const res = await fetch("/api/projects/Contact_US", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })

      const data = await res.json().catch(() => ({}))

      console.log("Response status:", res.status)
      console.log("Response data:", data)

      if (!res.ok) {
        throw new Error(data.message || "فشل إرسال البيانات")
      }

      if (data.code !== 200) {
        throw new Error(data.message || "فشل إرسال البيانات")
      }

      // Reset form
      setValue({
        name: "",
        family: "",
        email: "",
        phone: "",
        subject: "باقة الإطلاق الأولي 'MVP'",
        message: "",
        Accept: false
      })

      // Clear errors
      setErrors({})

      setNotification({
        message: "تم إرسال الرسالة بنجاح! 🎉",
        type: "success",
        visible: true
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      setNotification({
        message: error.message || "حدث خطأ، يرجى المحاولة مرة أخرى",
        type: "error",
        visible: true
      })
    } finally {
      setIsSubmitting(false)
      setTimeout(
        () => setNotification((prev) => ({ ...prev, visible: false })),
        3000
      )
    }
  }

  return (
    <section className="contact-us mt-50">
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
            <div className="ContentText d-flex flex-column  gap-5 text-right mt-5 justify-content-start">
              {data.boxes.map((box, index) => (
                <div
                  key={index}
                  className={`box mb-5 d-flex flex-column align-items-start gap-2
                    ${box.full ? "w-100" : "w-40"}`}
                >
                  <img
                    src={box.img}
                    alt="message-img"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "../img/LoagingState.png"
                      e.currentTarget.style.objectFit = "contain"
                    }}
                  />
                  <h4 className="my-3">{box.title}</h4>
                  <p className="">{box.text}</p>
                  {box.span && <span>{box.span}</span>}
                  {box.link && <a href={`mailto:${box.link}`}>{box.link}</a>}
                  {box.phone && <a href={`tel:${box.phone}`}>{box.phone}</a>}
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-md-6">
            {/* Form */}
            <form className="mt-5 form-contact-box" onSubmit={handleSubmit}>
              <div className="container ">
                <div className="row g-4 ">
                  {[
                    { label: "الاسم الأول", key: "name", type: "text" },
                    { label: "اسم العائلة", key: "family", type: "text" },
                    { label: "البريد الإلكتروني", key: "email", type: "email" }
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
                              [key]: e.target.value
                            }))
                          }
                        />
                      </label>
                      {errors[key] && (
                        <p className="error-text">{errors[key]}</p>
                      )}
                    </div>
                  ))}

                  <div className="col-6 col-md-6">
                    <label className="form-label">
                      <h6>رقم الهاتف</h6>
                      <input
                        type="tel"
                        name="phone"
                        value={value.phone}
                        onChange={handlePhoneChange}
                        placeholder="+966 5XX XXX XXX"
                        dir="ltr"
                        style={{ textAlign: 'right' }}
                        required
                      />
                      {errors.phone && (
                        <p className="error-text">{errors.phone}</p>
                      )}
                    </label>
                  </div>

                  <div className="col-12 col-md-12">
                    <label className="form-label">
                      <h6>الموضوع</h6>
                      <Select
                        instanceId="subject-select"
                        className="basic-single"
                        classNamePrefix="select "
                        styles={{
                          indicatorSeparator: () => ({ display: "none" })
                        }}
                        value={SubjectOptions.find(option => option.value === value.subject)}
                        onChange={(selectedOption) =>
                          setValue((prev) => ({
                            ...prev,
                            subject: selectedOption.value
                          }))
                        }
                        isRtl={true}
                        name="Subject"
                        options={SubjectOptions}
                      />
                    </label>
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
                            message: e.target.value
                          }))
                        }
                      ></textarea>
                      {errors.message && (
                        <p className="error-text">{errors.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-6 col-md-12 d-flex align-items-center gap-4">
                    <input
                      type="checkbox"
                      required
                      id="accept-policy"
                      name="accept-policy"
                      checked={value.Accept}
                      onChange={(e) => {
                        setValue((prev) => ({
                          ...prev,
                          Accept: e.target.checked
                        }))
                      }}
                    />
                    <label htmlFor="accept-policy">
                      <h6 className="config my-4">
                        أنت توافق على سياسة الخصوصية الودية لدينا.
                      </h6>
                    </label>
                  </div>
                  {errors.Accept && (
                    <p className="error-text">{errors.Accept}</p>
                  )}

                  <button className="btn btn-success p-3">
                    {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
                  </button>
                </div>
              </div>
            </form>
            {notification.visible && (
              <div className={`custom-toast ${notification.type}`}>
                {notification.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
