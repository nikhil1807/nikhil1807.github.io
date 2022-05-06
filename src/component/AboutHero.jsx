import React from "react";
import pic from "../resources/about.png";
import profile from "../resources/profile.png";
import pic2 from "../resources/about2.png";
import { AiOutlineMail } from "react-icons/ai";

const AboutHero = () => {
  return (
    <>
      <div className="flex">
        <div className=" md:mt-[650px] mt-[420px] ml-8 md:w-1/2 w-full h-48 text-left md:ml-20 md:pl-20">
          <p className="sm:text-xl md:text-xl text-base">
            Hi! I'm Nikhil Srivastava. I am a UX Designer and a Full Stack
            Developer currently based in India studying at KIIT University,
            Bhubaneswar. Major in Computer Science and Engineering.
          </p>
        </div>
        <div className="md:pt-40 md:ml-96 mr-8 mt-8">
          <img src={pic} alt="about" />
        </div>
      </div>

      <section class="text-gray-600 body-font pb-32">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={profile}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <p class="mb-8 leading-8 text-black">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-[-150px] grid justify-items-end">
        <img className="md:mr-56" src={pic2} alt="pic2" />
        <hr className="border-[#000000] m-auto w-4/5 " />
      </div>

      <section class="text-gray-600 body-font contact">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Skills
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              If these are your requirements, then hire me!
            </p>
          </div>
          <div class="flex flex-wrap -m-4 ">
            <div class="p-4 lg:w-1/3 sm:w-1/3 w-full">
              <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                TECHNICAL SKILLS
              </h2>
              <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <a>C/C++</a>
                <a>Python</a>
                <a>ReactJS</a>
                <a>HTML/CSS</a>
                <a>ML</a>
              </nav>
            </div>
            <div class="p-4 lg:w-1/3 sm:w-1/2 w-full">
              <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                DESIGN SKILLS
              </h2>
              <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <a>First Link</a>
                <a>Second Link</a>
                <a>Third Link</a>
                <a>Fourth Link</a>
                <a>Fifth Link</a>
              </nav>
            </div>
            <div class="p-4 lg:w-1/3 sm:w-1/2 w-full">
              <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                GENERAL SKILLS
              </h2>
              <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <a>First Link</a>
                <a>Second Link</a>
                <a>Third Link</a>
                <a>Fourth Link</a>
                <a>Fifth Link</a>
              </nav>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default AboutHero;
