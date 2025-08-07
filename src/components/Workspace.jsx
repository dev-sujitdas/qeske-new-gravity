import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import icon from "/Images/icon_shape.png";
import ScrollTrigger from "gsap/ScrollTrigger";
import canteen from "/Images/canteen-space.jpg";
import designer_3d from "/Images/designer-using-3d-printer.jpg";
import group_designer from "/Images/group-graphics-designers.jpg";
import portrait_man from "/Images/portrait-man.jpg";
import happy_friends from "/Images/happy-friends.jpg";
import sitting_together from "/Images/sitting-together.jpg";
import woman_designer from "/Images/woman-designer.jpg";
import textile_space from "/Images/textile-space.jpg";
import textile_woman from "/Images/textile-woman.jpg";
import { MdOutlineBusiness } from "react-icons/md";
import { SiEnterprisedb } from "react-icons/si";
import { MdBusinessCenter } from "react-icons/md";
import { FaBuildingUser } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const marqueeData = [
  {
    img: designer_3d,
    num: "01",
    title: "3D Printing",
    subtitle: "Prototype. Print. Repeat.",
    description: (
      <>
        Bring your creative concepts to life with fast, <br /> detailed, and
        precise 3D printing tools.
      </>
    ),
  },
  {
    img: textile_space,
    num: "02",
    title: "Textile Innovation",
    subtitle: "Fabric. Future. Forward.",
    description: (
      <>
        Discover how modern technology and sustainable <br />
        practices are shaping the future of textiles.
      </>
    ),
  },
  {
    img: portrait_man,
    num: "03",
    title: "Entrepreneur",
    subtitle: "Build. Launch. Lead.",
    description: (
      <>
        A collaborative space built to support bold ideas, <br /> growth, and
        visionary entrepreneurship.
      </>
    ),
  },
  {
    img: group_designer,
    num: "04",
    title: "Graphic Designers",
    subtitle: "Visuals. Impact. Identity.",
    description: (
      <>
        Design bold, meaningful visuals that tell stories, <br /> build brands,
        and spark visual engagement.
      </>
    ),
  },
  {
    img: canteen,
    num: "05",
    title: "Canteen Space",
    subtitle: "Connect. Unwind. Collaborate.",
    description: (
      <>
        A relaxed hub where good food, great <br />conversations, and creative
        minds come together."
      </>
    ),
  },
  {
    img: woman_designer,
    num: "06",
    title: "Designer",
    subtitle: "Create. Shape. Inspire.",
    description: (
      <>
        A creative zone where design minds bring <br />concepts to life and
        ideas take shape.
      </>
    ),
  },
  {
    img: sitting_together,
    num: "07",
    title: "Graphic Designer",
    subtitle: "Visuals. Impact. Identity.",
    description: (
      <>
        Design bold, meaningful visuals that tell stories, <br /> build brands,
        and spark visual engagement.
      </>
    ),
  },
  {
    img: textile_woman,
    num: "08",
    title: "Textile",
    subtitle: "Fabric. Future. Forward.",
    description: (
      <>
        Where fabric meets innovation — and friends turn ideas <br /> into
        something tangible together.
      </>
    ),
  },
  {
    img: happy_friends,
    num: "09",
    title: "Friends",
    subtitle: "Weave. Share. Create.",
    description: (
      <>
        A collaborative space where different ideas <br />connect, experiment,
        and grow ideas together.
      </>
    ),
  },
];

const gridItems = [
  {
    icon: <MdOutlineBusiness />,
    title: "Small Medium Enterprise",
    text: "Qeske empowers SMEs with workspace, community, and tools to accelerate sustainable business growth.",
  },
  {
    icon: <MdBusinessCenter />,
    title: "Startups",
    text: "Fuel your startup’s journey at Qeske — collaborative space, mentorship, and resources that matter.",
  },
  {
    icon: <FaBuildingUser />,
    title: "One Person Company",
    text: "Qeske offers flexible workspaces and focus-driven environments perfect for solo business founders or enterpreneurs.",
  },
  {
    icon: <SiEnterprisedb />,
    title: "Enterpreneurs",
    text: "At Qeske, entrepreneurs access dynamic spaces to build, connect, and scale impactful ventures confidently.",
  },
];

