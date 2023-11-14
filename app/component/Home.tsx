"use client"
import React from 'react';
import gambar  from "../assets/for_home.png"
import elipse from "../assets/Ellipse.png"
import Image from "next/image";
import { useTypewriter, Cursor,  } from 'react-simple-typewriter';
import { TypeAnimation } from 'react-type-animation';
import { useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'


const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return ( 
    <section id='home'>
      <div className='mt-[200px] md:mt-[215px] flex flex-col-reverse items-center justify-center md:flex-row md:justify-between mb-[102px] mx-0 md:mx-[112px]'>
        <div className='md:w-[45rem] w-screen flex flex-col my-32 gap-3 md:ml-0 ml-32 md:my-0' data-aos="fade-right" data-aos-duration="500">
          <h3 className='md:text-[40px] text-2xl text-gray-500 font-bold font-montserrat'>Hi I`M A</h3>
          <div className='flex flex-row'>
            <h1 className='md:text-[75px] text-[35px] text-white font-bold'>
              <TypeAnimation 
              sequence={[
                "Scyber Security",
                1000,
                "Pro Player Epep",
                1000,
                "Desaind Grafis",
                1000,
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
              /> 
            </h1>
            <div className='md:w-[20px] md:h-[19px] w-3 h-3 bg-biru-terang shadow-biru-terang shadow-lg mt-[2rem] md:mt-[80px] mx-4'></div>
          </div>
          <button 
            className='btn-contact bg-biru-terang w-28 text-lg font-bold text-white rounded-sm opacity-75 hover:ease-in-out duration-300 transition-all'>
              Contac Me
          </button>
        </div>
        <div className='md:ml-0 ml-32' data-aos="fade-left" data-aos-duration="500">
          <picture>
            <Image src={gambar} alt='' className='md:w-[400px] w-72 mt-48'/>
            {/* <div className='bulet w-[270px] p-[7rem] md:w-[350px] md:p-[10rem] mr-0 md:mr-5'>.</div> */}
          </picture>
        </div>
      </div>
    </section>
  );
}
 
export default Home;
