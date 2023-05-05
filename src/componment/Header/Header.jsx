import { FaBars } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

import { useContext, useState } from "react";
import { SiCodechef } from "react-icons/si";
import { AuthContext } from "../AuthProvider/AuthProvider";
// import {TbChefHat} from"react-icons/fa"
function Header() {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-indigo-800 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div className="inline-flex">
          <SiCodechef className="text-yellow-500 text-2xl mt-1 mr-2" />
          <Link to="/" className="text-white text-2xl font-bold">
            Bangladesh Chef
          </Link>
        </div>
        <div className="sm:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
            aria-label="toggle menu"
            onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
      </div>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } sm:flex sm:items-center sm:w-auto`}>
        <div className="px-2 pt-2 pb-4 sm:flex">
          <NavLink
            to="/"
            exact="true"
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2">
            Home
          </NavLink>

          <NavLink
            to="/blogs"
            exact="true"
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2">
            Blog
          </NavLink>
          {user && user.photoURL ? (
            <img
              src={user.photoURL}
              alt="Profile"
              className="h-8 w-8 rounded-full ml-2"
              title={user.displayName || ""}
            />
          ) : (
            <></>
          )}
          {user ? (
            <button
              onClick={logOut}
              className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2">
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              exact="true"
              className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2">
              Login
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;