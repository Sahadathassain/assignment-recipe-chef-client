import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-indigo-800 text-gray-400 py-4 text-center bottom-0 w-full">
      <div className="container mx-auto">
        <p>
          Made with <FaHeart className="inline text-red-500" /> by
          bangladeshichef.com
        </p>
        <p>&copy; 2023 Bangladeshichef.com All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;