import Image from 'next/image';

const data = {
  src: '/img/meting.jpeg',
  innerSrc: '/img/marquee-star.svg',
  marquees: ['رسم توضيحي', 'تصميم جرافيكي', 'تصميم واجهة المستخدم وتجربة المستخدم', 'تطوير']
};
export default function MarqueeSection() {
  return (
    <section className='HeroContent'>
      <div className='container p-5 pt-0 mb-5 mb-md-0'>
        <div className='lastPart row  mt-90'>
          <div className='container'>
            <div className='imgWrapper' data-aos='fade-up'>
              <Image width={1240} height={700} src={data.src} alt='meeting' className='object-fit-cover' />
            </div>
          </div>
        </div>
      </div>

      <div className='RunningLikePost'>
        <div className='Text-Running'>
          <marquee className='my-4' behavior='scroll' direction='left' scrollamount='15' loop='infinite'>
            <div className='d-flex align-items-center justify-content-between'>
              {data.marquees.map((title, index) => {
                return (
                  <div key={index} className='sliderImg d-flex justify-content-center align-items-center gap-5 px-3'>
                    <Image width={48} height={48} src={data.innerSrc} alt='Star' loading='lazy' />
                    <small>{title}</small>
                  </div>
                );
              })}
            </div>
          </marquee>
        </div>
      </div>
    </section>
  );
}
