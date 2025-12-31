import Image from 'next/image';

export async function PartnersMarquee() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/partners`);
  const {
    data: { items: partners }
  } = await res.json();

  return (
    <>
      <marquee behavior='' direction='left' scrollamount='15' loop='infinite' className='marqueeLg mt-80' data-aos='zoom-out'>
        {partners.map((partner) => (
          <a key={partner.id} href={partner.link} target='_blank' rel='noopener noreferrer' className='mx-5'>
            <Image loading='lazy' src={partner.logo} alt='partner logo' className='partner h-auto object-fit-cover' width={200} height={60} />
          </a>
        ))}
      </marquee>

      <div className='PartnersMarquee_sm row mt-5 d-flex justify-content-center' data-aos='zoom-in'>
        {partners.map((partner) => (
          <div key={partner.id} className='col-4 col-xl-2  mb-3'>
            <a href={partner.link} target='_blank' rel='noopener noreferrer'>
              <div className='outerImgWrrap d-flex align-items-center justify-content-center'>
                <Image
                  loading='lazy'
                  src={partner.logo}
                  alt='partner_logo'
                  width={200}
                  height={60}
                  className='partner_logo object-fit-contain'
                  style={{ height: '60px', width: 'auto' }}
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
