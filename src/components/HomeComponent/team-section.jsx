import Image from 'next/image';
import Link from 'next/link';

let fakeData = {
  box1: ['/img/avatar0.png', '/img/avatar1.png', '/img/avatar2.png', '/img/avatar3.png', '/img/Review_Faces.png'],
  box2: ['/img/avatar4.png', '/img/avatar5.png', '/img/Logomark.png', '/img/avatar0.png']
};

export default function TeamSection({ data }) {
  const { teamSection } = data;
  return (
    <div className='ActOurTeam mt-80'>
      <div className='container p-5'>
        <div className='row d-flex flex-column align-items-center gap-5'>
          <div className='col-md-12 col-xl-6 aos-init' data-aos='zoom-in-down'>
            <div className='Actinfo d-flex flex-column align-items-center flex-column'>
              <h3 className='fw-bold'>{teamSection.title}</h3>
              <p>{teamSection.content}</p>
            </div>
          </div>

          <div className='col-md-12 col-xl-6 col-12 aos-init' data-aos='zoom-in-up'>
            <div className='box1  d-flex justify-content-center gap-5'>
              {fakeData.box1.map((item, index) => {
                return (
                  <div className='imgWrapper' key={index}>
                    <Link href='#'>
                      <Image width={100} height={100} src={item} alt='img' loading='lazy' />
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className='box2 d-flex justify-content-center gap-5'>
              {fakeData.box2.map((item, index) => {
                return (
                  <div key={index}>
                    <Link href='#'>
                      <Image width={100} height={100} src={item} alt='img' loading='lazy' />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
