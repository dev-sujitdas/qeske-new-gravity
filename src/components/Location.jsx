import React, { useRef, useEffect, useState } from "react";
import Button from "./buttons/Button";
import workspace from "/Images/workspace.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Location = () => {
  const titleRef = useRef();
  const scrollRef = useRef();
  const locationRef = useRef();
  const [isMedium, setIsMedium] = useState(false);
  const [isLarge, setIsLarge] = useState(false);

  const locations = [
    {
      icon: <FaLocationDot />,
      title: "Qeske Maastricht.",
      href: "https://www.qeskemaastricht.nl/",
    },
    {
      icon: <FaLocationDot />,
      title: "Qeske Maastricht Q1.",
      href: "https://qeske.nl/qeske-kerkrade-q1/",
    },
    {
      icon: <FaLocationDot />,
      title: "Qeske Maastricht Q2.",
      href: "https://qeske.nl/qeske-kerkrade-q2/",
    },
  ];

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current.querySelectorAll("h2 span"), {
        scrollTrigger: {
          trigger: "#location",
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
    gsap.to(scrollRef.current, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: locationRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        scroller: document.body,
      },
    });
  }, []);

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
      return "1.8rem";
    };
  
    const getTitleSize = ()=>{
      if(isLarge) return "1.125rem";
      if (isMedium) return "1rem";
      return "1rem";
    }

  return (
    <section
      ref={locationRef}
      id="location"
      className="w-full h-screen bg-black flex xl:flex-row flex-col overflow-hidden relative"
    >
      <div className="xl:w-1/2 w-full xl:h-full h-1/2 relative overflow-hidden">
        <div ref={scrollRef} className="absolute inset-0">
          <img
            src={workspace}
            className="w-full h-full object-cover scale-120"
            alt="Workspace"
          />
        </div>
      </div>

      <div className="xl:w-1/2 w-full xl:h-full h-1/2 flex flex-col justify-between p-7">
        <div ref={titleRef} id="location-title">
          <h2 className="text-white @max-xs:text-3xl text-4xl  md:text-5xl lg:text-7xl 2xl:text-8xl 2xl:h-[6.5rem] overflow-hidden lexend-deca-regular tracking-tighter">
             <span>Anyone.</span>
          </h2>
          <h2 className="text-white @max-xs:text-3xl text-4xl  md:text-5xl lg:text-7xl 2xl:text-8xl 2xl:h-[6.5rem] overflow-hidden lexend-deca-regular tracking-tighter">
             <span>Anywhere.</span>
          </h2>
        </div>

        <div>
          <div className="w-full flex flex-wrap justify-center items-center gap-2">
            {locations.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="md:p-3">
                  <div className="flex gap-1 md:gap-2 items-center">
                    <h2 className="text-white text-base lg:text-xl">{item.icon}</h2>
                    <h2 className="text-zinc-300 text-base lg:text-xl lexend-deca-medium tracking-tighter">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className=" w-full md:w-[80%] mt-5 md:mt-10">
            <h2 className="text-zinc-200 text-lg md:text-xl lg:text-2xl 2xl:text-4xl tracking-tighter lexend-deca-light mb-5">
              Work shouldn’t be limited by access, background, or geography.
              Space to grow should belong to you.
            </h2>
            <Button
              width={isLarge ? "w-70" : "w-64"}
              title="Book a meeting or event"
              titleSize={getTitleSize()}
              bodyColor="bg-white"
              bodyText="text-black"
              circleColor="bg-[#000]"
              circleText="text-white"
              circleSize={getCircleSize()} 
              href="https://www.supersaas.nl/schedule/qeskemaastricht/Qeske_facilities?view=month"
            />           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
