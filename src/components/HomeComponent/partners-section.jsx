import Image from 'next/image';

export default async function PartnersSection() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/partners`, {
    cache: 'no-store'
  });
  const {
    data: { items }
  } = await res.json();

  return (
    <div className='Your_partner_in_success position-relative'>
      <div className='container'>
        <div className='title m-5 d-flex justify-content-between align-items-center aos-init' data-aos='zoom-in'>
          <h3>
            شريكك في <span>النجاح الرقمي</span>
          </h3>
        </div>

        <div className='partnersLogos aos-init' data-aos='fade-up'>
          <div id='carouselExampleInterval' className='carousel slide position-relative'>
            <div className='carousel-inner'>
              <div className='Wrapperbox d-flex flex-wrap justify-content-center gap-3 '>
                {items.map((partner, i) => (
                  <div key={i} className='box p-2 d-flex justify-content-center align-items-center min-w-150'>
                    <a href={partner.url} target='_blank' rel='noopener noreferrer'>
                      <Image src={partner.logo} alt={partner.name} className='img-fluid' width={150} height={150} loading='lazy' />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
