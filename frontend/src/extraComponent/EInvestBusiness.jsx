import { FaHouse } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { PiPresentationChart } from "react-icons/pi";
import Button from "./Button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Motion } from "./Motion";
import { H2 } from "./typographyh2";
import { H3 } from "./typographyh3";
import { P } from "./typographypara";

const EInvestBusiness = () => {
  return (
    <MaxWidthWrapper className="py-10 px-0 overflow-auto">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2">
        <div className="grid grid-cols-2 grid-rows-2 gap-6 p-5 overflow-hidden">
          <Motion
            direction="left"
            className="z-50 bg-zinc-50 border-[1px] border-zinc-400/20 rounded-3xl max-w-96 shadow-xl"
          >
            <div className="flex flex-col items-start justify-start px-6 py-6">
              <span className="p-2 rounded-xl bg-[#65cdaa] mb-2">
                <GiTakeMyMoney
                  className="p-1 lg:p-3 mx-auto size-14 lg:size-16 text-zinc-200    "
                  size={12}
                />
              </span>
              <div className="w-full flex flex-col items-start text-left">
                <H3 className="text-lg text-zinc-800 font-bold mb-2">
                  Business Growth
                </H3>
                <p className="text-zinc-600 font-semibold font-polySans">
                  Proident do ut ut ea excepteur pariatur aliqua sit aute.
                  Laborum proident nostrud.
                </p>
              </div>
            </div>
          </Motion>
          <Motion
            direction="left"
            className="z-50 bg-zinc-50/35 border-[1px] border-zinc-400/20 rounded-3xl max-w-96 shadow-xl    "
          >
            <div className="flex flex-col items-start justify-start px-6 py-6">
              <span className="p-2 rounded-xl bg-[#908dde] mb-2">
                <PiPresentationChart
                  className="p-1 lg:p-3 mx-auto size-14 lg:size-16 text-zinc-200    "
                  size={12}
                />
              </span>
              <div className="w-full flex flex-col items-start text-left">
                <H3 className="text-lg text-zinc-800 font-bold mb-2">
                  Strategic Guidance
                </H3>
                <p className="text-zinc-600 font-semibold font-polySans">
                  Proident do ut ut ea excepteur pariatur aliqua sit aute.
                  Laborum proident nostrud.
                </p>
              </div>
            </div>
          </Motion>

          <Motion
            direction="left"
            className="z-50 bg-zinc-50/35 border-[1px] border-zinc-400/20 rounded-3xl max-w-96 shadow-xl "
          >
            <div className="flex flex-col items-start justify-start px-6 py-6">
              <span className="p-2 rounded-xl bg-[#908dde] mb-2">
                <IoSettingsOutline
                  className="p-1 lg:p-3 mx-auto size-14 lg:size-16 text-zinc-200    "
                  size={12}
                />
              </span>
              <div className="w-full flex flex-col items-start text-left">
                <H3 className="text-lg text-zinc-800 font-bold mb-2">
                  Exit Strategy
                </H3>
                <p className="text-zinc-600 font-semibold font-polySans">
                  Proident do ut ut ea excepteur pariatur aliqua sit aute.
                  Laborum proident nostrud.
                </p>
              </div>
            </div>
          </Motion>

          <Motion
            direction="left"
            className="z-50 bg-zinc-50 border-[1px] border-zinc-400/20 rounded-3xl max-w-96 shadow-xl"
          >
            <div className="flex flex-col items-start justify-start px-6 py-6">
              <span className="p-2 rounded-xl bg-[#65cdaa] mb-2">
                <FaHouse
                  className="p-1 lg:p-3 mx-auto size-14 lg:size-16 text-zinc-200    "
                  size={12}
                />
              </span>
              <div className="w-full flex flex-col items-start text-left">
                <H3 className="text-lg text-zinc-800 font-bold mb-2">
                  Advising Startups
                </H3>
                <p className="text-zinc-600 font-semibold font-polySans">
                  Proident do ut ut ea excepteur pariatur aliqua sit aute.
                  Laborum proident nostrud.
                </p>
              </div>
            </div>
          </Motion>
        </div>

        <div className="px-4 lg:py-4">
          <Motion direction="right">
            <div className="inline-flex  items-center justify-center py-1 transition ease-out text-[#8f81c8] hover:duration-300  mb-3 uppercase tracking-wide ">
              <span className="text-sm items-center justify-center">
                WHAT WE DO
              </span>
            </div>
          </Motion>
          <Motion direction="right">
            <H3 className="text-4xl sm:text-5xl font-bold tracking-tight  mb-4">
              Always ready to invest in any business
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
            className="my-4 flex justify-start items-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-start ">
              <div className="flex flex-col items-start justify-start">
                <H2 className="text-base md:text-lg lg:text-xl border-none font-semibold mb-4">
                  How we help your business
                </H2>
                <div className="flex flex-col justify-start items-start space-y-2">
                  <div className="flex items-center space-x-2">
                    <IoIosCheckmarkCircleOutline className="text-[#918ad8] text-2xl" />
                    <P className="text-gray-500 tracking-wide leading-6">
                      Stage-focused investing
                    </P>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IoIosCheckmarkCircleOutline className="text-[#918ad8] text-2xl" />
                    <P className="text-gray-500 tracking-wide leading-6">
                      Sector specialization
                    </P>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IoIosCheckmarkCircleOutline className="text-[#918ad8] text-2xl" />
                    <P className="text-gray-500 tracking-wide leading-6">
                      Active involvement
                    </P>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IoIosCheckmarkCircleOutline className="text-[#918ad8] text-2xl" />
                    <P className="text-gray-500 tracking-wide leading-6">
                      Portfolio diversification
                    </P>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IoIosCheckmarkCircleOutline className="text-[#918ad8] text-2xl" />
                    <P className="text-gray-500 tracking-wide leading-6">
                      Achieving a return
                    </P>
                  </div>
                </div>
              </div>
              <Motion
                direction="right"
                className="w-full hidden lg:flex items-center justify-center pl-10 pt-4"
              >
                <div className="w-52 h-52 flex items-center justify-end mx-auto  rounded-3xl overflow-clip  z-30">
                  <img
                    src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="buildind plan image"
                    width={100}
                    className="w-full h-full object-cover z-30"
                  />
                </div>
              </Motion>
            </div>
          </Motion>{" "}
          <div className="flex flex-row items-center justify-start gap-0 w-full mt-4">
            <Motion direction="left">
              <Button
                variant={"outline"}
                href="/get-started"
                className={
                  "  transition-all backdrop-blur-xl bg-zinc-800 border-[1px] border-zinc-300/25 rounded-xl    px-8 py-4 flex text-wrap font-semibold text-lg text-zinc-300"
                }
              >
                Read More
              </Button>
            </Motion>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default EInvestBusiness;
