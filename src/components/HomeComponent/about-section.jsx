import Image from 'next/image';

export default function About({ data }) {
  const { aboutSection } = data;
  return (
    <div className='HowWeAre mt-80'>
      <div className='container py-5 mt-5'>
        <div className='d-flex-column d-md-flex-column d-xl-flex justify-content-between align-items-center gap-5'>
          <div className=' text-center aos-init' data-aos='zoom-in'>
            <div className='imgWrapp'>
              <Image className='img-fluid' src={'/img/image-hijab.png'} alt='meeting_img' loading='lazy' width={1000} height={1000} />
            </div>
          </div>

          <div className=' d-flex flex-column gap-3 aos-init' data-aos='zoom-in'>
            <div className='info mb-4 mt-5 container'>
              {/* TODO: use subtitle from api when added */}
              <small>من نحن</small>
              <h3 className='heroinfo my-4'>{aboutSection.title}</h3>
              <p className='w-100'>{aboutSection.content}</p>
            </div>

            {/* TODO: use api data when be ready */}
            <div className='WrappersubSession mt-5 mx-3 mx-md-0'>
              <div className='boxs d-flex flex-column  gap-5'>
                <div className='box d-flex gap-4 align-items-start '>
                  <div className='icon'>
                    <Image width={32} height={32} src={'img/cloud-add.svg'} alt='icon' loading='lazy' />
                  </div>
                  <div className='information  d-flex flex-column align-items-start justify-content-center mt-2'>
                    <h3 className='fs-2'>البنية التحتية لتكنولوجيا المعلومات </h3>
                    <p className='fs-4'>ضمان موثوقية وأداء بنية تكنولوجيا المعلومات الخاصة بك من خلال خدمات الإدارة لدينا.</p>
                  </div>
                </div>
                <div className='box d-flex gap-4 align-items-start '>
                  <div className='icon'>
                    <Image width={32} height={32} src={'img/color-swatch.svg'} alt='icon' loading='lazy' />
                  </div>
                  <div className='information  d-flex flex-column align-items-start justify-content-center mt-2'>
                    <h3 className='fs-2'>تصميم واجهة المستخدم وتجربة المستخدم</h3>
                    <p className='fs-4'>ضمان موثوقية وأداء بنية تكنولوجيا المعلومات الخاصة بك من خلال خدمات الإدارة لدينا.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
