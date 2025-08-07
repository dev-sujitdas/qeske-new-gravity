import React, {useRef, useEffect, useState} from "react";
import Button from "./buttons/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import heroVideo from "/Videos/qeske video.mp4";
import { FaDiceD20 } from "react-icons/fa6";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { ImSpoonKnife } from "react-icons/im";

const Hero = () => {
    const [isSmall, setIsSmall] = useState(false);
    const [isMedium, setIsMedium] = useState(false);
    const [isLarge, setIsLarge] = useState(false);

  const heroContent = [
    {
      icon: <FaDiceD20 />,
      title: "Textile Innovation Space",
      para: (
        <>
          A creative lab where textiles meet technology
          <br />— shaping the future of fabric and design.
        </>
      ),
    },
    {
      icon: <HiWrenchScrewdriver />,
      title: "The Makerspace at Qeske",
      para: (
        <>
          A collaborative space equipped for building,
          <br />
          prototyping, and bringing bold ideas to life.
        </>
      ),
    },
    {
      icon: <ImSpoonKnife />,
      title: "Community Canteen Space",
      para: (
        <>
          More than meals — a warm place to connect,
          <br />
          share, and spark new conversations.
        </>
      ),
    },
  ];

  useGSAP(() => {
    const ctx = gsap.context(() => { 
      
      gsap.from("#hero-title h1", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });
    }); 

    return () => ctx.revert();
  }, []);

     useEffect(() => {
        const handleResize = () => {
          const width = window.innerWidth;
          setIsSmall(width <= 768);
          setIsMedium(width >= 768);
          setIsLarge(width >= 1536);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
      const getCircleSize = () => {
        if (isLarge) return "2.5rem";
        if (isMedium) return "2.5rem";        
        return "2.5rem";
      };
    
      const getTitleSize = ()=>{
        if(isLarge) return "1.125rem";
        if (isMedium) return "1.1rem";        
        return "1.1rem";
      };

      const getButtonWidth = ()=>{
        if(isSmall) return "w-68"
        return "w-48"
      };

  return (
    <section id="hero" className="w-full h-screen relative">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        src={heroVideo}
      ></video>
      <div className="w-full h-full absolute top-0 left-0 p-7 flex flex-col justify-between bg-[#0000007c] backdrop-blur-xs">
        <div  id="hero-title" className="w-full h-fit mt-20 lg:mt-20 2xl:mt-24 ">
          <div className="lexend-deca-regular text-6xl lg:text-7xl 2xl:text-8xl text-[#f1f1f1] xl:h-[5rem] 2xl:h-[7rem] overflow-hidden tracking-tighter">
            <h1>Workspace.</h1>
          </div>
          <div className="lexend-deca-regular text-6xl lg:text-7xl 2xl:text-8xl text-[#f1f1f1] xl:h-[5rem] 2xl:h-[7rem] flex gap-5  overflow-hidden tracking-tighter">
            <h1>Designed To Inspire</h1>
          </div>
        </div>
        <div className="w-full h-fit flex justify-between ">
          <div className="w-1/2 hidden lg:block">
            {heroContent.map((item, index) => (
              <div key={index} className="flex gap-5 items-center xl:mt-3 2xl:mt-5">
                <h2 className="xl:text-4xl 2xl:text-5xl text-white">{item.icon}</h2>
                <div className="">
                  <h2 className="xl:text-lg 2xl:text-xl text-white lexend-deca-semibold ">
                    {item.title}
                  </h2>
                  <p className="lexend-deca-regular text-zinc-300 xl:text-sm 2xl:text-base">
                    {item.para}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:w-1/2 w-full flex flex-col justify-end gap-5">
            <h2 className="lexend-deca-regular text-[#f1f1f1] flex flex-col text-3xl xl:text-4xl 2xl:text-6xl tracking-tighter">
              <span>You bring the vision</span>
              <span>— Qeske create the space.</span>
            </h2>
            <Button
            width={getButtonWidth()}
            title="Get in touch"
            titleSize={getTitleSize()}
            text="text-black"
            bodyColor="bg-black"
            bodyText="text-white"
            circleColor="bg-[#f1f1f1]"
            circleSize={getCircleSize()}         
            href="mailto:community@qeskemaastricht.nl"
          /> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
