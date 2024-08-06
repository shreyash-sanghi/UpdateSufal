import { Phone } from "lucide-react";
import React from "react";
import { LuMail } from "react-icons/lu";
import Button from "./Button";
import { Motion } from "./Motion";
import { H3 } from "./typographyh3";
import { H4 } from "./typographyh4";
import { P } from "./typographypara";
import MaxWidthWrapper from "./MaxWidthWrapper";

const EContactFormTwo = () => {
  return (
    <MaxWidthWrapper className="bg-[#222631] py-16 px-0 overflow-auto">
      <div className="mx-auto max-w-screen-xl p-8 sm:px-6 lg:px-8 lg:pr-32 bg-[#292d39] rounded-xl border-[1.6px] border-zinc-300/10">
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-5">
          <div className="rounded-lg p-4 lg:col-span-3 lg:p-12">
            <form action="#" className="space-y-4">
              <Motion direction="left">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Company Name
                    </label>
                    <input
                      className="w-full bg-[#292d39] rounded-lg border-[1.6px] border-zinc-300/10 px-6 py-4 text-base text-zinc-600"
                      placeholder="Company Name"
                      type="text"
                      id="name"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="text">
                      Subject
                    </label>
                    <input
                      className="w-full bg-[#292d39] rounded-lg border-[1.6px] border-zinc-300/10 px-6 py-4 text-base text-zinc-600"
                      placeholder="Subject"
                      type="text"
                      id="text"
                    />
                  </div>
                </div>
              </Motion>

              <Motion direction="left">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Company Email
                    </label>
                    <input
                      className="w-full bg-[#292d39] rounded-lg border-[1.6px] border-zinc-300/10 px-6 py-4 text-base text-zinc-600"
                      placeholder="Company Email"
                      type="email"
                      id="email"
                    />
                  </div>{" "}
                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full bg-[#292d39] rounded-lg border-[1.6px] border-zinc-300/10 px-6 py-4 text-base text-zinc-600"
                      placeholder="Company Phone"
                      type="text"
                      id="phone"
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
                    className="w-full bg-[#292d39] rounded-lg border-[1.6px] border-zinc-300/10 px-6 py-4 text-base text-zinc-600"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>
              </Motion>
              <div className="mt-10">
                <Motion direction="left">
                  <Button
                    bg
                    type="submit"
                    href="/get-started"
                    className="w-full bg-[#908ce1] transition-all hover:bg-[#7f7bcd] rounded-xl px-10 py-4 flex items-center justify-center text-wrap"
                  >
                    <span className="capitalize">Send Message</span>
                  </Button>
                </Motion>
              </div>
            </form>
          </div>

          <div className="w-full flex-1 lg:col-span-2 lg:py-12">
            <Motion direction="right">
              <div className="inline-flex items-center justify-center py-1 transition ease-out text-[#61cfab] hover:duration-300 mb-3 uppercase tracking-wide">
                <span className="text-xl tracking-wider">Get In Touch</span>
              </div>
            </Motion>
            <Motion direction="right">
              <H3 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-zinc-300">
                Let's talk about your project
              </H3>
            </Motion>
            <Motion
              direction="right"
              className="border-b-[1px] border-zinc-200/20 pb-6"
            >
              <P className="text-zinc-400 font-semibold md:text-xl">
                Sint nulla ex cupidatat duis irure cillum labore. Lorem nostrud
                mollit amet do esse dolor.
              </P>
            </Motion>
            <Motion direction="right" className="w-full">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                <div className="flex items-center gap-4">
                  <span className="p-2 rounded-xl bg-[#65cdaa]">
                    <LuMail className="text-zinc-200" size={24} />
                  </span>
                  <div>
                    <H4 className="text-lg font-bold text-zinc-200 tracking-tight sm:text-xl mb-1">
                      Our Email
                    </H4>
                    <P className="text-zinc-400 md:text-base">abc@domain.com</P>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="p-2 rounded-xl bg-[#908ce1]">
                    <Phone className="text-zinc-200 rotate-90" size={24} />
                  </span>
                  <div>
                    <H4 className="text-lg font-bold text-zinc-200 tracking-tight sm:text-xl mb-1">
                      Our Phone
                    </H4>
                    <P className="text-zinc-400 md:text-base">
                      (+62) 8896-2220
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

export default EContactFormTwo;
