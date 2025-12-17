import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Questiones from '@/components/HomeComponent/questiones';
import HeroPackages from '@/components/PackagesComponent/heroPackages';
import LetsDoit from '@/components/ServeceComponent/LetsDoit';
import '@/css/package-style.css';

export const metadata = {
  title: 'الباقات'
};

export default function Packages() {
  const faqData = {
    head: {
      title: 'أسئلة متكررة حول ',
      highlight: 'وكالة سبعة',
      description: 'كوكالة رائدة في الحلول الرقمية، نقدم إجابات شاملة لأسئلتك لمساعدتك على فهم كيفية تحويل أفكارك إلى نجاح رقمي.',
      links: [
        { text: 'اتصل بنا', href: '#' },
        { text: 'أسئلة أخرى', isButton: true, icon: faArrowLeft }
      ]
    },
    questions: [
      {
        id: 'flush-collapseOne',
        question: 'لماذا تعتبر الحلول التقنية مهمة لأعمالي؟',
        answer: 'الحلول التقنية تساعد في تحسين كفاءة الأعمال، وتقليل التكاليف، وزيادة الإنتاجية...'
      },
      {
        id: 'flush-collapseTwo',
        question: 'كيف يمكن لسبعة مساعدتي في تطوير تطبيقات الويب والجوال؟',
        answer: 'نحن نقدم حلولًا متكاملة تشمل تطوير التطبيقات، تحسين تجربة المستخدم، والتكامل مع الأنظمة الأخرى.'
      },
      {
        id: 'flush-collapseThree',
        question: 'كم من الوقت يستغرق رؤية نتائج الحلول التقنية؟',
        answer: 'يعتمد الوقت على نوع الحلول التقنية التي تحتاجها، لكن غالبًا ما تبدأ النتائج في الظهور خلال بضعة أسابيع إلى أشهر.'
      },
      {
        id: 'flush-collapseFour',
        question: 'كيف تقيس سبعة نجاح الحلول التقنية التي تقدمها؟',
        answer: 'نعتمد على معايير مثل تحسين الكفاءة، زيادة الإيرادات، تحسين تجربة العملاء، وتقليل الأخطاء التشغيلية.'
      },
      {
        id: 'flush-collapseFive',
        question: 'كيف يمكن لسبعة مساعدة الشركات الناشئة؟',
        answer: 'نحن نقدم حلولًا مرنة تتناسب مع احتياجات الشركات الناشئة، بما في ذلك التطوير السريع والدعم الفني المستمر.'
      },
      {
        id: 'flush-collapseSix',
        question: 'ما الذي يميز سبعة في سوق الخليج؟',
        answer: 'نحن نتميز بفهم عميق للسوق الخليجي، ونعمل على تقديم حلول تقنية متوافقة مع متطلبات العملاء في المنطقة.'
      }
    ]
  };

  const LetsDitedata = {
    btnContent: ' معاملة خاصة ',
    discription: ' ابدأ رحلة لاكتشاف ',
    smallDescription: 'عالم من استراتيجيات التصميم المبتكرة.',
    letsDoit: ' دعنا نصمم غرضك هنا  '
  };

  return (
    <>
      <HeroPackages />
      <Questiones faqData={faqData} />
      <div className='div d-none d-md-block'>
        <LetsDoit data={LetsDitedata} />
      </div>
    </>
  );
}
