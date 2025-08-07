import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FiArrowUpRight } from "react-icons/fi";

const Button = ({
  width,
  title,
  titleSize,
  textColor,
  bodyColor,
  circleColor,
  bodyText,
  circleText,
  circleSize,
  onClick,
  index,
  href
}) => {
  const icon1Ref = useRef(null);
  const icon2Ref = useRef(null);

  useGSAP(() => {
    
    gsap.set(icon1Ref.current, { x: 0, y: 0, opacity: 1 });
    gsap.set(icon2Ref.current, { x: -20, y: 20, opacity: 0 });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(icon1Ref.current, {
      x: 20,
      y: -20,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(icon2Ref.current, {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(icon2Ref.current, {
      x: -20,
      y: 20,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(icon1Ref.current, {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <>
    <a href={href} target="_blank" key={index}>
      <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`p-1 ${bodyColor} rounded-full ${width} flex items-center justify-between cursor-pointer`}      
    >
      <h2 className={`${bodyText} pl-4 font-semibold`} style={{ fontSize: titleSize }}>{title}</h2>

      <div
        className={`${circleColor} circle relative flex justify-center items-center rounded-full ${textColor} overflow-hidden`}
      style={{ height: circleSize, width: circleSize }}>        
        <span
          ref={icon1Ref}
          className={`absolute w-full h-full flex items-center justify-center text-lg ${circleText}`}
        >
          <FiArrowUpRight />
        </span>        
        <span
          ref={icon2Ref}
          className={`absolute w-full h-full flex items-center justify-center text-lg ${circleText}`}
        >
          <FiArrowUpRight />
        </span>
      </div>
    </button>
    </a>
    </>
    
  );
};

export default Button;
