'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faInstagram, faLinkedin, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { text } from "@fortawesome/fontawesome-svg-core";
import Link from 'next/link';
import Image from 'next/image';

const footerData = {
  socialLinks: [
    {
      icon: faSquareFacebook,
      link: '#',
      label: 'صفحة سبعة على فيسبوك'
    },
    {
      icon: faInstagram,
      link: '#',
      label: 'صفحة سبعة على إنستغرام'
    },
    {
      icon: faLinkedin,
      link: '#',
      label: 'صفحة سبعة على لينكدإن'
    }
  ],
  quickLinks: [
    { text: 'الرئيسية', path: '/' },
    { text: 'اعمالنا', path: '/projects' },
    { text: 'الباقات', path: '/packages' },
    { text: 'ملف الشركة', path: '/' }
    // { text: "فريقنا", path: "/team" },
    // { text: "المدونة", path: "/blog" },
  ],

  fields: ['تطوير البرمجيات', 'تصميم تجربة المستخدم', 'تطوير التطبيقات والمواقع', 'الفن الرقمي', 'التسويق الرقمي'],
  contacts: [
    {
      icon: '../img/phone.svg',
      title: 'هاتف',
      value: '+968 7849 5068',
      link: 'tel:+96878495068'
    },
    {
      icon: '../img/Massge.svg',
      title: 'البريد الإلكتروني',
      value: 'sab3a.agency@gmail.com',
      link: 'mailto:sab3a.agency@gmail.com'
    }
  ],
  infoItems: [
    { icon: '/img/location.svg', text: 'نعمل عن بعد من عُمان ومصر' },
    {
      icon: '/img/clock.svg',
      text: 'من الأحد إلى الخميس، 9:30 صباحًا - 5:30 مساءً'
    }
  ]
};

export default function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className='line'></div>
        <div className='FooterWrapper container p-5'>
          <div className='containerrWrap'>
            <div className='logo text-justify d-flex'>
              <Link href='/'>
                <Image width={99} height={60} loading='lazy' src='/img/IconSite.svg' alt='شعار وكالة سبعة الرقمية' />
              </Link>
            </div>

            <div className='innerFooterContent d-flex justify-content-between flex-wrap flex-column align-items-start gap-5 '>
              <div className='info'>
                <p>
                  وكالة تقنية متخصصة في تقديم حلول رقمية مبتكرة. نعتمد على الإبداع والتكنولوجيا لتحويل أفكارك إلى واقع ملموس، مع التركيز على الجودة والاحترافية.
                  نعمل عن بعد من عُمان ومصر لخدمة عملائنا في جميع أنحاء العالم.
                </p>
                <div className='IconWithText '>
                  {footerData.infoItems.map((item, index) => (
                    <div key={index} className='part d-flex   align-items-center justify-content-center gap-1'>
                      <img loading='lazy' src={item.icon} alt='' aria-hidden='true' />
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className='d-flex wrap  gap-5'>
                <div className='list'>
                  <h2>المجالات التي نعمل بها</h2>
                  <ul>
                    {footerData.fields.map((field, index) => (
                      <li key={index}>
                        <a href='#'>{field}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='list '>
                  <h2>روابط سريعة</h2>
                  <ul>
                    {footerData.quickLinks.map((page, index) => (
                      <li key={index}>
                        <Link href={page.path}>{page.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='contact'>
                {footerData.contacts.map((contact, index) => (
                  <div key={index} className='part d-flex flex-column justify-content-start align-items-start'>
                    <div className='info'>
                      <img loading='lazy' src={contact.icon} alt={contact.title} />
                      <h2>{contact.title}</h2>
                    </div>
                    <a href={contact.link} dir='ltr'>
                      {contact.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className='sabaShadow'>
              <img src='/img/Sab3a.svg' alt='وكالة سبعة الرقمية' loading='lazy' />
            </div>
            <hr />
            <div className='FooterBottom mt-4 d-flex justify-content-between flex-warp'>
              <p className='Text_copyRight'>
                جميع الحقوق محفوظة&copy; 2025 <span>وكالة سبعة الرقمية</span>
              </p>
              <div className='social '>
                <div className='icons d-flex justify-content-between align-items-center gap-5'>
                  {footerData.socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      aria-label={social.label}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='d-flex align-items-center justify-content-center'
                    >
                      <FontAwesomeIcon icon={social.icon} size='2x' aria-hidden='true' />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
