import React, { useRef, useEffect, useState } from "react";
import contactImage from "/Images/group-graphic.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "./buttons/Button";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [isMedium, setIsMedium] = useState(false);
  const [isLarge, setIsLarge] = useState(false);
  const scrollRef = useRef();
  const contactRef = useRef();
  const titleRef = useRef();

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
    if (isMedium) return "2rem";
    return "1.8rem";
  };

  const getTitleSize = ()=>{
    if(isLarge) return "1.125rem";
    if (isMedium) return "1rem";
    return "1rem";
  }


  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current.querySelectorAll("h2 span"), {
        scrollTrigger: {
          trigger: "#contact",
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
        trigger: contactRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        scroller: document.body,
      },
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      ref={contactRef}
      className="w-full h-auto xl:h-screen bg-[#ece8e8] flex md:flex-row flex-col "
    >
      <div className="w-full h-[22rem] md:h-[32rem] lg:w-1/2 lg:h-[35rem] xl:h-full relative overflow-hidden">
        <div ref={scrollRef} className="absolute inset-0">
          <img
            src={contactImage}
            className="w-full h-full object-cover object-bottom scale-125"
            alt="Workspace"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 p-7">
        <div ref={titleRef} id="contact-title" className="">
          <h2 className="text-black text-2xl h-[2rem] md:text-3xl md:h-[2.5rem] xl:text-5xl xl:h-[3.5rem] 2xl:text-7xl 2xl:h-[5rem] overflow-hidden lexend-deca-regular tracking-tighter">
            <span>Let's</span> <span>Build</span>
          </h2>
          <h2 className="text-black text-2xl h-[2rem] md:text-3xl md:h-[2.5rem] xl:text-5xl xl:h-[3.5rem] 2xl:text-7xl 2xl:h-[5rem] overflow-hidden lexend-deca-regular tracking-tighter">
            <span>Something</span> <span>Together</span>
          </h2>
        </div>
        <div>
          <h3 className="mt-2 lg:mt-4 text-sm md:text-base 2xl:text-lg lexend-deca-regular">
            Have a question, idea, or opportunity? <br />
            We’d love to hear from you.
          </h3>
        </div>

        <div className="flex flex-col justify-center items-center mt-5 md:mt-10 xl:mt-20">
          <div className="w-full lg:w-[60%]">
            <form action="" className="flex flex-col w-full gap-3 lg:gap-5 mb-5">
              <input
                className="px-3 py-2 bg-white rounded-lg md:text-base 2xl:text-xl"
                type="text"
                placeholder="Enter your name"
              />
              <input
                className="px-3 py-2 bg-white rounded-lg  md:text-base 2xl:text-xl"
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
              />
              <input
                className="px-3 py-2 bg-white rounded-lg  md:text-base 2xl:text-xl"
                type="number"
                name=""
                id=""
                placeholder="Enter your phone number"
              />
              <textarea
                className="px-3 py-2 bg-white rounded-lg  md:text-base 2xl:text-xl"
                name=""
                id=""
                placeholder="Enter your megssage"
              ></textarea>
            </form>
            <Button
              width="w-48"
              title="Submit"
              titleSize={getTitleSize()}
              text="text-black"
              bodyColor="bg-black"
              bodyText="text-white"
              circleColor="bg-[#f1f1f1]"
              circleSize={getCircleSize()}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
