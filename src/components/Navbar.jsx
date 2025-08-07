import React, { useState } from "react";
import Button from "./buttons/Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <nav className="px-7 py-4 w-full absolute top-0 left-0 z-50 backdrop-blur-sm shadow-sm">
      <div className="w-full flex justify-between items-center">
        <h2 className="lexend-deca-semibold text-white text-xl z-50">
          <a href="/">Qeske Maastricht</a>
        </h2>

        {/* Desktop Nav */}
        <div className="hidden lg:flex justify-between items-center gap-40">
          <div className="flex gap-5 text-white font-semibold text-base lexend-deca-regular">
            <a className="hover:text-zinc-300" href="/">
              .Home
            </a>
            <a className="hover:text-zinc-300" href="#workspace">
              .Workspace
            </a>
            <a className="hover:text-zinc-300" href="#location">
              .Location
            </a>
            <a className="hover:text-zinc-300" href="#contact">
              .Contact
            </a>
          </div>

          <Button
            width="w-48"
            title="Get in touch"
            titleSize="1.125rem"
            text="text-black"
            bodyColor="bg-black"
            bodyText="text-white"
            circleColor="bg-[#f1f1f1]"
            circleSize="2.5rem"
            href="mailto:community@qeskemaastricht.nl"
          />
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={handleToggle}
          className="lg:hidden text-white lexend-deca-semibold z-50"
        >
          {toggle ? ".Close" : ".Menu"}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center transition-all duration-300 ease-in-out ${
          toggle ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-6 text-white text-3xl font-semibold text-center">
          <a onClick={handleToggle} href="#home" className="hover:text-zinc-300">
            .Home
          </a>
          <a onClick={handleToggle} href="#workspace" className="hover:text-zinc-300">
            .Workspace
          </a>
          <a onClick={handleToggle} href="#location" className="hover:text-zinc-300">
            .Location
          </a>
          <a onClick={handleToggle} href="#contact" className="hover:text-zinc-300">
            .Contact
          </a>
        </div>

        <div className="mt-10">
          <Button
            width="w-48"
            title="Get in touch"
            titleSize="1.125rem"
            bodyColor="bg-white"
            bodyText="text-black"
            circleColor="bg-[#000]"
            circleText="text-white"
            circleSize="2.5rem"
            href="mailto:community@qeskemaastricht.nl"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
