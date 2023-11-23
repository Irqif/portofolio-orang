"use client"
import profile from "../assets/profile.png"
import kotak from "../assets/kotak.png"
import Image from "next/image";
import instagram from "../assets/instagram.png"
import likedin from "../assets/likedin.png"
import discord from "../assets/discord.png"
import { useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'
import foto_kece from "../assets/foto_kece.png"


const About = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return ( 
        <section id="about">
            <div className="w-full bg-biru-tua py-3 mt-36 md:mt-56">
                <div className="flex flex-col items-center my-10">
                    <div>
                        <h3 className="about md:text-[41px] text-4xl font-bold font-lexend relative top-[4rem] md:top-[5.5rem] md:mx-0 mx-2 md:ml-4" data-aos="fade-left" data-aos-duration="500" data-aos-delay="0">ABOUT</h3>
                        <h1 className="font-lexend text-8xl md:text-9xl text-warna-tulisan font-bold" data-aos="fade-right" data-aos-duration="500" data-aos-delay="0">ME</h1>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:ml-0 ml-16 gap-16 mt-16">
                        <div className="w-screen md:w-1/2 ml-14 md:ml-0" data-aos="fade-right" data-aos-duration="600">
                            <picture>
                                <Image src={foto_kece} alt="" className="rounded-md md:w-[360px] w-72"/>
                                {/* <div className="kotak md:w-[330px] w-72 md:h-[450px] h-[350px] mr-20 md:my-0 my-10"></div> */}
                            </picture>
                        </div>
                        <div className="flex flex-col md:w-[35rem] w-full gap-3 ml-10 md:ml-0" data-aos="fade-up" data-aos-duration="500" data-aos-delay="0">
                            <h1 className="text-white text-lg">My name is : <span className="text-biru-terang">ahmad fathir anafi</span></h1>
                            <h1 className="text-white text-[15px] font-[400px] md:mr-0 mr-28 tracking-wide">HI 👋 selamat datang di portofolio saya, saya Ahmad fathir anafi saya tinggal di cikrang selatan , bekasi jawa barat siswa dari pondok pesantren SMK Madinatul Quran, dan saya mengambil jurusan TKJ (Teknik jaringan komputer),  dan cita cita saya ingin menjadi desainer ,graphic desain yaaa mungking ini jauh dari jurusan yang saya ambil , tapi saya menyukai semua tentang desain graphic , atau apapun itu tengtang desain , mungkin teman teman ingin membuat poster atau feed instagram nya menjadi menarik kalian bisa hubungi saya saja atau dm instagram saya , ok cukup sekian perkenalan saya terimakasih </h1>
                            <div className="flex flex-col gap-10 mr-28 md:mr-0">
                                <div className="flex flex-row md:justify-between justify-around text-center w-full">
                                    <div className="">
                                        <h2 className="font-semibold text-lg text-biru-terang">Name</h2>
                                        <p className="font-medium text-[13px] text-white">Ahmad fathir anafi</p>
                                    </div>
                                    <div className="">
                                        <h2 className="font-semibold text-lg text-biru-terang">Gmail</h2>
                                        <p className="font-medium text-[13px] text-white">widihthir12@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex flex-row md:justify-between justify-around text-center w-full">
                                    <div className="mx-8">
                                        <h2 className="font-semibold text-lg text-biru-terang">Asal</h2>
                                        <p className="font-medium text-[13px] text-white">Bekasi</p>
                                    </div>
                                    <div className="mx-5">
                                        <h2 className="font-semibold text-lg text-biru-terang">Phone</h2>
                                        <p className="font-medium text-[13px] text-white">088213589879</p>
                                    </div>
                                </div>
                                <div className="flex flex-row w-full justify-center gap-3">
                                    <a href="https://www.instagram.com/lszzzt_n/" className="border-2 border-biru-terang p-[14px] rounded-md">
                                        <picture >
                                            <Image src={instagram} alt="" width={20} height={20}/>
                                        </picture>
                                    </a>
                                    <a href="https://www.linkedin.com/in/fathir-anafi-101988278/" className="border-2 border-biru-terang p-[14px] rounded-md">
                                        <picture >
                                            <Image src={likedin} alt="" width={20} height={20}/>
                                        </picture>
                                    </a>
                                    <a href="#" className="border-2 border-biru-terang p-[14px] rounded-md">
                                        <picture >
                                            <Image src={discord} alt="" width={20} height={20}/>
                                        </picture>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default About;