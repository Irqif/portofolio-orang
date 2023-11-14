import ProgressBar from "@ramonak/react-progress-bar";
import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const Skills = () => {
    useEffect(() => {
        AOS.init();
      }, [])

    return ( 
        <section id="skill">
            <div className="flex flex-col items-center my-10">
                <div>
                    <h3 className="about md:text-[41px] text-4xl font-bold font-lexend relative top-[4rem] md:top-[5.5rem] md:mx-0 mx-2 md:ml-4" data-aos="fade-right" data-aos-duration="600">SKILLS</h3>
                    <h1 className="font-lexend text-8xl md:text-9xl text-warna-tulisan font-bold" data-aos="fade-left" data-aos-duration="600">MY</h1>
                </div>
                <div className="flex flex-col md:flex-row md:gap-0 gap-10 justify-evenly w-full items-center">
                    <div className="flex flex-col gap-5" data-aos="fade-right" data-aos-duration="600">
                        <div className="w-[272px]">
                            <h1 className="font-bold text-[17px] text-biru-terang my-1">Affinity designer</h1>
                            <ProgressBar borderRadius="2px" completed={70} animateOnRender={true} bgColor="#38D8FB"/>
                        </div>
                        <div className="w-[272px]">
                            <h1 className="font-bold text-[17px] text-biru-terang my-1">Figma</h1>
                            <ProgressBar borderRadius="2px" completed={65} animateOnRender={true} bgColor="#38D8FB"/>
                        </div>
                        <div className="w-[272px]">
                            <h1 className="font-bold text-[17px] text-biru-terang my-1">After Effect</h1>
                            <ProgressBar borderRadius="2px" completed={20} animateOnRender={true} bgColor="#38D8FB"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5" data-aos="fade-left" data-aos-duration="600">
                        <div className="w-[272px]">
                            <h1 className="font-bold text-[17px] text-biru-terang my-1">Blender</h1>
                            <ProgressBar borderRadius="2px" completed={50} animateOnRender={true} bgColor="#38D8FB"/>
                        </div>
                        <div className="w-[272px]">
                            <h1 className="font-bold text-[17px] text-biru-terang my-1">Networking</h1>
                            <ProgressBar borderRadius="2px" completed={47} animateOnRender={true} bgColor="#38D8FB"/>
                        </div>
                        <div className="w-[272px]">
                            <h1 className="font-bold text-[17px] text-biru-terang my-1">HTML</h1>
                            <ProgressBar borderRadius="2px" completed={30} animateOnRender={true} bgColor="#38D8FB"/>
                        </div>
                    </div>
                </div>
                <h1 className="text-3xl font-semibold text-white mt-[59px]">PROGESS!</h1>
            </div>
        </section>
     );
}
 
export default Skills;