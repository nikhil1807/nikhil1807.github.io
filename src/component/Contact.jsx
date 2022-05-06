import React from "react";
import pic from "../resources/contact.png";

const Contact = () => {
  return (
    <>
      <div>
        <hr className="border-[#000000] md:w-3/5 m-auto" />
      </div>
      <div className="flex justify-between p-2 md:mx-96 md:mb-4 mx-4 my-2">
        <div className="flex">
          <div className="flex flex-col pr-4 md:pr-32">
            <p className="text-[#7ECFE0] font-semibold md:text-[22px] md:mb-2">
              Connect
            </p>
            <button className="text-[#707070] md:font-semibold text-sm text-left md:text-[16px] md:mb-2">
              LinkedIn
            </button>
            <button className="text-[#707070] md:font-semibold text-sm text-left md:text-[16px] md:mb-2">
              Github
            </button>
            <button className="text-[#707070] md:font-semibold text-sm text-left md:text-[16px]">
              Instagram
            </button>
          </div>
          <div>
            <p className="text-[#7ECFE0] font-semibold md:text-[22px] md:mb-2">
              Contact
            </p>
            <button className="text-[#707070] md:font-semibold text-sm text-left md:text-[16px]">
              nikhil.kiit26@gmail.com
            </button>
          </div>
        </div>
        <div className="opacity-75 ">
          <img src={pic} alt="contact" />
        </div>
      </div>
    </>
  );
};

export default Contact;
