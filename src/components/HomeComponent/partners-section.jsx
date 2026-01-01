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

          {/* <div className='SucessBtns d-flex justify-content-between align-items-center gap-5 position-absolute'>
            <img
              src={'/img/DefultBTN.svg'}
              alt='Previous'
              loading='lazy'
              className='leftBTN carousel-control-prev'
              // onMouseEnter={() => setLeftBtnSrc("/img/HoverBTN.svg")}
              // onMouseLeave={() => setLeftBtnSrc("/img/DefultBTN.svg")}
              type='button'
              data-bs-target='#carouselExampleInterval'
              data-bs-slide='prev'
              // onError={(e) => {
              //   e.currentTarget.src = "../img/LoagingState.png";
              //   e.currentTarget.style.objectFit = "contain";
              // }}
            />
            <img
              src={'/img/DefultBTN.svg'}
              alt='Next'
              loading='lazy'
              className='rightBTN carousel-control-next'
              // onMouseEnter={() => setRightBtnSrc("/img/HoverBTN.svg")}
              // onMouseLeave={() => setRightBtnSrc("/img/DefultBTN.svg")}
              type='button'
              data-bs-target='#carouselExampleInterval'
              // data-bs-slide="next"
              // onError={(e) => {
              //   e.currentTarget.src = "../img/LoagingState.png";
              //   e.currentTarget.style.objectFit = "contain";
              // }}
            />
          </div> */}
        </div>

        <div className='partnersLogos aos-init' data-aos='fade-up'>
          <div id='carouselExampleInterval' className='carousel slide position-relative'>
            <div className='carousel-inner'>
              <div className='Wrapperbox d-flex flex-wrap justify-content-center gap-3 '>
                {items.map((partner, i) => (
                  <div key={i} className='box p-2 d-flex justify-content-center align-items-center min-w-150'>
                    <a href={partner.url} target='_blank' rel='noopener noreferrer'>
                      <Image src={partner.logo} alt='شعار الشريك' className='img-fluid' width={150} height={150} loading='lazy' />
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
