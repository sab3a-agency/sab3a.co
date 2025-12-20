import Image from 'next/image';

const images = [
  { src: '/img/AlwaysReady.png', class: 'col-6 col-xl-2 col-md-3 mb-3 d-none d-md-block' },
  { src: '/img/image-hijab.png', class: 'col-12 col-xl-3 col-md-11 mb-3 order-3 order-md-2' },
  { src: '/img/withMindMap.png', class: 'col-6 col-xl-3 col-md-4 mb-3' },
  { src: '/img/withHeadphone.png', class: 'col-6 col-xl-2 col-md-4 mb-3' }
];
export default function FeaturesSection({ data }) {
  const { featuresSection, features } = data;
  return (
    <div className='sessionWhyChooseUs '>
      <div className='container p-5 mt-5'>
        <div className='partImages'>
          <div className='row'>
            {images.map((img) => (
              <div className={img.class} key={img.src}>
                <div className='wappLongimg'>
                  <Image id='wappLongimg' src={img.src} alt='Image from Sab3a Agency' data-aos='zoom-in' width={1000} height={1000} loading='lazy' />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='part2 pt-md-5 mt-80'>
          <div className='row'>
            <div className='col-md-5'>
              <div className='BoxText' data-aos='zoom-in'>
                <h3 className='lh-base'>{featuresSection.title}</h3>
                <p>{featuresSection.content}</p>
                <button className='btn btn-danger d-flex align-items-center  justify-content-center'>{featuresSection.button_text}</button>
              </div>
            </div>

            <div className='col-md-7'>
              <div className='ContenerWrapper'>
                <div className='row d-flex flex-wrap'>
                  <div className='col-12 col-sm-6 d-flex justify-content-center'>
                    <div className='FirstSide d-flex flex-column align-items-center'>
                      {features.slice(0, 2).map((box, index) => {
                        return (
                          <div key={index} className={`box ${index === 0 ? 'Active' : ''}`}>
                            <div className='boxContent' data-aos='fade-zoom-in'>
                              <h2>{box.title}</h2>
                              <p>{box.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className='col-12 col-sm-6 d-flex justify-content-center'>
                    <div className='SecondSide d-flex flex-column align-items-center'>
                      {features.slice(2, 4).map((box, index) => (
                        <div key={index} className='box'>
                          <div className='boxContent' data-aos='fade-zoom-in'>
                            <h2>{box.title}</h2>
                            <p>{box.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
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
