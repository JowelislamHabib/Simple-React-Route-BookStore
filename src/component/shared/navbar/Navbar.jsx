import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `px-5 py-2 rounded-lg transition-all duration-300 ${
              isActive 
                ? "bg-primary/10 text-primary font-bold border border-primary/20" 
                : "hover:bg-base-200 font-medium"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/books"}
          className={({ isActive }) =>
            `px-5 py-2 rounded-lg transition-all duration-300 ${
              isActive 
                ? "bg-primary/10 text-primary font-bold border border-primary/20" 
                : "hover:bg-base-200 font-medium"
            }`
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/coming"}
          className={({ isActive }) =>
            `px-5 py-2 rounded-lg transition-all duration-300 ${
              isActive 
                ? "bg-primary/10 text-primary font-bold border border-primary/20" 
                : "hover:bg-base-200 font-medium"
            }`
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 border-b border-base-200">
      <div className="navbar container mx-auto px-4 py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <Link to="/" className="font-bold text-2xl tracking-tight">
            Simple React BookStore
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1 font-medium">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <button className="btn btn-outline btn-md px-6 rounded-lg font-bold">Sign In</button>
          <button className="btn btn-primary btn-md px-6 rounded-lg font-bold">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
