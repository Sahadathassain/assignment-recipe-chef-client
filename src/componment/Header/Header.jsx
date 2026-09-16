import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { SiCodechef } from "react-icons/si";
import { AuthContext } from "../AuthProvider/AuthProvider";

function Header() {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinkStyle = ({ isActive }) =>
    `relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "text-[#C2412D]"
        : "text-[#17201A]/75 hover:text-[#C2412D]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#14532D]/10 bg-[#F5F7F2]/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">

          {/* =========================
              LOGO
          ========================== */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex items-center gap-2.5"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#14532D] transition-transform duration-200 group-hover:scale-105">
              <SiCodechef className="text-lg text-white" />
            </div>

            <div>
              <span className="block text-base font-bold leading-tight tracking-tight text-[#17201A] sm:text-lg">
                Bangladesh Chef
              </span>

              <span className="hidden text-[9px] font-medium uppercase tracking-[0.18em] text-[#14532D]/65 sm:block">
                Taste • Tradition • Talent
              </span>
            </div>
          </Link>

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}
          <nav className="hidden items-center sm:flex">

            <NavLink
              to="/"
              end
              className={navLinkStyle}
            >
              Home
            </NavLink>

            <NavLink
              to="/blogs"
              className={navLinkStyle}
            >
              Blog
            </NavLink>

            {user ? (
              <div className="ml-4 flex items-center gap-3 border-l border-[#14532D]/10 pl-4">

                {/* Profile */}
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    title={user.displayName || "Profile"}
                    className="h-8 w-8 rounded-full object-cover ring-2 ring-white"
                  />
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#14532D] text-xs font-bold text-white">
                    {user.displayName?.charAt(0)?.toUpperCase() || "U"}
                  </div>
                )}

                {/* Logout */}
                <button
                  type="button"
                  onClick={logOut}
                  className="rounded-full border border-[#14532D]/20 px-4 py-2 text-xs font-semibold text-[#14532D] transition-all duration-200 hover:border-[#C2412D] hover:bg-[#C2412D] hover:text-white"
                >
                  Logout
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className="ml-4 rounded-full bg-[#14532D] px-5 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-[#0f4225] hover:shadow-sm"
              >
                Login
              </NavLink>
            )}
          </nav>

          {/* =========================
              MOBILE BUTTON
          ========================== */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#14532D] transition-colors hover:bg-[#14532D]/10 sm:hidden"
          >
            {isOpen ? (
              <FaTimes className="text-lg" />
            ) : (
              <FaBars className="text-lg" />
            )}
          </button>
        </div>

        {/* =========================
            MOBILE NAVIGATION
        ========================== */}
        <div
          className={`overflow-hidden transition-all duration-300 sm:hidden ${
            isOpen
              ? "max-h-96 pb-4 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="rounded-xl border border-[#14532D]/10 bg-white p-2 shadow-sm">

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
              onClick={closeMenu}
              className={navLinkStyle}
            >
              Blog
            </NavLink>

            {user ? (
              <div className="mt-2 flex items-center justify-between border-t border-[#14532D]/10 px-3 pt-3">

                <div className="flex min-w-0 items-center gap-3">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="h-8 w-8 shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#14532D] text-xs font-bold text-white">
                      {user.displayName?.charAt(0)?.toUpperCase() || "U"}
                    </div>
                  )}

                  <span className="max-w-[150px] truncate text-sm font-semibold text-[#17201A]">
                    {user.displayName || "User"}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    logOut();
                    closeMenu();
                  }}
                  className="rounded-full bg-[#C2412D] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#a93425]"
                >
                  Logout
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                onClick={closeMenu}
                className="mt-2 block rounded-lg bg-[#14532D] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#0f4225]"
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