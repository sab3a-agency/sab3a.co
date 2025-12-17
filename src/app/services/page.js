'use client';
import Hero_Service from '../componentes/ServeceComponent/hero_Service';
import LetsDoit from '../componentes/ServeceComponent/LetsDoit';
import Section2 from '../componentes/ServeceComponent/section2';

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
