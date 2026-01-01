import FaqsSection from '@/components/HomeComponent/faqs-section';
import HeroPackages from '@/components/PackagesComponent/heroPackages';
import LetsDoit from '@/components/LetsDoit';
import '@/css/package-style.css';

export const metadata = {
  title: 'الباقات'
};

export default async function Packages() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/homepage`, {
    cache: 'no-store'
  });
  const { data } = await res.json();
  const faqsSection = data.sections.find((section) => section.section_key === 'faq');


  return (
    <>
      <HeroPackages />
      <FaqsSection data={{ faqsSection }} />
      <div className='div d-none d-md-block'>
        <LetsDoit  />
      </div>
    </>
  );
}
