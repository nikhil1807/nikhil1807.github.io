import React from "react";
import pic from "../resources/about.png";
import profile from "../resources/profile.png";
import pic2 from "../resources/about2.png";
import {AiOutlineMail} from 'react-icons/ai';

const AboutHero = () => {
  return (
    <>
      <div className="flex">
        <div className=" md:mt-[650px] mt-[420px] ml-8 md:w-1/2 w-full h-48 text-left md:ml-20 md:pl-20">
          <p className="sm:text-xl md:text-2xl text-base font-medium">
            Hi! I'm Nikhil Srivastava. I am a UX Designer and a Full Stack
            Developer currently based in India studying at KIIT University,
            Bhubaneswar. Major in Computer Science and Engineering.
          </p>
        </div>
        <div className="md:pt-40 md:ml-96 mr-8 mt-8">
          <img src={pic} alt="about" />
        </div>
      </div>

      <div className="h-screen flex">
        <div className="flex mt-[-80px]">
          <img className="p-56" src={profile} alt="myphoto" />
          <p className="grid place-items-center pr-80 leading-10 font-medium pb-40 ml-[-40px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo
            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et
            justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          
        </div>
      </div>
      <AiOutlineMail/>

      <div className="mt-[-150px] grid justify-items-end">
        <img className="mr-56" src={pic2} alt="pic2" />
        <hr className="border-[#000000] m-auto w-4/5 " />
      </div>

      <div>This div will contain skills</div>
    </>
  );
};

export default AboutHero;
