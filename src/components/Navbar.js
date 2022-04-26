/** @format */

import React, { useState } from "react";
import logo from "../images/logo.svg";
import menu from "../images/icon-menu.svg";
import {
  FaChevronDown,
  FaCalendar,
  FaBell,
  FaClock,
  FaCalendarWeek,
  FaChevronUp,
} from "react-icons/fa";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubFeatures, setOpenSubFeatures] = useState(false);
  const [openSubCompany, setOpenSubCompany] = useState(false);

  const menuBtn = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className='flex justify-between md:px-6 md:py-8  w-full  top-0 left-0'>
      <nav className='flex justify-between items-center w-full font-e-regular'>
        <div className='flex '>
          <img
            src={logo}
            alt='logo'
            className='sm:mt-8 md:mt-0 lg:mt-0 sm:ml-4'
          />
          <ul className=' lg:flex md:hidden sm:hidden'>
            <li className='ml-10 relative'>
              <span
                className='flex items-center text-gray-500 hover:text-black hover:cursor-pointer'
                onClick={() => {
                  setOpenSubFeatures(!openSubFeatures);
                  setOpenSubCompany(false);
                }}>
                Features
                {openSubFeatures ? (
                  <FaChevronUp className='ml-2' />
                ) : (
                  <FaChevronDown className='ml-2' />
                )}
              </span>
              <span
                className={` flex-col absolute p-4  rounded-lg shadow-lg shadow-gray-600 bg-white text-gray-500 text-[14px] ${
                  openSubFeatures ? "flex" : "hidden"
                }`}>
                <a href='#todo' className='flex mt-2'>
                  <FaCalendar className='mr-2 text-blue-900' />
                  Todo List
                </a>
                <a href='#calender' className='flex mt-2'>
                  <FaCalendarWeek className='mr-2 text-blue-400' />
                  Calendar
                </a>
                <a href='#reminder' className='flex mt-2'>
                  <FaBell className='mr-2 text-orange-400' />
                  Reminder
                </a>
                <a href='#planning' className='flex mt-2'>
                  <FaClock className='mr-2 text-purple-800' />
                  Planning
                </a>
              </span>
            </li>
            <li className='ml-8 relative'>
              <span
                className='flex items-center text-gray-500 hover:text-black hover:cursor-pointer'
                onClick={() => {
                  setOpenSubCompany(!openSubCompany);
                  setOpenSubFeatures(false);
                }}>
                Company
                {openSubCompany ? (
                  <FaChevronUp className='ml-2' />
                ) : (
                  <FaChevronDown className='ml-2' />
                )}
              </span>
              <span
                className={`flex-col absolute p-4 rounded-lg bg-white shadow-lg shadow-gray-500 ${
                  openSubCompany ? "flex" : "hidden"
                }`}>
                <a href='#history' className='text-gray-500 mt-2 text-[14px]'>
                  History
                </a>
                <a href='#ourteam' className='text-gray-500 mt-2 text-[14px]'>
                  Our Team
                </a>
                <a href='#blog' className='text-gray-500 mt-2 text-[14px]'>
                  Blog
                </a>
              </span>
            </li>
            <li className='ml-8 text-gray-500 hover:text-black hover:cursor-pointer'>
              Careers
            </li>
            <li className='ml-8 text-gray-500 hover:text-black hover:cursor-pointer'>
              About
            </li>
          </ul>
        </div>
        <form action='' className='sm:hidden lg:flex md:hidden'>
          <button className='py-2 px-5 text-gray-500 hover:text-black'>
            Login
          </button>
          <button className='py-2 px-5 border-2 border-gray-400 hover:border-black transition-color duration-300 rounded-xl text-gray-500 hover:text-black'>
            Register
          </button>
        </form>
      </nav>
      <img
        src={menu}
        alt='menu-bar'
        className='absolute top-[2rem] right-[2rem] hover:cursor-pointer hover:scale-[1.1] duration-500  md:block lg:hidden w-[30px] h-[20px]'
        onClick={menuBtn}
      />
      {openMenu && <Sidebar menuBtn={menuBtn} />}
    </div>
  );
};

export default Navbar;
