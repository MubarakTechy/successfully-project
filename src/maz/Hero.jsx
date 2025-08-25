import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Typewriter from 'typewriter-effect';
import { IoLogoHtml5 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";

const Hero = () => {
  const containerRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate container fade in
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out"
      });

      // Animate icons stagger
      gsap.from(iconsRef.current, {
        opacity: 0,
        scale: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.8,
        ease: "back.out(1.7)"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id='Hero' className='mark flex flex-col justify-center items-center p-[15vw]'>
      <div ref={containerRef} className='flex flex-col items-center gap-6 text-center'>
        
        {/* Your Name */}
        <h1 className='font-bold max-sm:text-[35px] text-[50px] text-[#CF1F1F]'>
          Abdulkadir Mubarak
        </h1>

        {/* Typewriter Roles */}
        <h2 className='text-white text-[22px] max-sm:text-[18px] font-mono'>
          <Typewriter
            options={{
              strings: [
                "EdTech Developer",
                "School Management System Specialist",
                "System Architect for Education",
                "Full-stack Engineer"
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </h2>

        {/* Tech Icons */}
        <div className='flex text-center items-center gap-6'>
          {[
            <IoLogoHtml5 size={40} />,
            <RiTailwindCssFill size={40} />,
            <FaReact size={40} />,
            <IoLogoFirebase size={40} />,
            <TbBrandJavascript size={40} />
          ].map((icon, index) => (
            <div
              key={index}
              ref={el => iconsRef.current[index] = el}
              className='text-white hover:text-[#CF1F1F] cursor-pointer transition-colors'
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
