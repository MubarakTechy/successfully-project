import React from 'react';
import photo1 from '../image/1.jpg';
import photo4 from '../image/6.jpg';
import photo5 from '../image/3.jpg';
import photo6 from '../image/4.jpg';
import photo2 from '../image/2 (1).jpg';
import photo7 from '../image/bg-img.jpg';



import CircularGallery from '../component/CircularGallery';

const Portfolio = () => {
  const portfolioItems = [
    { image: photo1, text: "TrustPadi", url: "https://www.trustpadi.com/" },
    { image: photo4, text: "Tech Solution Project", url: "https://1691-tech-solution-cg8e.vercel.app/" },
    { image: photo5, text: "Formserver Project", url: "https://form-server-nu.vercel.app/" },
    { image: photo2, text: "🚀 More Projects Incoming...", url: "#" },
    { image: photo6, text: "🚀 More Projects Incoming...", url: "#" },
    { image: photo7, text: "🚀 More Projects Incoming...", url: "#" },
  ];

  return (
    <div id="Portfolio" className="flex flex-col gap-10 items-center bg-black py-16">
      <h1 className="font-mono text-[40px] text-[#CF1F1F]">- Portfolio -</h1>

      {/* Circular Gallery */}
      <div style={{ height: '600px', width: '100%', position: 'relative' }}>
        <CircularGallery
          items={portfolioItems}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.05}
          font="bold 28px monospace"
        />
      </div>

      {/* Project Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[80%] text-center">
        {portfolioItems.map((item, i) => (
          <a
            key={i}
            href={item.url !== "#" ? item.url : undefined}
            target={item.url !== "#" ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded transition ${
              item.url !== "#"
                ? "bg-[#CF1F1F] hover:bg-[#A31919] text-white"
                : "bg-gray-600 text-gray-300 cursor-not-allowed"
            }`}
          >
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
