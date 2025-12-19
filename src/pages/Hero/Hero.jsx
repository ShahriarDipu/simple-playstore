
import bgimage from "../../assets/hero.png";
import React from "react";

export const Hero = () => {
  return (
    <section
      className="w-full bg-cover bg-center pt-20 pb-28 px-4 flex flex-col items-center text-center"
    >
     
      <h1 className="text-4xl md:text-6xl font-extrabold text-black">
        We Build
      </h1>

      <h2 className="text-4xl md:text-6xl font-extrabold text-purple-600 mt-2">
        Productive Apps
      </h2>


      <i className="mt-4 max-w-4xl text-gray-700 text-sm md:text-base">
        At <span className="font-bold">HERO.IO</span>, we craft innovative apps designed
        to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact
      </i>

      <div className="flex gap-4 mt-6 flex-wrap justify-center">
   
        <a
          href="https://play.google.com"
          className="flex items-center gap-2 bg-white shadow-lg rounded-xl px-5 py-3 hover:scale-[1.05] transition"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/300/300218.png"
            alt="Google Play"
            className="w-6 h-6"
          />
          <span className="font-semibold text-gray-800 text-sm">
            Google Play
          </span>
        </a>

        <a
          href="https://www.apple.com/ca/app-store/"
          className="flex items-center gap-2 bg-white shadow-lg rounded-xl px-5 py-3 hover:scale-[1.05] transition"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="App Store"
            className="w-6 h-6"
          />
          <span className="font-semibold text-gray-800 text-sm">
            App Store
          </span>
        </a>
      </div>
   <div className="mt-16 flex justify-center">
          <img 
            src={bgimage}
            alt="App Preview" 
            className="w-[300px] md:w-[900px] drop-shadow-xl"
          />
        </div>
    </section>
  );
};

export default Hero;
