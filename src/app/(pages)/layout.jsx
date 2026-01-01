import localFont from 'next/font/local';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/css/globals.css';

import Footer from '@/components/HomeComponent/Footer';
import Header from '@/components/HomeComponent/Header';
import AosWrapper from '@/components/AOSWrapper';

const sukarFont = localFont({
  src: '../../../public/fonts/sukar-font.ttf'
});

export const viewport = {
  width: 'device-width',
  initialScale: 1
};

export const metadata = {
  title: { template: 'سبعة | %s', default: 'سبعة' },
  description:
    'وكالة تقنية متخصصة في تقديم حلول رقمية مبتكرة. نعتمد على الإبداع والتكنولوجيا لتحويل أفكارك إلى واقع ملموس، مع التركيز على الجودة والاحترافية. نعمل عن بعد من عُمان ومصر وقطاع غزة لخدمة عملائنا في جميع أنحاء العالم.',
  icons: [
    { rel: 'icon', url: '/img/IconSite.svg', sizes: '32x32' },
    { rel: 'icon', url: '/img/IconSite.svg', sizes: '64x64' }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang='ar' dir='rtl' data-scroll-behavior='smooth'>
      <body className={sukarFont.className}>
        <AosWrapper />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
