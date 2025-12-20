import Link from 'next/link';

export default function ServicesSection({ data }) {
  const { servicesSection, services } = data;

  return (
    <section className='ContentOurServices'>
      <div className='container p-5 mt-4'>
        <div className='wapperServices  d-flex flex-column flex-md-row justify-content-space-between ' data-aos='fade-down'>
          <div className='Text'>{servicesSection.title}</div>

          <div className='Description'>
            <p className=''>{servicesSection.content}</p>
            <Link href={servicesSection.button_url} className='btn btn-danger d-flex align-items-center justify-content-center'>
              {servicesSection.button_text}
            </Link>
          </div>
        </div>

        {/* Servers */}
        <div className='infoServers mt-50' data-aos='fade-up'>
          <div className='row'>
            {services.map((service) => (
              <div className='col-md-6' key={service.id}>
                <div className='box d-flex align-items-start p-3 rounded'>
                  <div className='Wrappericon me-3 d-flex align-items-center justify-content-center'>
                    <img loading='lazy' className='icon' src={service.icon} alt={service.title} />
                  </div>
                  <div className='info'>
                    <h5 className='fw-bold fs-3'>{service.title}</h5>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
