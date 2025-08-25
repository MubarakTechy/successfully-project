
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

// Reusable Progress Bar
const ProgressBar = ({ skill, percentage }) => {
  const barRef = useRef(null)
  const numberRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      barRef.current,
      { width: '0%' },
      { width: `${percentage}%`, duration: 1.8, ease: 'power3.out' }
    )

    gsap.fromTo(
      numberRef.current,
      { innerText: 0 },
      {
        innerText: percentage,
        duration: 1.8,
        snap: { innerText: 1 },
        ease: 'power3.out',
      }
    )
  }, [percentage])

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <span className="text-base font-semibold text-gray-800">{skill}</span>
        <span ref={numberRef} className="text-sm font-bold text-[#CF1F1F]">0%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          ref={barRef}
          className="bg-gradient-to-r from-[#CF1F1F] to-red-600 h-3 rounded-full shadow-md"
        ></div>
      </div>
    </div>
  )
}

const Skills = () => {
  // Updated professional & niche-focused skills
  const skillsData = [
    { skill: "React & Next.js (Frontend for Scalable Systems)", percentage: 92 },
    { skill: "Firebase & Firestore (Authentication & Realtime DB)", percentage: 88 },
    { skill: "UI/UX Design (Tailwind CSS, Responsive EdTech UI)", percentage: 85 },
    { skill: "School Management Systems (Custom EdTech Platforms)", percentage: 90 },
    { skill: "API Integration & Data Visualization", percentage: 80 },
    { skill: "Performance Optimization & Accessibility", percentage: 82 },
  ]

  return (
    <div
      id="Skills"
      className="p-10 max-sm:p-6 flex flex-col gap-8 mx-auto bg-[#F9F9F9] rounded-2xl shadow-lg"
    >
      {/* Section Header */}
      <div className="flex flex-col gap-4 items-center justify-center text-center">
        <h1 className="text-[32px] font-bold text-[#CF1F1F] tracking-wide">
          Professional Skillset
        </h1>
        <p className="w-[60vw] max-lg:w-[80vw] max-sm:w-[95vw] text-gray-700 leading-relaxed">
          I, <span className="font-semibold text-[#CF1F1F]">Abdulkadir Mubarak</span>, 
          specialize in building modern <span className="font-semibold">EdTech platforms</span> 
          such as <strong>School Management Systems</strong>, combining powerful 
          frontend technologies with scalable backend solutions. My skills ensure 
          user-friendly, secure, and performance-driven applications tailored 
          for the education sector.
        </p>
      </div>

      {/* Skills Progress */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mt-6">
        {skillsData.map((item, index) => (
          <ProgressBar key={index} skill={item.skill} percentage={item.percentage} />
        ))}
      </div>
    </div>
  )
}

export default Skills
