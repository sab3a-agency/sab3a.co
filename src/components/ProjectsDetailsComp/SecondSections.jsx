import Image from 'next/image';

export default function SecondSection({ data }) {
  return (
    <section className='SecondSeation mt-50'>
      <div className='container'>
        <div className='hero d-flex flex-column text-justify'>
          <div className='title text-justify'>
            <h1>ما قمنا به:</h1>
            <p>نؤمن بالتعاون والابتكار وسرد القصص. تركز فلسفتنا على فهم العملاء، ودفع الحدود الإبداعية، وتقديم حلول فعالة.</p>
          </div>
        </div>

        <div className='container'>
          <div className='wapperBox mt-5'>
            <div className='row'>
              <div className='Box col-6 col-sm-6 col-md-3'>
                <div className='icon'>
                  <Image width={24} height={24} loading='lazy' src={'/img/ProjectsDetails/people.svg'} alt='icon' />
                </div>

                <h3 className='titles my-3'>تصميم</h3>

                {data.designs.map((text) => (
                  <li key={text}>
                    <div className='innerinfo d-flex gap-3 align-items-center'>
                      <Image width={20} height={20} loading='lazy' src={'/img/ProjectsDetails/elements.svg'} alt='Check_Icone' id='Check_Icone' />
                      <h4>{text}</h4>
                    </div>
                  </li>
                ))}
              </div>
              <div className='Box col-6 col-sm-6 col-md-3'>
                <div className='icon'>
                  <Image width={24} height={24} loading='lazy' src={'/img/ProjectsDetails/lamp-on.svg'} alt='icon' />
                </div>

                <h3 className='titles my-3'>المحتوى</h3>

                {data.contents.map((text) => (
                  <li key={text}>
                    <div className='innerinfo d-flex gap-3 align-items-center'>
                      <Image width={20} height={20} loading='lazy' src={'/img/ProjectsDetails/elements.svg'} alt='Check_Icone' id='Check_Icone' />
                      <h4>{text}</h4>
                    </div>
                  </li>
                ))}
              </div>
              <div className='Box col-6 col-sm-6 col-md-3'>
                <div className='icon'>
                  <Image width={24} height={24} loading='lazy' src={'/img/ProjectsDetails/lamp-on.svg'} alt='icon' />
                </div>

                <h3 className='titles my-3'>الإستراتيجية</h3>

                {data.strategies.map((text, idx) => (
                  <li key={text+idx}>
                    <div className='innerinfo d-flex gap-3 align-items-center'>
                      <Image width={20} height={20} loading='lazy' src={'/img/ProjectsDetails/elements.svg'} alt='Check_Icone' id='Check_Icone' />
                      <h4>{text}</h4>
                    </div>
                  </li>
                ))}
              </div>
              <div className='Box col-6 col-sm-6 col-md-3'>
                <div className='icon'>
                  <Image width={24} height={24} loading='lazy' src={'/img/ProjectsDetails/story.svg'} alt='icon' />
                </div>

                <h3 className='titles my-3'>التكنولوجيا</h3>

                {data.technologies.map((text) => (
                  <li key={text}>
                    <div className='innerinfo d-flex gap-3 align-items-center'>
                      <Image width={20} height={20} loading='lazy' src={'/img/ProjectsDetails/elements.svg'} alt='Check_Icone' id='Check_Icone' />
                      <h4>{text}</h4>
                    </div>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
