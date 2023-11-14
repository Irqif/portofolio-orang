"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import Home1 from './component/Home';
// import ProgressBar from '@ramonak/react-progress-bar';
import NavBar from './component/NavBar';
import About from './component/About';
import SideBar from './component/SideBar';
import Skills from './component/Skills';
import Project from './component/Project';
import Service from './component/Service';
import Footer from './component/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { motion, useScroll } from "framer-motion";


export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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
    <div className="md:overflow-x-auto overflow-x-hidden scroll-smooth">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className='hidden md:block'>
        <div className={clsx(`top-[50rem] md:top-[50rem] right-5 md:right-10 fixed bg-biru-tua px-4 py-2 rounded-full animate-bounce shadow-xl`, {
          'block' : isScrolled === true,
          'hidden' : isScrolled === false,
        })}>
          <a href="#nav">
            <FontAwesomeIcon icon={faArrowUp} className='about text-biru-terang md:w-5 w-4' size='2x'/>
          </a>
        </div>
      </div>
      <NavBar/> 
      <SideBar/>
      <Home1/>
      <About/>
      <Skills/>
      <Project/>
      <Service/>
      <Footer/>
    </div>
  );
}
