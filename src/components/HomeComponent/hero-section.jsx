import Image from 'next/image';

export default function HeroSection({ data }) {
  return (
    <div className='container px-5 mt-80 pt-0'>
      <div className='Part1 row w-100 mx-auto' data-aos='fade-up'>
        <div className='wrap d-md-flex justify-content-between align-content-center align-items-center gap-5'>
          <div className='imgWrapper d-flex align-items-center justify-content-start gap-0 w-100 position-relative aos-init' data-aos='fade-up '>
            <Image className='CofiaVector' alt='صورة شخص يرتدي كوفية' src={'/img/SomeOne_kofia.png'} loading='lazy' width={129} height={146} />

            <p className='imgText w-100 text-center text-md-start'>انضم إلينا في رحلة الابتكار والإبداع، حيث نبني معًا شيئًا استثنائيًا يفوق التوقعات.</p>
          </div>

          <div className=' d-flex align-items-center gap-3 w-100  '>
            <div className='col-12 col-md-10'>
              <p className='text-wikala d-flex justify-content-start align-items-start'>{data.heroSection.title}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-2 my-0 position-relative d-flex justify-content-start align-items-center aos-init' data-aos='fade-up'>
        <p className='BigText'>{data.heroSection.subtitle}</p>

        <Image
          src='/img/BoardsPoster.svg'
          width={217}
          height={164}
          className='LargPoster d-none d-md-none d-xl-flex justify-content-center align-items-start  '
          alt='Saba-Image'
        />
      </div>

      <div className='outWrrape d-flex aos-init' data-aos='fade-up'>
        <div className='innerWrappe col-3  my-5 d-flex justify-content-start align-content-start  gap-4 w-100'>
          <div className='text'>
            <p className='textBox spaheal d-flex align-items-center'>{data.heroSection.content}</p>
          </div>
          <div className='TowBoxes d-flex flex-wrap justify-content-center align-items-center gap-5 '>
            {/* box_1 */}
            <div className='box_1 col d-flex justify-content-center'>
              <div className='Box-wrapper d-flex align-items-baseline'>
                <span>{data.statistics[0].value}</span>
                <p className='textBox'>{data.statistics[0]?.title}</p>
              </div>
            </div>

            {/* box_2 */}
            <div className='box_2 col d-flex justify-content-center'>
              <div className='Box-wrapper d-flex align-items-baseline'>
                <span>{data.statistics[1].value}</span>
                <p className='textBox'>{data.statistics[1]?.title}</p>
              </div>
            </div>
          </div>

          {/* box_3 */}
          <div className='box_3 d-flex'>
            <div className='d-flex justify-content-center gap-4'>
              <div className='imgs'>
                <Image width={135} height={61} src='/img/Avatar.svg' alt='Avtar' />
              </div>
              <div className='innerBox'>
                <h3>{data.statistics[2]?.title}</h3>
                <div className='text d-flex align-items-start'>
                  <span className='Star'>
                    <Image loading='lazy' className='h-auto' src='/img/star.svg' alt='Star' width={20} height={20} />
                  </span>

                  <p className='p-1 pt-0 textBox3 fs-4'>{data.statistics[2]?.value}</p>
                </div>
              </div>
            </div>
            <Image
              loading='lazy'
              width={217}
              height={164}
              src='/img/BoardsPoster.svg'
              className='miniposters d-md-flex d-xl-none justify-content-center align-items-center  position-relative'
              style={{ top: '-9rem', width: '18rem', height: '18rem' }}
              alt='Saba-Image'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
