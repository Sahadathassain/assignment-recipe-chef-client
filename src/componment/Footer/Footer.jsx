import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-[#14532D]/10 bg-[#14532D] text-white">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          {/* Brand */}
          <div>
            <h2 className="text-lg font-bold tracking-tight">
              Bangladesh<span className="text-[#F5F7F2]">Chef</span>
            </h2>

            <p className="mt-1 text-xs text-white/60">
              Taste • Tradition • Talent
            </p>
          </div>

          {/* Copyright */}
          <div className="text-xs text-white/60">
            <p>
              © 2026 BangladeshChef.com. All rights reserved.
            </p>

            <p className="mt-1">
              Made with{" "}
              <FaHeart
                className="mx-1 inline text-[#C2412D]"
                aria-label="love"
              />
              for food lovers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;