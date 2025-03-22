export default function ImgesSection() {
  let imges = [
    "../img/ProjectsDetails/adv1.png",
    "../img/ProjectsDetails/adv2.png",
    "../img/ProjectsDetails/adv3.png",
    "../img/ProjectsDetails/adv4.png",
    "../img/ProjectsDetails/adv5.png",
    "../img/ProjectsDetails/adv6.png",
  ];
  return (
    <section className="ImgesSection mt-80">
      <div className="wrapperImg d-flex flex-column justify-content-center">
        {imges.map((img, index) => {
          return (
            <div key={img + "_" + index} className="imgWrapper">
              <img src={img} alt="adv_img" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
