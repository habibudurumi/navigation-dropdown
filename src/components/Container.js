/** @format */

import React from "react";

const Container = ({ children }) => {
  return (
    <div
      className='sm:text-center md:text-left  flex lg:mx-[8rem] md:mx-[5rem] sm:mx-0 lg:mt-[3rem] md:mt-[4rem] md:justify-evenly items-center 
        lg:justify-evenly
        sm:justify-center'>
      {children}
    </div>
  );
};

export default Container;
