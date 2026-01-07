'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AosWrapper() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');

    // Remove aos-init class from all elements before initializing
    const aosElements = document.querySelectorAll('[data-aos]');
    aosElements.forEach((el) => {
      el.classList.remove('aos-init', 'aos-animate');
    });

    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate'
    });

    AOS.refresh();
  }, []);

  return null;
}
