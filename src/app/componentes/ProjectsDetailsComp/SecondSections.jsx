"use client";

export default function SecondSeation({ projectData }) {
  // Check if projectData exists before attempting to use it
  if (!projectData) {
    return null;
  }

  // Map the API data to the structure the component expects
  const DataToUse = [
    {
      title: "ما قمنا به:",
      discription:
        projectData.description ||
        "نؤمن بالتعاون والابتكار وسرد القصص. تركز فلسفتنا على فهم العملاء، ودفع الحدود الإبداعية، وتقديم حلول فعالة.",
      Box: [
        {
          icon: "/img/ProjectsDetails/people.svg",
          title: "التصاميم",
          innerIcon: "/img/ProjectsDetails/elements.svg",
          subTitle: projectData.designs,
        },
        {
          icon: "/img/ProjectsDetails/lamp-on.svg",
          title: "المحتوى",
          innerIcon: "/img/ProjectsDetails/elements.svg",
          subTitle: projectData.contents,
        },
        {
          icon: "/img/ProjectsDetails/lamp-on.svg",
          title: "الاستراتيجية",
          innerIcon: "/img/ProjectsDetails/elements.svg",
          subTitle: projectData.strategies,
        },
        {
          icon: "/img/ProjectsDetails/story.svg",
          title: "التكنولوجيا",
          innerIcon: "/img/ProjectsDetails/elements.svg",
          subTitle: projectData.technologies,
        },
      ],
    },
  ];

  return (
    <section className="SecondSeation mt-50">
      <div className="container">
        {/* part title */}
        <div className="hero d-flex flex-column text-justify">
          {DataToUse.map((feature) => (
            <div key={feature.title} className="title text-justify">
              <h1>{feature.title}</h1>
              <p>{feature.discription}</p>
            </div>
          ))}
        </div>

        {/* Boxes */}
        <div className="container">
          <div className="wapperBox mt-5">
            <div className="row">
              {DataToUse.map((feature) =>
                feature.Box.map((boxItem, index) => (
                  <div
                    key={`${boxItem.title}-${index}`}
                    className={`Box col-6 col-sm-6 col-md-3`}
                  >
                    <div className="icon">
                      <img src={boxItem.icon} alt="icon" />
                    </div>

                    <h3 className="titles my-3">{boxItem.title}</h3>

                    {boxItem.subTitle?.map((subtitle, subIndex) => (
                      <li key={`${subtitle}-${subIndex}`}>
                        <div className="innerinfo d-flex gap-3 align-items-center">
                          <img
                            src={boxItem.innerIcon}
                            alt="Check_Icone"
                            id="Check_Icone"
                          />
                          <h4>{subtitle}</h4>
                        </div>
                      </li>
                    ))}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
