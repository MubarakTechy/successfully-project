
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is a School Management System?",
    answer:
      "A School Management System (SMS) is a digital platform that helps schools manage academic, administrative, and communication tasks all in one place. It streamlines operations like student enrollment, attendance tracking, exams, grading, and communication with parents."
  },
  {
    question: "How can your system help schools?",
    answer:
      "Our School Management System automates manual processes, reduces paperwork, and improves efficiency. It gives administrators, teachers, parents, and students a central place to connect and access real-time information."
  },
  {
    question: "Is the platform secure?",
    answer:
      "Yes, security is our top priority. The system uses encrypted databases, role-based access, and regular backups to ensure that student and school data remain protected."
  },
  {
    question: "Can the system be customized for my school?",
    answer:
      "Absolutely! We design flexible modules that can be tailored to your school’s unique needs, whether it’s exam management, e-learning integration, or fee tracking."
  },
  {
    question: "Do you provide training and support?",
    answer:
      "Yes, we provide hands-on training for staff, as well as ongoing technical support. Our goal is to make sure your team feels confident using the platform."
  }
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="FAQ" className="bg-[#F9F9F9] py-16 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-[#CF1F1F] mb-10"
        >
          Frequently Asked Questions
        </motion.h1>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white shadow-md rounded-lg p-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg font-semibold text-[#1E1E1E]">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-180 text-[#CF1F1F]" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 text-gray-600"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
