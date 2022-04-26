/** @format */

import React from "react";

const Text = ({ children }) => {
  return (
    <div className='font-e-medium  text-gray-400 sm:max-w-[350px] md:w-[444px] lg:max-w-[400px] sm:text-base md:text-base lg:text-xl mx-auto sm:my-4  md:ml-0 md:text-left lg:text-justify sm:text-center'>
      {children}
    </div>
  );
};

export default Text;
