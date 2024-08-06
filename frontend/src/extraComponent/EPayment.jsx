import React from "react";
import Button from "./Button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Motion } from "./Motion";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { P } from "./typographypara";
import { H2 } from "./typographyh2";

const EPayment = () => {
  return (
    <main className="bg-[#eefff9] px-2">
      <MaxWidthWrapper className="px-2 sm:px-4 md:px-0 overflow-auto  py-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2  lg:gap-8 place-items-center space-y-10">
          <div className="flex flex-col space-y-6 sm:space-y-5 lg:items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto">
            <Motion direction="left">
              <h1 className=" font-normal leading-tight text-teal-950  text-4xl sm:text-5xl lg:text-6xl">
                Digital Payment Gateway Solution
              </h1>
            </Motion>
            <Motion direction="left">
              <p className=" flex text-gray-700  tracking-tight md:font-normal max-w-xl mx-auto lg:max-w-none">
                Sunt et sint sunt est dolore enim culpa Lorem in et ad. Labore
                labore enim ipsum culpa ad. Qui sint ea irure velit elit eiusmod
                dolor. Sunt Lorem incididunt ullamco sit aute anim enim sint
                consequat.
              </p>
            </Motion>{" "}
            <div className="w-full flex flex-col items-center lg:items-start justify-start ">
              <H2 className="text-base md:text-lg lg:text-xl border-none font-semibold mb-2">
                How we help your business
              </H2>
              <div className="flex flex-col justify-start items-start space-y-2">
                <div className="flex items-center space-x-2">
                  <IoIosCheckmarkCircleOutline className="text-[#6ecc9a] text-2xl" />
                  <P className="text-gray-500 tracking-wide leading-6">
                    Comprehensive Financial Planning
                  </P>
                </div>
                <div className="flex items-center space-x-2">
                  <IoIosCheckmarkCircleOutline className="text-[#6ecc9a] text-2xl" />
                  <P className="text-gray-500 tracking-wide leading-6">
                    Personalized Approach
                  </P>
                </div>
                <div className="flex items-center space-x-2">
                  <IoIosCheckmarkCircleOutline className="text-[#6ecc9a] text-2xl" />
                  <P className="text-gray-500 tracking-wide leading-6">
                    Investment Management
                  </P>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center lg:justify-start gap-4 w-full">
              <Motion direction="left">
                <Button
                  bg
                  href="/get-started"
                  className={
                    "bg-[#f7b93e]  transition-all hover:bg-[#d29d33] rounded-xl    px-10 py-4 flex text-wrap"
                  }
                >
                  About Us
                </Button>
              </Motion>
            </div>{" "}
          </div>
          <div className="flex items-center justify-center aspect-square lg:h-[35rem] relative">
            {" "}
            <Motion direction="right">
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
        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default EPayment;
