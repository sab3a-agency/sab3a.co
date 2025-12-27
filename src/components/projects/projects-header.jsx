import Link from 'next/link';
import Projects from './projects';
import Image from 'next/image';

const Data = {
  title: '   دعنا',
  span: ' نتعاون معك ',
  titleEnd: 'لرفع مستوى علامتك التجارية وتحقيق أهدافك.',
  btnContent: ' تواصل معنا '
};

export default function ProjectsHeader() {
  return (
    <>
      <header className='Hero_Service mt-80'>
        <div className='container'>
          <div className='Hero'>
            <div className='container head d-flex align-items-start justify-content-between flex-column' data-aos='fade-left'>
              <h1 className=''>
                {Data.title}
                <span>{Data.span}</span>
                {Data.titleEnd}
              </h1>
              <Link href='/contact-us' className='d-flex align-items-center gap-4 text-decoration-none  justify-content-center' data-aos='fade-up-right'>
                <Image width={20} height={20} id='arrow' src='/img/ServicePage/arrow.svg' alt='arrow' />
                <h4>{Data.btnContent}</h4>
              </Link>
            </div>

            <Projects />
          </div>
        </div>
      </header>
    </>
  );
}
