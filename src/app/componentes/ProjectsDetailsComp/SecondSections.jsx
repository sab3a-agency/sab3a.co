"use client";

export default function SecondSeation({ projectData }) {
  const defaultData = [
    {
      title: "ما قمنا به:",
      discription: `نؤمن بالتعاون والابتكار وسرد القصص. تركز فلسفتنا على فهم العملاء،
      ودفع الحدود الإبداعية، وتقديم حلول فعالة.`,
      Box: [
        {
          icon: "/img/ProjectsDetails/people.svg",
          title: "التصاميم",
          innerIcon: "/img/ProjectsDetails/elements.svg",
          subTitle: [
            "هوية العلامة التجارية",
            "التغليف",
            "الأدوات المكتبية",
            "الهوية الرقمية",
          ],
        },
      ],
    },
  ];

  const apiData =
    projectData && !projectData.Box
      ? [
          {
            title: "ما قمنا به:",
            discription: projectData.description,
            Box: [
              {
                icon: "/img/ProjectsDetails/people.svg",
                title: "التصاميم",
                innerIcon: "/img/ProjectsDetails/elements.svg",
                subTitle: projectData.designs?.filter(Boolean),
              },
              {
                icon: "/img/ProjectsDetails/lamp-on.svg",
                title: "المحتوى",
                innerIcon: "/img/ProjectsDetails/elements.svg",
                subTitle: projectData.contents?.filter(Boolean),
              },
              {
                icon: "/img/ProjectsDetails/lamp-on.svg",
                title: "الاستراتيجية",
                innerIcon: "/img/ProjectsDetails/elements.svg",
                subTitle: projectData.strategies?.filter(Boolean),
              },
              {
                icon: "/img/ProjectsDetails/story.svg",
                title: "التكنولوجيا",
                innerIcon: "/img/ProjectsDetails/elements.svg",
                subTitle: projectData.technologies?.filter(Boolean),
              },
            ],
          },
        ]
      : null;

  const DataToUse = projectData
    ? projectData.Box
      ? [projectData]
      : apiData
    : defaultData;

  return (
    <section className="SecondSeation mt-50">
      <div className="container">
        <div className="hero d-flex flex-column text-justify">
          {DataToUse.map((feature, idx) => (
            <div key={idx} className="title text-justify">
              <h1>{feature.title}</h1>
              <p>{feature.discription}</p>
            </div>
          ))}
        </div>

        <div className="container">
          <div className="wapperBox mt-5">
            <div className="row">
              {DataToUse.map((feature, fIdx) =>
                feature.Box.map((boxItem, index) => (
                  <div
                    key={`${fIdx}-${index}`}
                    className="Box col-6 col-sm-6 col-md-3"
                  >
                    <div className="icon">
                      <img loading="lazy"
                        src={boxItem.icon}
                        alt="icon"
                        onError={(e) => {
                          e.currentTarget.src = "../img/LoagingState.png";
                          e.currentTarget.style.objectFit = "contain";
                        }}
                      />
                    </div>

                    {boxItem.smallText && (
                      <small className="smallText d-block mt-3">
                        {boxItem.smallText}
                      </small>
                    )}

                    <h3 className="titles my-3">{boxItem.title}</h3>

                    {boxItem.subTitle?.map((subtitle, subIndex) => (
                      <li key={`${subtitle}-${subIndex}`}>
                        <div className="innerinfo d-flex gap-3 align-items-center">
                          {boxItem.innerIcon && (
                            <img loading="lazy"
                              src={boxItem.innerIcon}
                              alt="Check_Icone"
                              id="Check_Icone"
                              onError={(e) => {
                                e.currentTarget.src = "../img/LoagingState.png";
                                e.currentTarget.style.objectFit = "contain";
                              }}
                            />
                          )}
                          <h4>{subtitle}</h4>
                        </div>
                      </li>
                    ))}

                    {boxItem.description && (
                      <p className="p mt-2">{boxItem.description}</p>
                    )}
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
