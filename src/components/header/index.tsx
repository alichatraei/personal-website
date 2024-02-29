import React from "react";

const Header = () => {
  return (
    <nav className="navbar  justify-between">
      <div className="">
        <a className="text-2xl select-none text-white">A</a>
      </div>
      <div className="lg:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Resume</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:flex hidden">
        <ul className="flex gap-8 text-white 2xl::text-5xl">
          <li className="cursor-pointer">
            <a>Projects</a>
          </li>
          <li className="cursor-pointer">
            <a>Resume</a>
          </li>
          <li className="cursor-pointer">
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
