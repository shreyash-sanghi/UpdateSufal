import React from "react";
import Button from "./Button";
import { Motion } from "./Motion";
import { H3 } from "./typographyh3";
import { P } from "./typographypara";
import { BsBuildings } from "react-icons/bs";
import { H4 } from "./typographyh4";
import { MapPin } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const EContactForm = () => {
  return (
    <MaxWidthWrapper className="bg-zinc-200/80 py-10 px-0 overflow-auto">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="rounded-lg  p-2 lg:col-span-3  lg:p-12">
            <form action="#" className="space-y-4">
              <Motion direction="left">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="w-full rounded-3xl border-gray-200 bg-zinc-50 p-3 text-sm"
                      placeholder="Name"
                      type="text"
                      id="name"
                    />
                  </div>{" "}
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-3xl border-gray-200 bg-zinc-50 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>
                </div>
              </Motion>

              <Motion direction="left">
                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-3xl border-gray-200 bg-zinc-50 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>
              </Motion>
              <div className="mt-4">
                <Motion direction="left">
                  <Button
                    bg
                    type="submit"
                    href="/get-started"
                    className={
                      "w-full bg-[#f90368]  transition-all hover:bg-[#dd2773] rounded-4xl    px-10 py-4 flex text-wrap "
                    }
                  >
                    <span className="capitalize"> Send Message</span>
                  </Button>
                </Motion>
              </div>
            </form>
          </div>

          <div className="lg:col-span-2 lg:py-12">
            <Motion direction="right">
              <div className="inline-flex  items-center justify-center py-1 transition ease-out text-[#f90368] hover:duration-300  mb-3 uppercase tracking-wide ">
                <span className="text-sm items-center justify-center">
                  Get In Touch
                </span>
              </div>
            </Motion>
            <Motion direction="right">
              <H3 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                CONTACT US FOR FURTHER INFORMATION
              </H3>
            </Motion>
            <Motion direction="right">
              <P className=" text-[#27272a]/80 md:text-xl text-balance">
                Sint nulla ex cupidatat duis irure cillum labore. Lorem nostrud
                mollit amet do esse dolor.
              </P>
            </Motion>{" "}
            <Motion direction="right">
              <div className="w-full grid grid-rows-2 space-y-4 gap-4 py-4">
                <div className="flex items-center justify-start gap-4">
                  <span className="p-2 border-[1px] border-[#f90368] rounded-full">
                    <BsBuildings className="p-1    mx-auto text-[#f90368] size-12   " />
                  </span>
                  <div>
                    {" "}
                    <H4 className="text-lg font-bold tracking-tight sm:text-xl mb-0">
                      EVENT VENUE :
                    </H4>
                    <P className=" text-[#27272a]/80 md:text-base text-balance">
                      Hollywood Banquet Hall . Riverside Building Area
                    </P>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-4">
                  <span className="p-2 border-[1px] border-[#f90368] rounded-full">
                    <MapPin className="p-1    mx-auto text-[#f90368] size-12   " />
                  </span>
                  <div>
                    {" "}
                    <H4 className="text-lg font-bold tracking-tight sm:text-xl mb-0">
                      LOCATION ADDRESS :
                    </H4>
                    <P className=" text-[#27272a]/80 md:text-base text-balance">
                      5214 Sunset Blvd. Los Angeles CA 90027. USA
                    </P>
                  </div>
                </div>
              </div>
            </Motion>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default EContactForm;
