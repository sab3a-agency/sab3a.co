'use client';
import { formatArabicDate } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Hero({ data }) {
  return (
    <section className='Hero mt-50'>
      <div className='container'>
        <div className='Hero'>
          <div className='headWrapper d-flex flex-column align-items-start justify-content-between'>
            <div className='rigthside d-flex align-items-center gap-4'>
              <Link className='arrow' href={'/projects'}>
                <Image loading='lazy' src='/img/ProjectsDetails/Icon.svg' alt='arrow' width={30} height={30} />
              </Link>
              <h1 className='d-flex flex-column align-items-start text-end'>
                {data.title} | {data.sub_title}
              </h1>
            </div>
            <div className='leftSide d-flex align-items-center gap-4'>
              <span className='date'>{formatArabicDate(data.implemented_date)}</span>
              <span className='dot'></span>
              <small>{data.category}</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
