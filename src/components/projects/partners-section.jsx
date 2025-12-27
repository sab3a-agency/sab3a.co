import { PartnersMarquee } from './marquees';

const Data = {
  title: 'شريكك في',
  span: 'النجاح الرقمي ',
  innerTitle: 'في ',
  innerSpan: ' سبعة',
  innerTitleEnd: '، نؤمن بأن التصميم الاستثنائي يتجاوز الجماليات.',
  description: ' إنه يشمل الوظائف والقدرة على تحقيق الغرض المقصود. فريقنا الم dedicated هو مدفوع بهدف إنشاء علامات تجارية تُحدث تأثيرًا ذا  مغزى.'
};

export default function PartnersSection() {
  return (
    <section className='Section2 mt-80 '>
      <div className='container'>
        <div className='adv '>
          <div className='container d-flex-column d-md-flex  justify-content-between align-items-center '>
            <div className='info ' data-aos='zoom-in'>
              <h2 className=' d-flex gap-2 justify-content-start'>
                {Data.title}
                <span>{Data.span}</span>
              </h2>
            </div>
            <div className='info   d-flex flex-column gap-5' data-aos='zoom-in'>
              <p>
                {Data.innerTitle}
                <span>{Data.innerSpan}</span>
                {Data.innerTitleEnd}
              </p>
              <p>{Data.description}</p>
            </div>
          </div>
        </div>
      </div>
      <PartnersMarquee />
    </section>
  );
}
