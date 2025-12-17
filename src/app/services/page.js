'use client';
import Hero_Service from '../../components/ServeceComponent/hero_Service';
import LetsDoit from '../../components/ServeceComponent/LetsDoit';
import Section2 from '../../components/ServeceComponent/section2';

export default function ServicesPage() {
  const LetsDitedata = {
    btnContent: ' معاملة خاصة ',
    discription: ' ابدأ رحلة لاكتشاف ',
    smallDescription: 'عالم من استراتيجيات التصميم المبتكرة.',
    letsDoit: ' دعنا نصمم غرضك هنا  '
  };
  return (
    <>
      <Hero_Service />
      <Section2 />
      <LetsDoit data={LetsDitedata} />
    </>
  );
}
