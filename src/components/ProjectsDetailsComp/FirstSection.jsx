import { normalizeSlashes } from '@/lib/utils';
import Image from 'next/image';

export default function FirstSection({ data }) {
  return (
    <>
      <section className='FirstSection mt-50'>
        <div className='container'>
          <div className='mb-5' dangerouslySetInnerHTML={{ __html: data.description }}></div>
        </div>
        <div className='project-hero' style={{ aspectRatio: '431 / 150' }}>
          <Image fill sizes='100vw' className='cover-img' quality={100} preload src={normalizeSlashes(data.cover_image)} alt='img' />
        </div>
        <div className='infoWrapper d-flex flex-column justify-content-center align-items-center container'>
          <p className='mt-5 text-center text-md-end container' dangerouslySetInnerHTML={{ __html: data.description_below }}></p>
        </div>
      </section>
    </>
  );
}