const Workspace = () => {

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from("#workspace-title h1 span", {
        scrollTrigger: {
          trigger: "#workspace",
          start: "top 85%",
          end: "top 50%",
        },
        y: 100,
        opacity: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: "power3.out",
      });    
    });
    
    return () => ctx.revert();
  }, []);


  return (
    <section id="workspace" className="w-full ">
      <div className="p-7">
        <div className="w-full flex gap-5 items-center mt-4">
          <h2 className="h-8 w-8">
            <img className="star h-full w-full" src={icon} alt="" />
          </h2>
          <h2 className="w-[22rem] uppercase lexend-deca-medium text-sm leading-5">
            Curious what your next big idea looks like in the right space?
          </h2>
        </div>
        <div id="workspace-title" className=" md:w-[60%] xl:w-full mt-10 xl:mt-20 mb-10 xl:mb-20">
          <h1 className="text-4xl xl:text-8xl 2xl:text-9xl lexend-deca-regular tracking-tighter">
            <span>A</span> <span>Collaborative,</span> <span>Creative</span>{" "}
            <span>Innovation</span> <span>Space</span> <span>—</span>{" "}
            <span>for</span> <span>Makers</span> <span>and</span>{" "}
            <span>Thinkers.</span>
          </h1>
        </div>
      </div>
      <div className="marquee_track flex flex-nowrap whitespace-nowrap will-change-transform xl:mb-20">
        <div className="marquee_list flex whitespace-nowrap gap-5">
          {[...marqueeData, ...marqueeData].map((item, index) => (
            <div
              key={index}
              className={`w-[24rem] h-[32rem] 2xl:w-[32rem] 2xl:h-[42rem] bg-red-400 relative rounded-lg overflow-hidden`}
            >
              <img
                className="h-full w-full object-cover"
                src={item.img}
                alt={item.title}
              />
              <div className="absolute top-0 left-0 h-full w-full bg-[#0000004b] p-3 flex flex-col justify-between">
                <div className="border-b-[1px] border-zinc-200 flex items-center">
                  <div className="flex w-[30%] p-3 border-r-[1px] border-zinc-200 items-center">
                    <h2 className="text-white text-5xl lexend-deca-medium">
                      {item.num}
                    </h2>
                  </div>
                  <div className="flex flex-col w-[70%] p-3">
                    <h2 className="text-white text-lg lexend-deca-regular uppercase">
                      {item.title}
                    </h2>
                    <p className="text-zinc-200 text-base lexend-deca-light">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap px-2">
                  <h3 className="text-zinc-100 text-sm lg:text-base 2xl:text-lg ">{item.description}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>

        <div className="qeske-title p-7 mt-10 xl:mt-20">
          <h2 className="text-3xl md:text-4xl xl:text-6xl 2xl:text-7xl lexend-deca-regular tracking-tight text-black">
            <span>Qeske</span> <span>Networks.</span>
          </h2>
          <h2 className="text-3xl md:text-4xl xl:text-6xl 2xl:text-7xl lexend-deca-regular mt-3 tracking-tighter text-black leading-10">
            <span>35+ Startups,</span><span>150+ Enterpreneurs.</span>
          </h2>
        </div>

        <div className="grid_box mt-10">
          {gridItems.map((item, index) => (
            <div
             key={index} className="item_grid">
              <div className="icon_grid">
                <h2 className="text-5xl xl:text-6xl">
                  {item.icon}
                </h2>
              </div>
              <div className="flexbox_grid mt-10 xl:mt-20">
                <div className="title text-xl 2xl:text-2xl lexend-deca-semibold tracking-tight">{item.title}</div>
                <div className="text-sm 2xl:text-lg">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workspace;
