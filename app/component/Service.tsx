import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"
import icon5 from "../assets/icon5.png"
import icon6 from "../assets/icon6.png"
import Image from "next/image";


const Service = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return ( 
        <section id="services">
            <div className="flex flex-col items-center my-10">
                <div className="text-center">
                    <h3 className="about md:text-[41px] text-4xl font-bold font-lexend relative top-[4rem] md:top-[5.5rem] md:mx-2 mx-2 md:mr-5" data-aos="fade-left">SERVICES</h3>
                    <h1 className="font-lexend text-8xl md:text-9xl text-warna-tulisan font-bold" data-aos="fade-right" data-aos-duration="500">MY</h1>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-[80px] my-[137px] md:text-left text-center">
                    <div className="flex flex-col gap-2 items-center" data-aos="fade-down-right">
                        <picture>
                            <Image src={icon1} alt="" className="w-[52px]"/>
                        </picture>
                        <h1 className="text-white font-bold text-xl">Graphic Design</h1>
                        <p className="text-white text-sm">Semua tentang graphic design seperti <br /> desain poster atau baju dan lain lain </p>
                    </div>
                    <div className="flex flex-col gap-2 items-center" data-aos="fade-down">
                        <picture>
                            <Image src={icon2} alt="" className="w-[52px]"/>
                        </picture>
                        <h1 className="text-white font-bold text-xl">Vidio Editing</h1>
                        <p className="text-white text-sm">Seperti logo animasi  atau text <br /> animation</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center" data-aos="fade-down-left">
                        <picture>
                            <Image src={icon3} alt="" className="w-[52px]"/>
                        </picture>
                        <h1 className="text-white font-bold text-xl">3D</h1>
                        <p className="text-white text-sm">CHRACTER</p>
                    </div>
                    {/*  */}
                    <div className="flex flex-col gap-2 items-center" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                        <picture>
                            <Image src={icon4} alt="" className="w-[52px]"/>
                        </picture>
                        <h1 className="text-white font-bold text-xl">Typography</h1>
                        <p className="text-white text-sm">Membuat foto mu menjadi lebih menarik <br />untuk di posting di instagram mu</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                        <picture>
                            <Image src={icon5} alt="" className="w-[52px]"/>
                        </picture>
                        <h1 className="text-white font-bold text-xl">Web Design</h1>
                        <p className="text-white text-sm">Desain website mu menjadi lebih <br /> enak untuk di lihat</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                        <picture>
                            <Image src={icon6} alt="" className="w-[52px]"/>
                        </picture>
                        <h1 className="text-white font-bold text-xl">Design APP</h1>
                        <p className="text-white text-sm">Desain aplikasi </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;