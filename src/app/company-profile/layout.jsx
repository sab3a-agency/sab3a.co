import localFont from 'next/font/local';
import '@/css/globals.css';

const sukarFont = localFont({
  src: '../../../public/fonts/sukar-font.ttf',
  display: 'swap'
});

export const metadata = {
  title: 'ملف الشركة | سبعة',
  description: 'ملف شركة سبعة - وكالة تقنية متخصصة في تقديم حلول رقمية مبتكرة'
};

export default function CompanyProfileLayout({ children }) {
  return (
    <html lang='ar' dir='rtl'>
      <body className={sukarFont.className} style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}

