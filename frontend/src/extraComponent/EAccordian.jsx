import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Motion } from "./Motion";
import { H2 } from "./typographyh2";
import { P } from "./typographypara";

const EAccordian = () => {
  return (
    <MaxWidthWrapper className="py-10 overflow-auto">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center">
        <div className="max-w-prose flex flex-1 flex-col items-center justify-center space-y-5 lg:space-y-4">
          <Motion direction="left">
            <H2 className="text-4xl text-center lg:text-left tracking-normal font-extrabold sm:text-5xl md:text-6xl lg:text-5xl border-0 -mb-6 ">
              <span className="block text-zinc-900 xl:inline leading-none lg:leading-none">
                Revolutionizing Your Recruitment Process for Better Results
              </span>
            </H2>
          </Motion>
          <Motion direction="left">
            <P className="mt-3 text-base font-medium  text-center     lg:text-left text-zinc-600 sm:mt-5 sm:text-lg lg:text-xl">
              Empower your team to build and deploy faster with our cutting-edge
              platform. Unlock new possibilities and revolutionize your web
              presence.
            </P>
          </Motion>
          <Motion direction="left">
            <div class="grid grid-cols-2 divide-x-2 divide-zinc-200">
              <div className="pr-6">
                <div className="text-4xl font-bold text-[#4db98a]">720+</div>
                <P className="text-base text-zinc-600">Trusted by companies</P>
              </div>
              <div className="pl-8">
                <div className="text-4xl font-bold text-[#4db98a]">250+</div>
                <P className="text-base text-zinc-600">Recruitment Done</P>
              </div>
            </div>
          </Motion>
        </div>
        <div className="w-full px-3 lg:px-8 flex items-start justify-center">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Talent acquisition</AccordionTrigger>
              <AccordionContent>
                Ad enim sint quis occaecat non sit sunt non sint ullamco ut
                adipisicing minim. Id pariatur deserunt velit incididunt ullamco
                ex eiusmod qui ea minim enim. Eu et nisi dolor elit velit
                consectetur ad aute.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>People and culture</AccordionTrigger>
              <AccordionContent>
                Nostrud aliquip non sint qui magna duis labore. Veniam est dolor
                ipsum fugiat mollit voluptate aliquip minim sint eu consectetur
                magna velit minim. Pariatur tempor excepteur nisi aliquip esse
                labore labore enim. Excepteur occaecat fugiat est adipisicing
                incididunt veniam eiusmod Lorem nulla. Laboris ea irure veniam
                incididunt esse. Qui consequat sint non voluptate mollit ad sint
                non veniam ea minim nisi ullamco reprehenderit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Efficient recruitmen</AccordionTrigger>
              <AccordionContent>
                Adipisicing cupidatat laboris ea ad cupidatat aute proident
                ipsum deserunt minim culpa. Occaecat aliqua anim consectetur
                magna labore mollit do laborum aute cillum. Quis ut aliquip sunt
                nulla velit qui. Mollit incididunt qui reprehenderit magna esse
                nulla ad commodo duis dolor anim occaecat aliquip consectetur.
                Magna adipisicing cillum do exercitation sit sint adipisicing
                consectetur non consequat ullamco anim excepteur.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default EAccordian;
