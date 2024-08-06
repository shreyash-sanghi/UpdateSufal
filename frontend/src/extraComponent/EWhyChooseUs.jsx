import React from "react";
import { PiChartBar, PiUserCircleCheckLight } from "react-icons/pi";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Motion } from "./Motion";
import { H2 } from "./typographyh2";
import { H3 } from "./typographyh3";
import { P } from "./typographypara";

const EWhyChooseUs = () => {
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

        <div className="lg:py-12 px-2">
          <Motion direction="right">
            <div className="inline-flex  items-center justify-center py-1 transition ease-out text-[#f0a202] hover:duration-300  mb-3 uppercase tracking-wide ">
              <span className="text-lg items-center justify-center uppercase">
                why choose us
              </span>
            </div>
          </Motion>
          <Motion direction="right">
            <H3 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              We Help You To Get Best Business Solution Ever
            </H3>
          </Motion>

          <div className="pt-5 space-y-6 ">
            {[
              {
                title: "Amazing Work Process",
                description:
                  "Dolor sunt velit Lorem laborum excepteur nisi labore labore deserunt.",
                icon: (
                  <span className="bg-zinc-200 rounded-full p-2 shadow-lg shadow-[#f0a202] ">
                    <PiUserCircleCheckLight className="text-[#f0a202] size-12 " />
                  </span>
                ),
              },
              {
                title: "Amazing Work Process",
                description:
                  "Dolor sunt velit Lorem laborum excepteur nisi labore labore deserunt.",
                icon: (
                  <span className="bg-[#f0a202] rounded-full p-2">
                    <PiUserCircleCheckLight className="text-zinc-200 size-12" />
                  </span>
                ),
              },
              {
                title: "Amazing Work Process",
                description:
                  "Dolor sunt velit Lorem laborum excepteur nisi labore labore deserunt.",
                icon: (
                  <span className="bg-zinc-200 rounded-full p-2 shadow-lg shadow-[#f0a202] ">
                    <PiChartBar className="text-[#f0a202] size-12 " />
                  </span>
                ),
              },
            ].map((feature, index) => (
              <Motion direction="right">
                <div key={index} className="flex items-center gap-6 py-1">
                  {feature.icon}
                  <div>
                    <H2 className="text-base md:text-lg lg:text-xl border-none font-semibold">
                      {feature.title}
                    </H2>
                    <P className="text-gray-500 tracking-wide leading-1 ">
                      {feature.description}
                    </P>
                  </div>
                </div>
              </Motion>
            ))}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default EWhyChooseUs;
