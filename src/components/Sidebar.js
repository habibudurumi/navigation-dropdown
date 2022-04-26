/** @format */

import React, { useState } from "react";
import closeMenu from "../images/icon-close-menu.svg";
import {
  FaChevronDown,
  FaCalendar,
  FaBell,
  FaClock,
  FaCalendarWeek,
  FaChevronUp,
} from "react-icons/fa";

const Sidebar = ({ menuBtn }) => {
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  return (
    <>
      <div className='w-full min-h-full bg-black absolute  right-0 bg-opacity-70 top-0' />
      <div className='absolute right-0 top-0  bg-white min-h-full w-[60%] '>
        <img
          src={closeMenu}
          onClick={menuBtn}
          alt='closeMenu'
          className='absolute top-[2rem] right-[2rem] hover:scale-[1.1] duration-300 hover:cursor-pointer'
        />
        <div className='mt-[4rem] flex flex-col sm:w-[90%] md:w-[50%]   font-e-medium text-gray-500'>
          <li id='features' className='sm:ml-8 md:ml-10 list-none py-4'>
            <a
              href='#features'
              className='flex py-2 items-center '
              onClick={() => {
                setOpenFeatures(!openFeatures);
                setOpenCompany(false);
              }}>
              Features
              <span className='ml-4'>
                {!openFeatures ? <FaChevronDown /> : <FaChevronUp />}
              </span>
            </a>

            <div
              className={` flex-col ml-8 ${openFeatures ? "flex" : "hidden"} `}>
              <a href='#a' className='flex items-center mt-2'>
                <FaCalendar className='text-blue-900' />
                <span className='ml-4'> Todo List</span>
              </a>
              <a href='#a' className='flex items-center mt-2'>
                <FaCalendarWeek className='text-blue-400' />
                <span className='ml-4'> Calender</span>
              </a>
              <a href='#a' className='flex items-center mt-2'>
                <FaBell className='text-orange-400' />
                <span className='ml-4'>Reminder</span>
              </a>
              <a href='#a' className='flex items-center mt-2'>
                <FaClock className='text-purple-800' />
                <span className='ml-4'> Planning</span>
              </a>
            </div>
          </li>

          <li className='sm:ml-8 md:ml-10 list-none' id='company'>
            <p
              className='flex items-center'
              onClick={() => {
                setOpenCompany(!openCompany);
                setOpenFeatures(false);
              }}>
              Company
              <span className='ml-4'>
                {!openCompany ? <FaChevronDown /> : <FaChevronUp />}
              </span>
            </p>
            <div
              className={` flex-col ml-8 ${openCompany ? "flex" : "hidden"} `}>
              <a href='#c' className='pt-2'>
                History
              </a>
              <a href='#c' className='pt-2'>
                Our Team
              </a>
              <a href='#c' className='mt-2'>
                Blogs
              </a>
            </div>
          </li>

          <li className='sm:ml-8 md:ml-10 list-none pt-4'>
            <a href='#3'>Careers</a>
          </li>
          <li className='sm:ml-8 md:ml-10 list-none pt-4'>
            <a href='#3'>About</a>
          </li>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
