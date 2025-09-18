"use client";
import { useEffect, useRef, useState } from "react";

const Hero_data = {
  Massges: `                  انضم إلينا في رحلة الابتكار والإبداع، حيث نبني معًا شيئًا
                  استثنائيًا يفوق التوقعات.`,
  src: "/img/SomeOne_kofia.png",
  title: "وكالة رقمية إبداعية",
  advPoster: "نحو عالم رقمي يرفع من مستوى أعمالك",
};

function HeroSkeleton() {
  return (
    <div className="container px-5 mt-80 pt-0">
      <div className="Part1 row w-100 mx-auto">
        <div className="wrap d-md-flex justify-content-between align-content-center align-items-center gap-5">
          <div className="imgWrapper d-flex align-items-center justify-content-start gap-0 w-100 position-relative">
            <img
              src="../img/LoagingState.png"
              className="placeholder bg-light bg-opacity-50 rounded-circle placeholder-wave"
              style={{ width: "200px", height: "200px", objectFit: "contain" }}
            />

            <p className="imgText w-100 text-center text-md-start placeholder-wave">
              <span className="placeholder col-8 rounded-pill"></span>
            </p>
          </div>

          <div className="d-flex align-items-center gap-3 w-100">
            <div className="col-12 col-md-10 placeholder-wave">
              <p className="text-wikala d-flex justify-content-start align-items-start">
                <span className="placeholder col-6 rounded-pill"></span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 my-0 position-relative d-flex justify-content-center align-items-center">
        <p className="BigText placeholder-wave">
          <span className="placeholder col-7 rounded-pill"></span>
        </p>
        <img
          src="../img/LoagingState.png"
          className="placeholder bg-light bg-opacity-50 rounded-circle placeholder-wave"
          style={{ width: "200px", height: "200px", objectFit: "contain" }}
        />
      </div>

      <div className="d-flex">
        <div className="innerWrappe col-md-3 gap-5">
          <div className="text placeholder-wave">
            <p className="textBox spaheal d-flex align-items-center">
              <span className="placeholder col-10 rounded-pill"></span>
            </p>
          </div>

          {/* box_1 */}
          <div className="Box-wrapper d-flex align-items-baseline placeholder-wave">
            <span
              className="placeholder rounded-circle"
              style={{ width: "30px", height: "30px" }}
            ></span>
            <p className="textBox ms-2 placeholder col-6 rounded-pill"></p>
          </div>

          {/* box_2 */}
          <div className="Box-wrapper d-flex align-items-baseline placeholder-wave">
            <span
              className="placeholder rounded-circle"
              style={{ width: "30px", height: "30px" }}
            ></span>
            <p className="textBox ms-2 placeholder col-6 rounded-pill"></p>
          </div>

          {/* box_3 */}
          <div className="Box-wrapper d-flex align-items-baseline placeholder-wave">
            <span
              className="placeholder rounded-circle"
              style={{ width: "30px", height: "30px" }}
            ></span>
            <p className="textBox ms-2 placeholder col-6 rounded-pill"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroPart1() {
  const countersRef = useRef([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/projects/homepage");

        if (!res.ok) {
          throw new Error("Failed to fetch homepage data");
        }

        const result = await res.json();

        if (result.code !== 200) {
          throw new Error(result.message || "Upstream API error");
        }

        const cleanedStatistics = result.data.statistics.map((item) => {
          const numericValue = parseInt(item.value.replace(/\D/g, ""), 10);
          return {
            ...item,
            numericValue: isNaN(numericValue) ? 0 : numericValue,
          };
        });

        setData({
          ...result.data,
          statistics: cleanedStatistics,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!data) return;

    function startCount(el) {
      if (el.dataset.animated === "true") return;

      const goal = parseInt(el.dataset.goal);
      if (isNaN(goal)) return;

      let current = 0;
      el.dataset.animated = "true";

      const stepTime = Math.max(20, 2000 / goal);
      const count = setInterval(() => {
        el.textContent = ++current;
        if (current >= goal) {
          clearInterval(count);
        }
      }, stepTime);
    }

    function handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCount(entry.target);
        }
      });
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    countersRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [data]);

  // console.log("data :: ", data);

  if (loading || !data) {
    return <HeroSkeleton />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container px-5 mt-80 pt-0">
      <div className="Part1 row w-100 mx-auto" data-aos="fade-up">
        <div className="wrap d-md-flex justify-content-between align-content-center align-items-center gap-5">
          <div
            className="imgWrapper d-flex align-items-center justify-content-start gap-0 w-100 position-relative "
            data-aos="fade-up "
          >
            <img
              className="CofiaVector"
              alt="صورة شخص يرتدي كوفية"
              src={Hero_data.src}
              loading="eager"
              onError={(e) => {
                e.currentTarget.src = "../img/LoagingState.png";
                e.currentTarget.style.objectFit = "contain";
              }}
            />

            <p className="imgText w-100 text-center text-md-start">
              {Hero_data.Massges}
            </p>
          </div>

          <div className=" d-flex align-items-center gap-3 w-100  ">
            <div className="col-12 col-md-10">
              <p className="text-wikala d-flex justify-content-start align-items-start">
                {Hero_data.title}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mt-2 my-0 position-relative d-flex justify-content-start align-items-center"
        data-aos="fade-up"
      >
        <p className="BigText">{Hero_data.advPoster}</p>

        <img
          src="/img/BoardsPoster.svg"
          className="LargPoster d-none d-md-none d-xl-flex justify-content-center align-items-start  "
          alt="Saba-Image"
          onError={(e) => {
            e.currentTarget.src = "../img/LoagingState.png";
            e.currentTarget.style.objectFit = "contain";
          }}
        />
      </div>

      <div className="outWrrape d-flex " data-aos="fade-up">
        <div className="innerWrappe col-3  my-5 d-flex justify-content-start align-content-start  gap-4 w-100">
          <div className="text">
            <p className="textBox spaheal d-flex align-items-center">
              نحن نبتكر، نصمم، ونحول الأفكار إلى واقع رقمي لنلبي احتياجات
              عملائنا بتميز وإبداع.
            </p>
          </div>
          <div className="TowBoxes d-flex flex-wrap justify-content-center align-items-center gap-5 ">
            {/* box_1 */}
            <div className="box_1 col d-flex justify-content-center">
              <div className="Box-wrapper d-flex align-items-baseline">
                <span
                  ref={(el) => (countersRef.current[0] = el)}
                  data-goal={data.statistics[0]?.numericValue}
                >
                  0
                </span>
                <p className="textBox">{data.statistics[0]?.title}</p>
              </div>
            </div>

            {/* box_2 */}
            <div className="box_2 col d-flex justify-content-center">
              <div className="Box-wrapper d-flex align-items-baseline">
                <span
                  ref={(el) => (countersRef.current[1] = el)}
                  data-goal={data.statistics[1]?.numericValue}
                >
                  0
                </span>
                <p className="textBox">{data.statistics[1]?.title}</p>
              </div>
            </div>
          </div>

          {/* box_3 */}
          <div className="box_3 d-flex">
            <div className="d-flex justify-content-center gap-4">
              <div className="imgs">
                <img
                  src="../img/Avatar.png"
                  alt="Avtar"
                  onError={(e) => {
                    e.currentTarget.src = "../img/LoagingState.png";
                    e.currentTarget.style.objectFit = "contain";
                  }}
                />
              </div>
              <div className="innerBox">
                <h3>{data.statistics[2]?.title}</h3>
                <div className="text d-flex align-items-baseline">
                  <span className="Star">
                    <img
                      src="../img/Star.svg"
                      alt="Star"
                      onError={(e) => {
                        e.currentTarget.src = "../img/LoagingState.png";
                        e.currentTarget.style.objectFit = "contain";
                      }}
                    />
                  </span>

                  <p className="p-1 textBox3">{data.statistics[2]?.value}</p>
                </div>
              </div>
            </div>
            <img
              src="/img/BoardsPoster.svg"
              className="miniposters d-md-flex d-xl-none justify-content-center align-items-center  position-relative"
              style={{ top: "-9rem", width: "18rem", height: "18rem" }}
              alt="Saba-Image"
              onError={(e) => {
                e.currentTarget.src = "../img/LoagingState.png";
                e.currentTarget.style.objectFit = "contain";
                e.currentTarget.style.width = "5rem";
                e.currentTarget.style.height = "5rem";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
