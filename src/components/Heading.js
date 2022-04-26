/** @format */

import React from "react";

const Heading = () => {
  return (
    <>
      <h1 className=' sm:text-[2rem] md:text-[3rem] lg:text-[3.5rem] font-e-bold font-bold '>
        <span className='md:block lg:flex sm:hidden md:mb-[-1rem] sm:mb-0 lg:mb-[-2rem]'>
          Maker
        </span>
        <span className='lg:block md:block sm:hidden'>remote work</span>
        <span className='lg:hidden md:hidden sm:block'>Maker remote work</span>
      </h1>
    </>
  );
};

export default Heading;
