import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navlinks = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#B968C7",
            background: isActive ? "#B968C7" : "transparent",
            fontWeight: isActive ? "bold" : "normal",
          })}
          onClick={closeDropdown}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/about"}
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#B968C7",
            background: isActive ? "#B968C7" : "transparent",
            fontWeight: isActive ? "bold" : "normal",
          })}
          onClick={closeDropdown}
        >
          About
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/projects"}
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#B968C7",
            background: isActive ? "#B968C7" : "transparent",
            fontWeight: isActive ? "bold" : "normal",
          })}
          onClick={closeDropdown}
        >
          Projects
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/resume"}
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#B968C7",
            background: isActive ? "#B968C7" : "transparent",
            fontWeight: isActive ? "bold" : "normal",
          })}
          onClick={closeDropdown}
        >
          Resume
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="lg:top-0 lg:w-full lg:z-50 lg:fixed backdrop-blur-md">
      <div className="navbar lg:max-w-7xl mx-auto">
        <div className="navbar-start ">
          <div className="dropdown " ref={dropdownRef}>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={toggleDropdown}
            >
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content rounded-box mt-3 w-52 p-2 shadow z-50 bg-white"
              >
                {navlinks}
              </ul>
            )}
          </div>
          <Link
            to={"/"}
            className="btn btn-ghost text-2xl md:text-3xl lg:text-4xl font-bold text-[#B968C7]"
          >
            AMR
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
