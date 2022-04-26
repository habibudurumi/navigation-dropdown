/** @format */

import React from "react";

const Logo = ({ heroImage }) => {
  return (
    <>
      <img
        src={heroImage}
        alt='hero-img'
        className='w-full my-10 sm:block md:hidden lg:hidden'
      />
    </>
  );
};

export default Logo;
