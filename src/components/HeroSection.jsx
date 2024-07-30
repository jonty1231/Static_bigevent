import React from "react";

const HeroSection = () => {
  return (
    <div className=" herosection ">
      <div className="w-full md:w-4/6 lg:w-1/2 md:ps-[1.5rem] lg:ps-[4.2rem] flex flex-col gap-3 pt-[10rem] pb-[6rem] items-center md:items-start ">
        <b className="text-white  ps-4 md:ps-0 text-4xl md:text-6xl ">
          UI.UX DESIGN BOOTCAMP FORUM VORSION 2.0
        </b>
        <p className="text-white py-4 md:py-0 text-wrap">
       
          Join Newsletter Annual World UI.UX Design Bootcamp Forum v2.0
        </p>
        <div className="bg-white p-1 w-5/6 flex  justify-between rounded-md ps-3 flex-col md:flex-row">
          <input
            type="text"
            placeholder="Your Email Address "
            className="w-full  h-11 md:h"
          />
          <button className="text-white bg-[#F7437C] rounded-md p-2 px-4">
            Subscribe
          </button>
        </div>
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="flex text-white items-center gap-5">
            <img src="/01.png" alt="" />
            <div>
              <p>09:00 Am - 7:30 Pm</p>
              <p>Wednesday, 24 January 2021 </p>
            </div>
          </div>
          <div className="flex text-white items-center gap-5">
            <img src="/02.png" alt="" />
            <div>
              <p>Hall Room-02</p>
              <p>230 King Street Dhaka 200, USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
