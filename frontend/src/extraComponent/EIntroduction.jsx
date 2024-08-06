import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { H4 } from "./typographyh4";
import { P } from "./typographypara";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Motion } from "./Motion";
import { H3 } from "./typographyh3";

const EIntroduction = () => {
  return (
    <MaxWidthWrapper className="py-10 overflow-auto">
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-2">
        <div className="flex items-center justify-center aspect-square lg:h-[35rem] relative">
          <Motion direction="left">
            <div className="w-full lg:w-[35rem] h-[35rem] mx-auto  rounded-3xl overflow-clip  z-30">
              <img
                src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="buildind plan image"
                width={300}
                className="w-full h-full object-cover z-30"
              />
            </div>
          </Motion>
        </div>

        <div className="lg:py-12">
          <Motion direction="right">
            <div className="inline-flex  items-center justify-center py-1 transition ease-out text-[#f90368] hover:duration-300  mb-3 uppercase tracking-wide ">
              <span className="text-sm items-center justify-center">
                INTRODUCTION
              </span>
            </div>
          </Motion>
          <Motion direction="right">
            <H3 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              KNOW MORE ABOUT OUR GRAND EVENT
            </H3>
          </Motion>
          <Motion direction="right">
            <P className=" text-[#27272a]/80 md:text-xl text-left">
              Sint nulla ex cupidatat duis irure cillum labore. Lorem nostrud
              mollit amet do esse dolor.
            </P>
          </Motion>{" "}
          <Motion
            direction="right"
            className="my-4 flex justify-center items-center"
          >
            <div className="w-full max-w-lg flex flex-col items-center justify-center space-y-1 py-4 rounded-3xl border-b-2 border-[#f90368] bg-[#f8f8f8]">
              <div className="w-full flex flex-col items-center justify-center -gap-3">
                <div className="flex items-center justify-center gap-2">
                  <IoIosCheckmarkCircleOutline className="text-zinc-600 size-14 text-center ml-5" />
                  <P className="text-zinc-600 md:text-base text-left ">
                    Aliquip ullamco proident et occaecat ea dolore non qui.
                    Magna fugiat fugiat ad nisi.
                  </P>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <IoIosCheckmarkCircleOutline className="text-zinc-600 size-14 text-center ml-5" />
                  <P className="text-zinc-600 md:text-base text-left ">
                    Aliquip ullamco proident et occaecat ea dolore non qui.
                    Magna fugiat fugiat ad nisi.
                  </P>
                </div>
              </div>
            </div>
          </Motion>{" "}
          <Motion
            direction="right"
            className="my-4 flex justify-center items-center"
          >
            <div>
              <H4 className="text-base font-bold tracking-tight sm:text-lg mb-0 uppercase ">
                md william houston
              </H4>
              <P className=" text-[#27272a]/80 md:text-xl text-balance text-sm lg:text-base ">
                Event Organiser
              </P>
            </div>
          </Motion>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default EIntroduction;
