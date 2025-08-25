import React, { useEffect, useRef } from 'react'
import { FaChalkboardTeacher, FaLaptopCode, FaShieldAlt, FaUsersCog } from "react-icons/fa";
import { BiLineChart } from "react-icons/bi";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import gsap from "gsap";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Service = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
      gsap.from(".service-title", {
        opacity: 0,
        y: -30,
        duration: 1,
        delay: 0.3,
        ease: "back.out(1.7)"
      });
      gsap.from(".service-underline", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1,
        delay: 0.6,
        ease: "power2.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: <FaChalkboardTeacher size={50} className="text-[#CF1F1F] group-hover:text-white transition-colors duration-300" />,
      title: "Learning Management Systems (LMS)",
      description: "I design and develop scalable LMS platforms for schools and institutions, enabling online learning, course management, assignments, grading, and student progress tracking."
    },
    {
      icon: <FaLaptopCode size={50} className="text-[#CF1F1F] group-hover:text-white transition-colors duration-300" />,
      title: "Custom School Management Software",
      description: "From attendance tracking to timetable automation, I build custom school management systems that streamline administration and enhance productivity for educators and administrators."
    },
    {
      icon: <FaUsersCog size={50} className="text-[#CF1F1F] group-hover:text-white transition-colors duration-300" />,
      title: "Student & Staff Portals",
      description: "I create user-friendly portals where students, parents, and teachers can seamlessly connect—sharing assignments, announcements, reports, and communication all in one platform."
    },
    {
      icon: <BiLineChart size={50} className="text-[#CF1F1F] group-hover:text-white transition-colors duration-300" />,
      title: "Analytics & Reporting",
      description: "Schools need insights. I integrate advanced analytics dashboards that provide real-time reports on student performance, teacher efficiency, and school operations."
    },
    {
      icon: <FaShieldAlt size={50} className="text-[#CF1F1F] group-hover:text-white transition-colors duration-300" />,
      title: "Security & Cloud Integration",
      description: "With my expertise in cloud and security, I implement secure, scalable systems that ensure data privacy and seamless integration with modern cloud technologies."
    }
  ];

  return (
    <div ref={sectionRef} id='Service' className='py-16 px-4 md:px-10 bg-[#0F0F0F] overflow-hidden'>
      <div className='flex flex-col items-center mb-12'>
        <h1 className='service-title font-bold text-3xl md:text-5xl text-[#E9E9E9] mb-2'>What I Offer</h1>
        <div className='service-underline w-[15vw] max-sm:w-[20vw] h-1 bg-[#CF1F1F] rounded-full'></div>
      </div>

      <div className='max-w-6xl mx-auto'>
        <Swiper
         modules={[Navigation, Pagination, Autoplay]}
         spaceBetween={30}
         slidesPerView={1}
         autoplay={{ delay: 5000, disableOnInteraction: false }}
         breakpoints={{
           640: { slidesPerView: 1 },
           768: { slidesPerView: 2 },
           1024: { slidesPerView: 3 }, 
         }}
          className='pb-12'
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className='service-card group h-full bg-[#1A1A1A] rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-black hover:shadow-lg hover:shadow-[#CF1F1F]/20 hover:-translate-y-2'>
                <div className='mb-4'>{service.icon}</div>
                <h2 className='font-mono text-2xl md:text-3xl text-[#E9E9E9] mb-4'>{service.title}</h2>
                <p className='font-mono text-sm text-[#E9E9E9] opacity-75'>{service.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Service;
