import ActWithTeam from "../componentes/HomeComponent/ActWithTeam";
import HeroPart1 from "../componentes/HomeComponent/HeroPart1";
import Herosection from "../componentes/HomeComponent/heroSection";
import HowWeAre from "../componentes/HomeComponent/HowWeAre";
import OurVision from "../componentes/HomeComponent/OurVision";
import PartnerSession from "../componentes/HomeComponent/partnerSession";
import Questiones from "../componentes/HomeComponent/questiones";
import Services from "../componentes/HomeComponent/services";
import WhyChooseUs from "../componentes/HomeComponent/whyChooseUs";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const faqData = {
    head: {
        title: "أسئلة متكررة حول ",
        highlight: "وكالة سبعة",
        description:
            "كوكالة رائدة في الحلول الرقمية، نقدم إجابات شاملة لأسئلتك لمساعدتك على فهم كيفية تحويل أفكارك إلى نجاح رقمي.",
        links: [
            { text: "اتصل بنا", href: "#" },
            { text: "أسئلة أخرى", isButton: true, icon: "faArrowLeft" },
        ],
    },
    questions: [
        {
            id: "flush-collapseOne",
            question: "لماذا تعتبر الحلول التقنية مهمة لأعمالي؟",
            answer:
                "الحلول التقنية تساعد في تحسين كفاءة الأعمال، وتقليل التكاليف، وزيادة الإنتاجية...",
        },
        {
            id: "flush-collapseTwo",
            question: "كيف يمكن لسبعة مساعدتي في تطوير تطبيقات الويب والجوال؟",
            answer:
                "نحن نقدم حلولًا متكاملة تشمل تطوير التطبيقات، تحسين تجربة المستخدم، والتكامل مع الأنظمة الأخرى.",
        },
        {
            id: "flush-collapseThree",
            question: "كم من الوقت يستغرق رؤية نتائج الحلول التقنية؟",
            answer:
                "يعتمد الوقت على نوع الحلول التقنية التي تحتاجها، لكن غالبًا ما تبدأ النتائج في الظهور خلال بضعة أسابيع إلى أشهر.",
        },
        {
            id: "flush-collapseFour",
            question: "كيف تقيس سبعة نجاح الحلول التقنية التي تقدمها؟",
            answer:
                "نعتمد على معايير مثل تحسين الكفاءة، زيادة الإيرادات، تحسين تجربة العملاء، وتقليل الأخطاء التشغيلية.",
        },
        {
            id: "flush-collapseFive",
            question: "كيف يمكن لسبعة مساعدة الشركات الناشئة؟",
            answer:
                "نحن نقدم حلولًا مرنة تتناسب مع احتياجات الشركات الناشئة، بما في ذلك التطوير السريع والدعم الفني المستمر.",
        },
        {
            id: "flush-collapseSix",
            question: "ما الذي يميز سبعة في سوق الخليج؟",
            answer:
                "نحن نتميز بفهم عميق للسوق الخليجي، ونعمل على تقديم حلول تقنية متوافقة مع متطلبات العملاء في المنطقة.",
        },
    ],
};

export function HomePage() {
    return (
        <>
            <div className="HeaderWithHeroSition"> </div>
            <HeroPart1 />
            <Herosection />
            <Services />
            <WhyChooseUs />
            <HowWeAre />
            <PartnerSession />
            <ActWithTeam />
            <OurVision />
            <Questiones faqData={faqData} />
        </>
    );
}
