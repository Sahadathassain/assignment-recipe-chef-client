import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { SiCodechef } from "react-icons/si";
import { AuthContext } from "../AuthProvider/AuthProvider";

function Header() {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinkStyle = ({ isActive }) =>
    `relative block px-3 py-2 text-sm font-semibold transition-colors duration-200
    ${
      isActive
        ? "text-[#C2412D]"
        : "text-[#17201A] hover:text-[#C2412D]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#14532D]/10 bg-[#F5F7F2]/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex items-center gap-2.5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#14532D] transition-transform duration-300 group-hover:scale-105">
              <SiCodechef className="text-xl text-white" />
            </div>

            <div>
              <span className="block text-lg font-bold leading-tight tracking-tight text-[#17201A] sm:text-xl">
                Bangladesh Chef
              </span>
              <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-[#14532D]/70 sm:block">
                Taste • Tradition • Talent
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 sm:flex">
            <NavLink to="/" end className={navLinkStyle}>
              Home
            </NavLink>

            <NavLink to="/blogs" end className={navLinkStyle}>
              Blog
            </NavLink>

            {user ? (
              <div className="ml-3 flex items-center gap-3 border-l border-[#14532D]/15 pl-5">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    title={user.displayName || "Profile"}
                    className="h-9 w-9 rounded-full object-cover ring-2 ring-white shadow-sm"
                  />
                ) : (
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#14532D] text-sm font-bold text-white">
                    {user.displayName?.charAt(0)?.toUpperCase() || "U"}
                  </div>
                )}

                <button
                  onClick={logOut}
                  className="rounded-full border border-[#14532D]/20 px-4 py-2 text-sm font-semibold text-[#14532D] transition-all duration-200 hover:border-[#C2412D] hover:bg-[#C2412D] hover:text-white"
                >
                  Logout
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                end
                className="ml-3 rounded-full bg-[#14532D] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#0f4225] hover:shadow-md"
              >
                Login
              </NavLink>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-[#14532D] transition-colors hover:bg-[#14532D]/10 sm:hidden"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden transition-all duration-300 sm:hidden ${
            isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="rounded-2xl border border-[#14532D]/10 bg-white p-3 shadow-sm">
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={navLinkStyle}
            >
              Home
            </NavLink>

            <NavLink
              to="/blogs"
              end
              onClick={closeMenu}
              className={navLinkStyle}
            >
              Blog
            </NavLink>

            {user ? (
              <div className="mt-2 flex items-center justify-between border-t border-[#14532D]/10 px-3 pt-3">
                <div className="flex items-center gap-3">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="h-9 w-9 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#14532D] text-sm font-bold text-white">
                      {user.displayName?.charAt(0)?.toUpperCase() || "U"}
                    </div>
                  )}

                  <span className="max-w-[150px] truncate text-sm font-semibold text-[#17201A]">
                    {user.displayName || "User"}
                  </span>
                </div>

                <button
                  onClick={() => {
                    logOut();
                    closeMenu();
                  }}
                  className="rounded-full bg-[#C2412D] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#a93425]"
                >
                  Logout
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                end
                onClick={closeMenu}
                className="mt-2 block rounded-xl bg-[#14532D] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#0f4225]"
              >
                Login
              </NavLink>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;