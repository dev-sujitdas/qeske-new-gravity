import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "./buttons/Button";
import denim from "/Images/logo-denimx-white.jpg";
import folko from "/Images/logo ff.png"
import { FaPlay } from "react-icons/fa6";
import { IoMdPause } from "react-icons/io";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Company = () => {
  const titleRef = useRef();  
  const title2Ref = useRef();
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isPlay, setIsPlay] = useState(null);
  const [isMedium, setIsMedium] = useState(false);
  const [isLarge, setIsLarge] = useState(false);

  const gridItems = [
    {
      href: "https://www.twogirlsonestudio.com/",
      title: "Two Girls One Studio",
      description: "Communal Ceramic and Textile Makerspace",
      logo: "https://static.wixstatic.com/media/d6a4b6_25409b4a2785434281223e964b19969e~mv2.png/v1/crop/x_0,y_707,w_2480,h_758/fill/w_677,h_207,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d6a4b6_25409b4a2785434281223e964b19969e~mv2.png",
    },
    {
      href: "https://sustainably.io/",
      title: "Sustainably",
      description: "Take air quality into your own hands",
      logo: "https://sustainably.io/assets/images/logo/sustainably_logo.jpg",
    },
    {
      href: "https://pro-duck.com/",
      title: "Pro Duck",
      description: "3D Modeling, CNC Routing, Prototyping",
      logo: "https://pro-duck.com/wp-content/uploads/2024/06/Pro-Duck-Logo.png",
    },
    {
      href: "https://www.flokotattoo.com/",
      title: "Folko Tattoo",
      description: "Floko Tattoo is a private tattoo studio.",
      logo: folko,
    },
    {
      href: "https://denimx.nl/",
      title: "Denim X",
      description: "Recycled Denim Products",
      logo: denim,
    },
    {
      href: "https://www.uni-view.nl/",
      title: "Uni View",
      description: "Student's Online Housing Viewing Platform",
      logo: "https://www.uni-view.nl/logo/light/logo_darker.svg",
    },
    {
      href: "https://www.atc-network.com/",
      title: "ATC Network",
      description: "Airspace Aviation Media B2B",
      logo: "https://www.atc-network.com/upload/air-traffic-control-network-logo.svg",
    },
    {
      href: "https://toleria.nl/",
      title: "Toleria",
      description: "We Create Digital Solutions",
      logo: "https://toleria.nl/img/toleria-logo-text-company.png",
    },
  ]; 

   useEffect(() => {
    const videoContainer = containerRef.current;
    const video = videoRef.current;
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const handleMouseMove = (e) => {
      gsap.to(follower, {
        opacity: 1,
      });
      gsap.to(cursor, {
        left: e.clientX - 500,
        top: e.clientY - 200,
      });
    };

    const handleClick = () => {
      if (!isPlay) {
        video.play();
        gsap.to(cursor, { scale: 0.5 });
      } else {
        video.pause();
        gsap.to(cursor, { scale: 1 });
      }
      setIsPlay(!isPlay);
    };

    videoContainer.addEventListener("mouseenter", () => {
      videoContainer.addEventListener("mousemove", handleMouseMove);
    });

    videoContainer.addEventListener("mouseleave", () => {
      gsap.to(follower, { opacity: 1 });
      gsap.to(cursor, { left: "50%", top: "50%" });
      videoContainer.removeEventListener("mousemove", handleMouseMove);
    });

    videoContainer.addEventListener("click", handleClick);

    return () => {
      videoContainer.removeEventListener("click", handleClick);
      videoContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isPlay]);

     useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current.querySelectorAll("h2 span"), {
        scrollTrigger: {
          trigger: "#company",
          start: "top 85%",
          end: "top 50%",
        },
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });  
          
    });

    return () => ctx.revert();
  });

    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        setIsMedium(width >= 768);
        setIsLarge(width >= 1536);
      };
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const getCircleSize = () => {
      if (isLarge) return "2.5rem";
      if (isMedium) return "1.8rem";
      return "1.5rem";
    };
  
    const getTitleSize = ()=>{
      if(isLarge) return "1.125rem";
      if (isMedium) return "0.9rem";
      return "0.9rem";
    }

  return (
    <section id="company" className="w-full">
      <div className="p-7 w-full flex flex-col justify-center items-center mt-10 md:mt-20 lg:mt-25">
        <div ref={titleRef} id="company-title" className="text-center">
          <h2 className="text-black text-4xl h-[3.2rem] md:text-6xl md:h-[4.5rem] lg:text-7xl lg:h-[5rem] xl:text-8xl xl:h-[6.5rem] overflow-hidden  lexend-deca-regular tracking-tighter">
            <span>Your</span> <span>Creative</span> <span>Launch</span>
          </h2>
          <h2 className="text-black text-4xl h-[3.2rem] md:text-6xl md:h-[4.5rem] lg:text-7xl lg:h-[5rem] xl:text-8xl xl:h-[6.5rem] overflow-hidden lexend-deca-regular tracking-tighter">
            <span>Space</span>
          </h2>
        </div>
        <div className="flex justify-center items-center mt-10">
          <h3 className="text-center text-lg md:text-xl">
            Qeske brings creators, entrepreneurs, and innovators under one roof{" "}
            <br />— with flexible workspaces, vibrant communities, and
            opportunities to grow.
          </h3>
        </div>
      </div>
   
      <div className="w-full flex justify-center items-center mt-10 md:mt-20 p-5 md:p-0">
        <div className="video-container h-[18rem] w-full md:h-[25rem] md:w-[80%] lg:h-[30rem] xl:h-[32rem] 2xl:h-[40rem] xl:w-[60%] rounded-xl overflow-hidden relative" ref={containerRef}>
          <video
            ref={videoRef}
            src="https://www.qeskemaastricht.nl/qeske%2dmaastricht%2dpromo.mp4"
            className="object-cover w-full h-full"
          />
          <div
            id="video-cursor"
            ref={cursorRef}
            className="absolute left-0 top-0"
          >
          {isPlay ? <IoMdPause/> :  <FaPlay/>}
          </div>
          <div className="mousefollower" ref={followerRef}></div>
        </div>
      </div>

      <div className="w-full">
        <div ref={title2Ref} className="company-title2 p-7 mt-10 md:mt-20">
          <h2 className="text-3xl  md:text-5xl lg:text-6xl xl:text-7xl lexend-deca-regular tracking-tight">
            <span>Creative</span> <span>Forces</span>
          </h2>
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl lexend-deca-regular mt-3 tracking-tighter leading-5 md:leading-10">
            <span>Within</span> <span>Our</span> <span>Network.</span>
          </h2>
          <div>
            <h3 className="text-lg lexend-deca-regular mt-7 w-[20rem] md:w-[25rem]">
              Participating Companies, Startups, Studios & Visionaries Growing
              at Qeske.
            </h3>
          </div>
        </div>

        <div id="grid_box" className="grid grid-cols-4 grid-rows-2 mt-10">
          {gridItems.map((item, index) => (
            <div key={index} className="item_grid">
              <div className="icon_grid flex justify-center items-center">
                <img className="h-20 lg:h-20 2xl:h-24 w-auto object-contain" src={item.logo} alt="" />
              </div>
              <div className="flexbox_grid mt-10">
                <div className="title text-xl 2xl:text-2xl lexend-deca-semibold tracking-tight">
                  {item.title}
                </div>
                <div className="text-sm 2xl:text-lg">{item.description}</div>
                <div className="mt-2">
                  <Button
                    width="w-42"
                    title="Know more"
                    titleSize={getTitleSize()}
                    bodyColor="bg-black"
                    bodyText="text-white"
                    circleColor="bg-white"
                    circleText="text-black"
                    circleSize={getCircleSize()}
                    href={item.href}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Company;
