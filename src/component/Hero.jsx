import React from "react";

const Hero = () => {
  return (
    <div className=" mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
      <p className="sm:text-4xl md:text-7xl text-2xl font-semibold">
        Hi! I'm Nikhil Srivastava
      </p>
      <p className="sm:text-lg  md:text-[32px] md:pt-4 text-lg font-normal text-[#00000071]">
        a UX Designer and Full Stack Developer
      </p>
      <div className="md:pt-8 pt-4">
        <button className="border border-[#707070] bg-[#707070] text-white hover:bg-[#ffffff] hover:text-black p-2 mr-3 pr-6 pl-6 text-xs md:pr-10 md:pl-10 md:text-base">
          Explore
        </button>
        <button className="border border-[#707070] hover:bg-[#7ECFE0] p-2 mr-3 pr-4 pl-4 text-xs md:ml-3 md:pr-6 md:pl-6 md:text-base">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Hero;
