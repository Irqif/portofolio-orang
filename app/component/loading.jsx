"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image"
import anime from "animejs"
import thub from "../assets/Logo/thub.png"
import loading from '../assets/Spinner.svg'

const Loading = ({ finishLoading }) => {
    const [mounted, isMounted] = useState(false);

    const animate= () => {
        const loader = anime.timeline({
            complete: () => finishLoading()
        })

        loader.add({
            targets: '#logo',
            delay: 0,
            scale: 1,
            easing: "easeInOutExpo",
        })
        .add({
            targets: '#logo',
            delay: 0,
            scale: 1.25,
            easing: "easeInOutExpo",
        })
    }

    useEffect(() => {
        const timeout = setTimeout(() => isMounted(true), 5)
        animate()
        return () => clearTimeout(timeout)
    },[]) 


    return ( 
        <div className="flex flex-col h-screen items-center justify-center" isMounted={isMounted}>
            <Image src={loading} alt=""></Image>
            {/* <h1 className="text-white">Loading ...</h1> */}
        </div>
     );
}
 
export default Loading;