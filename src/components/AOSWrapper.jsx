'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AosWrapper() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');

    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });

    AOS.refreshHard();
  }, []);

  return null;
}
