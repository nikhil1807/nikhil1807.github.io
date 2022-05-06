import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex text-black justify-between items-center h-24 max-w-[1240] mx-auto px-4 md:px-20">
      <h1 className="p-4 text-lg font-bold">
      <Link to='/'>Nikhil Srivastava</Link>
        </h1>
      <ul className="hidden md:flex">
        <li className="p-4 pl-10 hover:text-[#7ECFE0]">
        <Link to='/'>Home</Link>
          </li>
        <li className="p-4 pl-10 hover:text-[#7ECFE0]">
          <Link to='/about'>About</Link>
          </li>
        <li className="p-4 pl-10 hover:text-[#7ECFE0]">
          <Link to='/about'>Skills</Link>
          </li>
        <li className="p-4 pl-10 hover:text-[#7ECFE0]">
          <Link to='/project'>Project</Link>
          </li>
        <li className="p-4 pl-10 hover:text-[#7ECFE0]">
          <Link to='/contact'>Contact</Link>
          </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-300 bg-[#cee3e7] ease-in-out duration-300"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full p-4 text-lg font-bold m-4">Nikhil Srivastava</h1>
        <ul className="p-4">
          <li className="p-4 border-b border-gray-400">
          <Link to='/'>Home</Link>
            </li>
          <li className="p-4 border-b border-gray-400">
          <Link to='/about'>About</Link>
            </li>
          <li className="p-4 border-b border-gray-400">
          <Link to='/about'>Skills</Link>
            </li>
          <li className="p-4 border-b border-gray-400">
          <Link to='/project'>Project</Link>
            </li>
          <li className="p-4">
          <Link to='/contact'>Contact</Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
