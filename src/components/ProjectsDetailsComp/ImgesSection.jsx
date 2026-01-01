import { normalizeSlashes } from '@/lib/utils';
import Image from 'next/image';

export default function ImagesSection({ data }) {
  return (
    <section className='project-gallery mt-80'>
      {data.map((src, i) => (
        <div key={i} className='fullwidth-img'>
          <Image src={normalizeSlashes(src)} alt={`Project image ${i + 1}`} fill className='img-cover' sizes='100vw' quality={100} priority={i === 0} />
        </div>
      ))}
    </section>
  );
}
