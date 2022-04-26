/** @format */

import React from "react";

const Sponsors = ({ databiz, audiophile, meet, maker }) => {
  return (
    <div className='flex items-center sm:justify-center md:justify-start sm:my-6 sm:px-6    sm:max-w-full md:px-0'>
      <img className='mr-4 sm:w-[60px] lg:w-[70px]' src={databiz} alt='data' />
      <img
        className='mr-4 sm:w-[50px] lg:w-[60px]'
        src={audiophile}
        alt='audiophile'
      />
      <img
        className='mr-4 sm:w-[60px] lg:w-[70px]'
        src={meet}
        alt='google meet'
      />
      <img className='mr-4 sm:w-[60px] lg:w-[80px]' src={maker} alt='marker' />
    </div>
  );
};

export default Sponsors;
