import JourneyPoints from "./JourneyPoints";

const data = {
  title: " رحلتنا ",
  discription:
    " بدأت سبعة بفكرة بسيطة: دمج الابتكار مع الفن لخلق تجارب رقمية تبرز. ",
};
export default function OurJourney() {
  return (
    <section className="OurJourney mt-80">
      <div className="container">
        <div className="container hero d-flex flex-column align-items-start justify-content-center">
          <h2>{data.title}</h2>
          <span>{data.discription}</span>
        </div>
        <JourneyPoints />
      </div>
    </section>
  );
}
