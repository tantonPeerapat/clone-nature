"use client";
import { navLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 py-2 px-6 sm:px-0 w-full sm:w-[90%] flex justify-between items-center z-10">
      <Image
        src="/Logo.png"
        alt="Logo"
        width={100}
        height={100}
        className="sm:w-20 h-auto"
        loading="eager"
        priority
      />

      <div className="flex items-center gap-x-4">
        <div className="hidden lg:flex items-center space-x-10 text-white font-light">
          {navLinks.map((link, index) => (
            <Link key={link.id} href={link.url}>
              <p
                key={index}
                className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1.5px] after:bg-white after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link.label}
              </p>
            </Link>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-[100px] sm:w-[150px] h-[34px] sm:h-[42px] border border-white hover:border-primary rounded-sm text-white hover:bg-primary font-normal text-sm sm:text-shadow-lg cursor-pointer"
        >
          Call Us
        </motion.button>

        <div className="lg:hidden text-white hover:text-gray-400 cursor-pointer">
          <HiOutlineBars3BottomRight size={24} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
