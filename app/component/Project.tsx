import { useEffect, useState } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'
import profile from "../assets/profile.png"
// image buat Logo
import logo1 from "../assets/Logo/Logo1.png"
import thup from "../assets/Logo/thub.png"
import osis from "../assets/Logo/osis.png"
// image buat typografi
import img1 from "../assets/Typografi/1.png"
import img2 from "../assets/Typografi/2.png"
import img3 from "../assets/Typografi/3.png"
import img4 from "../assets/Typografi/4.png"
import img5 from "../assets/Typografi/5.png"
import img6 from "../assets/Typografi/6.png"
import img7 from "../assets/Typografi/7.png"
// image buat 3D
import for3D_1 from "../assets/3D/1.png"
import for3D_2 from "../assets/3D/2.png"
import for3D_3 from "../assets/3D/3.png"
import for3D_4 from "../assets/3D/4.png"
import for3D_5 from "../assets/3D/5.png"
import for3D_6 from "../assets/3D/6.png"
import for3D_7 from "../assets/3D/7.png"
// image buat Poster
import img_poster from "../assets/Poster/1.png"
import Image from "next/image";
import clsx from 'clsx';


const Project = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    const [activeContent, setActiveContent] = useState('logo');

    const handleClick = (contentId: any) => {
        setActiveContent(contentId);
    }

    return ( 
        <section id="project">
            <div className="w-full bg-biru-tua py-3 mt-36 md:mt-32 h-[60rem] md:h-[50rem] overflow-x-auto">
                <div className="flex flex-col items-center my-10">
                    <div className="text-center">
                        <h3 className="about md:text-[41px] text-4xl font-bold font-lexend relative top-[4rem] md:top-[5.5rem] md:mx-0 mx-2 md:ml-1" data-aos="fade-left" data-aos-duration="500" data-aos-delay="0">PROJECT</h3>
                        <h1 className="font-lexend text-8xl md:text-9xl text-warna-tulisan font-bold" data-aos="fade-right" data-aos-duration="500" data-aos-delay="0">MY</h1>
                    </div>
                    <div>
                        <ul className="flex flex-row my-16 gap-3 md:gap-5 text-center font-krona font-semibold text-lg md:text-[22px] md:text-lg text-white">
                            <li className={clsx(`cursor-pointer transition duration-300 hover:text-hover:ease-in hover:text-biru-terang`, {
                                'text-biru-terang' : activeContent === 'logo'
                            })} onClick={() => handleClick('logo')}>
                                <h1>Logo</h1>
                            </li>
                            <li className={clsx(`cursor-pointer transition duration-300 hover:text-hover:ease-in hover:text-biru-terang`, {
                                'text-biru-terang' : activeContent === 'Typography'
                            })} onClick={() => handleClick('Typography')}>
                                <h1>Typography</h1>
                            </li>
                            <li className={clsx(`cursor-pointer transition duration-300 hover:text-hover:ease-in hover:text-biru-terang`, {
                                'text-biru-terang' : activeContent === '3D'
                            })} onClick={() => handleClick('3D')}>
                                <h1>3D</h1>
                            </li>
                            <li className={clsx(`cursor-pointer transition duration-300 hover:text-hover:ease-in hover:text-biru-terang`, {
                                'text-biru-terang' : activeContent === 'Poster'
                            })} onClick={() => handleClick('Poster')}>
                                <h1>Poster</h1>
                            </li>
                            <li className={clsx(`cursor-pointer transition duration-300 hover:text-hover:ease-in hover:text-biru-terang`, {
                                'text-biru-terang' : activeContent === 'UI/UX'
                            })} onClick={() => handleClick('UI/UX')}>
                                <h1>UI/UX</h1>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div id='logo' className='grid-cols-2 md:grid-cols-3 items-center grid gap-3' style={{ display: activeContent === 'logo' ? 'grid' : 'none' }}>
                            <div className='flex flex-col items-center text-center border-2 border-gray-500 bg-[#212343] md:py-5 py-1 md:px-5 px-3' data-aos="fade-down" data-aos-duration="700" data-aos-delay="200">
                                <picture className=''>
                                    <Image src={logo1} alt='' className='w-[120px] md:w-[125px]'></Image>
                                </picture>
                                <h1 className='text-white font-[lexend] md:text-lg text-md mb-5'>HEX Ploit</h1>
                            </div>
                            <div className='flex flex-col items-center text-center border-2 gap-1 border-gray-500 bg-[#212343] md:py-[37px] py-5' data-aos="fade-down">
                                <picture className='md:mt-6 mt-5'>
                                    <Image src={thup} alt='' className='w-[56px] md:w-[58px]'></Image>
                                </picture>
                                <h1 className='text-white font-[lexend] md:text-lg text-md mt-3'>THUB</h1>
                            </div>
                            <div className='flex flex-col items-center text-center border-2 gap-1 border-gray-500 bg-[#212343] md:py-8 py-3' data-aos="fade-down">
                                <picture className=''>
                                    <Image src={osis} alt='' className='w-[90px] md:w-[98px]'></Image>
                                </picture>
                                <h1 className='text-white font-[lexend] md:text-lg text-md'>OSIS</h1>
                            </div>
                        </div>
                        <div id='Typography' className='flex flex-col gap-3 items-center mx-4 md:mx-0' style={{ display: activeContent === 'Typography' ? 'flex' : 'none' }}>
                            <div className='flex flex-row gap-3'>
                                <picture className=''>
                                    <Image src={img1} alt='' className='w-[165px]'/>
                                </picture>
                                <picture className=''>
                                    <Image src={img2} alt='' className='w-[149px]'/>
                                </picture>
                                <picture className=''>
                                    <Image src={img3} alt='' className='w-[149px]'/>
                                </picture>
                                <picture className=''>
                                    <Image src={img4} alt='' className='w-[147px]'/>
                                </picture>
                            </div>
                            <div className='flex flex-row gap-3'>
                                <picture className=''>
                                    <Image src={img5} alt='' className='w-[159px]'/>
                                </picture>
                                <picture className=''>
                                    <Image src={img6} alt='' className='w-[150px]'/>
                                </picture>
                                <picture className=''>
                                    <Image src={img7} alt='' className='w-[148px]'/>
                                </picture>
                            </div>
                        </div>
                        <div id='3D' className='flex flex-col items-center gap-3' style={{ display: activeContent === '3D' ? 'flex' : 'none' }}>
                            <picture className='md:flex md:flex-row gap-3 md:mx-0 mx-10 grid grid-cols-2'>
                                <Image src={for3D_1} alt='' className='md:w-[154px] md:h-[163px] w-32 h-32'></Image>
                                <Image src={for3D_2} alt='' className='md:w-[291px] md:h-[164px] w-56 h-32'></Image>
                                <Image src={for3D_3} alt='' className='md:w-[162px] w-32'></Image>
                                <Image src={for3D_4} alt='' className='md:w-[200px] w-40'></Image>
                            </picture>
                            <picture className='md:flex md:flex-row gap-3 grid grid-cols-2'>
                                <Image src={for3D_5} alt='' className='md:w-[178px] w-32 mx-10 md:mx-0'></Image>
                                <Image src={for3D_6} alt='' className='md:w-[202px] w-36'></Image>
                                <Image src={for3D_7} alt='' className='md:w-[166px] w-32 mx-10 md:mx-0'></Image>
                            </picture>
                        </div>
                        <div id='Poster' className='flex justify-start gap-3' style={{ display: activeContent === 'Poster' ? 'flex' : 'none' }}>
                            <picture className='flex flex-row gap-3'>
                                <Image src={img_poster} alt='' className='w-[154px]'></Image>
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Project;