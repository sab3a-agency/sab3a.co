import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsHeader({ data }) {
  return (
    <>
      <header className='Hero_Service mt-80'>
        <div className='container'>
          <div className='Hero'>
            <div className='container head d-flex align-items-start justify-content-between flex-column aos-init' data-aos='fade-left'>
              <h1>{data.title}</h1>
              <Link href={data.button_url} className='d-flex align-items-center gap-4 text-decoration-none  justify-content-center aos-init' data-aos='fade-up-right'>
                <Image width={20} height={20} id='arrow' src='/img/ServicePage/arrow.svg' alt='arrow' />
                <h4>{data.button_text}</h4>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
