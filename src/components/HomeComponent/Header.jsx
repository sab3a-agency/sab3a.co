'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();
  const [Active, setActive] = useState('');

  // if path Change will close the navbar
  useEffect(() => {
    closeNavbar();
  }, [pathname]);

  const currentPage = [
    { path: '/', name: 'الرئيسية' },
    { path: '/projects', name: 'أعمالنا' },
    { path: '/packages', name: 'الباقات' },
    // { path: "/team", name: "فريقنا" },
    // { path: "/blog", name: "المدونة" },
    { path: '/#', name: 'ملف الشركة' }
  ];

  useEffect(() => {
    const activePage = currentPage.find((item) => item.path === pathname);
    if (activePage) {
      setActive(activePage.name);
    }

    const handleScroll = () => {
      const HeadBar = document.querySelector('.container');
      if (HeadBar) {
        if (window.pageYOffset >= HeadBar.offsetTop) {
          HeadBar.classList.add('onscroll');
        } else {
          HeadBar.classList.remove('onscroll');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const closeNavbar = () => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      bsCollapse.hide();
    }
  };

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary p-3 d-flex justify-content-center align-items-baseline mt-2  '>
      <div className='container'>
        <Link className='navbar-brand' href='/' onClick={closeNavbar}>
          <Image width={99} height={60} loading='lazy' src='/img/IconSite.svg' alt='شعار وكالة سبعة الرقمية' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse mx-4' id='navbarNav'>
          <ul className='navbar-nav mx-auto d-flex align-items-center flex-wrap gap-5'>
            {currentPage.map((item) => (
              <li className='nav-item' key={item.name}>
                <Link className='nav-link' href={item.path} onClick={closeNavbar}>
                  <span
                    style={{
                      color: Active === item.name ? 'var(--Color-Secondary)' : 'black',
                      fontWeight: Active === item.name ? 'bold' : 'normal',
                      fontSize: Active === item.name ? 'larger' : '1.4rem'
                    }}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div id='btn'>
            <Link href='/contact-us' onClick={closeNavbar}>
              <button className='btn btn-success' type='submit'>
                اتصل بنا
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
