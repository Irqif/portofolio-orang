"use client";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo2.png";
import instagram from "../assets/ig.webp"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import NavbarItems from "./NavbarItems";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import AOS from "aos"
import 'aos/dist/aos.css'

const NavBar = () => {
  const [isToggled, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init();
  }, [])

  const navContainer = {
    visible: {
      x: -160,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3
      }
    },
    hidden: {
      x: 20,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // Jika ada scroll, atur background menjadi hitam
        setIsScrolled(true);
      } else {
        // Jika tidak ada scroll, atur background menjadi transparan
        setIsScrolled(false);
      }
    };

    // Daftarkan event listener ketika komponen dimount
    window.addEventListener("scroll", handleScroll);

    // Hapus event listener ketika komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="nav" className={clsx(`hidden md:flex md:flex-row flex-col items-center md:justify-around md:gap-0 gap-5 md:mt-[48px] mx-20 mt-0`, {
        'hidden' : isScrolled === true
      })}>
          <div className="md:mr-64">
              <a href="#">
                <picture>
                    <Image src={logo} alt="" width={55}/>
                </picture>
              </a>
          </div>
          <div className="">
            <ul className="md:flex flex md:flex-row flex-col gap-7 text-center md:gap-[30px] font-krona font-semibold text-[23px] text-white">
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
          </div>
          <a href="#" className="border-2 rounded-full p-[20px] border-white ml-0 md:ml-80 grayscale hover:grayscale-0 duration-300 hover:ease-in-out transition-all">
            <picture>
              <Image src={instagram} alt="" width={25}/>
            </picture>
          </a>
      </div>
      <div className={clsx(`md:hidden flex flex-row py-5 items-center z-10 fixed justify-between w-full`, {
        'bg-biru-tua ease-out duration-300 transition-colors border-b-2 border-gray-700 rounded-full py-[3px] mt-2 shadow-lg' : isScrolled === true,
        'bg-opacity-0 ease-in duration-300 transition-colors' : isScrolled === false,
      })} >
        <a href="#" className="mx-5">
          <picture>
            <Image src={logo} alt="" className={clsx(`w-[50px]`, {
              'w-[30px]' : isScrolled === true
            })}/>
          </picture>
        </a>
        <div className="mx-5">
          <button className="" onClick={() => setToggle(!isToggled)}>
            <FontAwesomeIcon icon={faBars} size="2x" className={clsx(`text-white`, {
              "hidden" : isToggled === true,
              "block" : isToggled === false,
              'w-7' : isScrolled === true
            })}/>
            <FontAwesomeIcon icon={faXmark} size="2x" className={clsx(`text-white`, {
              "hidden" : isToggled === false,
              "block" : isToggled === true,
              'w-7' : isScrolled === true
            })}/>
          </button>
          <AnimatePresence>
            {isToggled && (
              <motion.div
                className="navbar absolute w-48"
                initial="hidden"
                animate={isToggled ? "visible" : "hidden"}
                exit="hidden"
                variants={navContainer}
              >
                <NavbarItems isToggled={isToggled} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default NavBar;
