"use client"
import { useEffect, useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { faSearch, faBars, faXmark, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavbarItems from "./NavbarItems";


const SideBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isToggled, setToggle] = useState(false);
  const [isOpen, setOpen] = useState(true);


  const navContainer = {
    visible: {
      x: 0,
      opacity: 1,
      // transition: {
      //   x: { velocity: 100 },
      //   duration: 0.3
      // }
    },
    hidden: {
      x: 10,
      opacity: 0,
      // transition: {
      //   x: { velocity: 100 },
      //   duration: 0.3
      // }
    }
  };
  const Close = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3
      }
    },
    hidden: {
      x: 200,
      // opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3
      }
    }
  };
  const Open = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3
      }
    },
    hidden: {
      x: 500,
      // opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3
      }
    }
  };


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
        <section className="hidden md:flex">
            <div className={clsx(`fixed top-96 right-0 z-40`, {
                'block' : isScrolled === true,
                'hidden' : isScrolled === false,
            })}>
            <div className="flex flex-row">
              <button className="bg-[#4F709C] rounded-l-lg px-3 py-2 h-10 flex items-center" onClick={() => setToggle(!isToggled)}>
                <FontAwesomeIcon icon={faAngleLeft} size="2x" className={clsx(`text-white`, {
                  "hidden" : isToggled === true,
                  "block" : isToggled === false,
                  'w-5' : isScrolled === true
                })}/>
                <FontAwesomeIcon icon={faAngleRight} size="2x" className={clsx(`text-white`, {
                  "hidden" : isToggled === false,
                  "block" : isToggled === true,
                  'w-5' : isScrolled === true
                })}/>
              </button>
              <AnimatePresence>
                {isToggled && (
                  <motion.div
                    className="navbar w-48"
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
        </section>
     );
}
 
export default SideBar;