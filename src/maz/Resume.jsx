import React, { useEffect, useRef } from "react";
import { GiGraduateCap } from "react-icons/gi";
import { MdDeveloperMode } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".resume-card", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const data = [
    {
      icon: <MdDeveloperMode size={34} className="text-[#CF1F1F]" />,
      title: "EdTech Web Developer",
      period: "2020 - Present",
      subtitle: "Building Learning Platforms",
      description:
        "Designing and scaling EdTech platforms to enhance global online learning. Prioritizing speed, modern UI/UX, and accessibility.",
    },
    {
      icon: <GiGraduateCap size={34} className="text-[#CF1F1F]" />,
      title: "Education",
      period: "2019 - 2023",
      subtitle: "BSc. Computer Science",
      description:
        "Specialized in web technologies and software engineering. Researched interactive systems to improve online education.",
    },
    {
      icon: <MdDeveloperMode size={34} className="text-[#CF1F1F]" />,
      title: "Professional Experience",
      period: "2020 - 2024",
      subtitle: "Full-Stack Development",
      description:
        "Developed LMS systems, real-time classrooms, and gamified training portals. Integrated APIs and modern tech stacks.",
    },
    {
      icon: <GiGraduateCap size={34} className="text-[#CF1F1F]" />,
      title: "Continuous Learning",
      period: "Ongoing",
      subtitle: "Mastering the Craft",
      description:
        "Exploring AI in education, Web3 for verifiable credentials, and advanced UI/UX to push EdTech solutions further.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white py-20 px-6 lg:px-20"
      id="resume"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#CF1F1F]/20 rounded-full blur-[150px]" />
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#CF1F1F] to-[#ff4d4d] drop-shadow-lg">
        Resume
      </h1>

      <div className="relative max-w-6xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#CF1F1F] via-red-700 to-transparent rounded-full hidden md:block" />

        <div className="grid md:grid-cols-2 gap-14">
          {data.map((item, index) => (
            <div
              key={index}
              className={`resume-card relative flex flex-col gap-4 p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-[#CF1F1F]/40 hover:-translate-y-2 transition-all duration-300 ${
                index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
              }`}
              style={{ maxWidth: "500px" }}
            >
              {/* Connector Dot */}
              <span className="absolute top-8 -left-8 md:-left-12 md:right-auto w-6 h-6 rounded-full bg-[#CF1F1F] border-4 border-black hidden md:block" />

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#111] border border-[#CF1F1F]/40 shadow-inner">
                  {item.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-wide">{item.title}</h2>
                  <p className="text-[#CF1F1F] font-medium">{item.period}</p>
                </div>
              </div>

              <h3 className="text-lg font-medium opacity-90">{item.subtitle}</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
