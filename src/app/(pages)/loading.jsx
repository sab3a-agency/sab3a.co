import Image from 'next/image';
import React from 'react';

const LoadingPage = () => {
  return (
    <div className='introScreen'>
      <div className='introWrap'>
        <Image
          src='/img/loading-state.svg'
          className='intrologo d-flex justify-content-center align-items-center position-absolute'
          alt='Sab3a Logo'
          width={200}
          height={147}
        />
      </div>
    </div>
  );
};

export default LoadingPage;
