"use client"
import React from "react";
import { motion } from "framer-motion";

const Navbar = ({ isToggled }) => {

  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const navItem = {
    visible: {
      // y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    hidden: {
      // y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    }
  };

  return (
    <>
      <motion.ul
        className="p-5 ab"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={navList}
      >
          <motion.li className="nav-item" variants={navItem}>
          <ul className="flex flex-col gap-3 text-center font-krona font-semibold text-[20px] md:text-lg text-white">
              <li className="hover:underline transition duration-300 hover:text-hover:ease-in hover:text-biru-terang">
                <a href="#home">Home</a>
              </li>
              <li className="hover:underline transition duration-300 hover:text-hover:ease-in hover:text-biru-terang">
                <a href="#about">About Me</a>
              </li>
              <li className="hover:underline transition duration-300 hover:text-hover:ease-in hover:text-biru-terang">
                <a href="#skill">Skills</a>
              </li>
              <li className="hover:underline transition duration-300 hover:text-hover:ease-in hover:text-biru-terang">
                <a href="#project">Project</a>
              </li>
              <li className="hover:underline transition duration-300 hover:text-hover:ease-in hover:text-biru-terang">
                <a href="#services">Services</a>
              </li>
              {/* <li className="hover:underline transition duration-300 hover:text-hover:ease-in hover:text-biru-terang">
                <a href="#">Contac Me</a>
              </li> */}
            </ul>
          </motion.li>
      </motion.ul>
    </>
  );
};

export default Navbar;
