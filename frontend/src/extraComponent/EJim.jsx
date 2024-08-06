import { ChevronRight, Mouse } from "lucide-react";
import React from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoLogoCodepen, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";
import Button from "./Button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Motion } from "./Motion";
import priyamam2 from "../assets/priyamam2.png";

const EJim = () => {
  return (
    <main className="relative overflow-auto">
      <div className="sm:absolute hidden sm:flex sm:top-1/2 sm:left-28 lg:top-1/2 lg:left-40  sm:transform sm:-translate-y-1/2  sm:grid sm:grid-rows-3 gap-1 items-center justify-start mt-5 px-3">
        <span className="p-2 rounded-full">
          <a href=""><IoLogoCodepen className="text-pink-600 size-8 " /></a>
        </span>
        <span className="p-2 rounded-full">
          <a href=""><IoLogoLinkedin className="text-pink-600 size-8" /></a>
        </span>
        <span className="p-2 rounded-full ">
          <a href=""><IoLogoWhatsapp className="text-pink-600 size-8 " /></a>
        </span>
      </div>

      <MaxWidthWrapper className="relative px-4 md:px-6 text-center  py-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 place-items-center lg:px-28">
          <div className="flex flex-col space-y-6 text-left max-w-2xl mx-auto lg:text-left ">
            <Motion direction="left" className="w-full">
              <h1 className="text-3xl md:text-4xl text-center md:text-start lg:text-5xl font-normal leading-tight text-teal-950">
              संयोजक, सुफल
              </h1>
            </Motion>
            <Motion direction="left" className="w-full">
              <p className="text-lg md:text-xl font-semibold text-center md:text-start leading-tight text-teal-650">
              Dr. Priya Bhave Chittawar
              </p>
            </Motion>
            <Motion direction="left">
              <p className="text-gray-500 tracking-tight text-center md:text-start max-w-xs md:max-w-md lg:max-w-xl mx-auto">
              Head of Reproductive Medicine & Surgery.
              Bansal Hospital Bhopal
              </p>
            </Motion>
            <div className="flex  items-center justify-center md:justify-start gap-4 lg:w-full">
              <Motion direction="left">
                <Button
                  bg
                  href="/dr-priya-bhave-chittawar"
                  className="transition-all bg-orange-400 text-center   rounded-md px-8 py-3 flex items-center gap-2"
                >
                  Read More 
                  <ChevronRight />
                </Button>
              </Motion>
            </div>
            
          </div>
          <div className="flex items-center justify-center aspect-square lg:h-[35rem] relative">
            <Motion direction="right">
              <div className="w-[25rem] h-[25rem] lg:w-[35rem] lg:h-[35rem] flex items-center justify-center mx-auto rounded-3xl overflow-clip z-30">
                <img className="w-80" src={priyamam2} alt="" />
              </div>
            </Motion>
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default EJim;
