import React from 'react'
import { Link, NavLink } from 'react-router'
import logo from "../../assets/logo.png"
import { Github } from 'lucide-react'

export const Header = () => {

const navLinkClass = ({ isActive }) =>
  isActive
    ? "text-indigo-600 font-semibold "
    : "text-gray-600 hover:text-indigo-600 transition";

const links = (
  <div className="md:flex gap-6">
    <li>
      <NavLink to="/" className={navLinkClass}>
        Home
      </NavLink>
    </li>

    <li>
      <NavLink to="/Apps" className={navLinkClass}>
        Apps
      </NavLink>
    </li>

    <li>
      <NavLink to="/Installation" className={navLinkClass}>
        Installation
      </NavLink>
    </li>
  </div>
);


  return (
    <div>

       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
<Link to="/">
    <a className="flex items-center">
      <img className ="w-11 ml-3 mr-3" src={logo} alt="" />
      HERO.IO</a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end mr-4">
  <a
    href="https://github.com/ShahriarDipu"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex items-center gap-2
      px-6 py-2
      rounded-lg
      text-white font-semibold
      bg-gradient-to-r from-indigo-500 to-purple-500
      hover:from-indigo-600 hover:to-purple-600
      transition-all duration-300
      shadow-md
    "
  >
    
    <Github></Github>

    Contribute
  </a>
</div>

</div>





    </div>
  )
}
