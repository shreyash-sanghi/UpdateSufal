import React from "react";
import { FaFigma } from "react-icons/fa";
import Badge from "./Badge";
import Button from "./Button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Motion } from "./Motion";
import { H2 } from "./typographyh2";
import { P } from "./typographypara";
import { CirclePlus } from "lucide-react";
import garbhagif from "../assets/garbhagif3.gif";
import { FaHandsHoldingChild } from "react-icons/fa6";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";

const EUI = () => {
  return (
    <MaxWidthWrapper className="py-10 bg-white mt-4 overflow-auto">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="flex flex-col items-center justify-center space-y-5 lg:space-y-4">
          <Motion
            direction="left"
            className="text-center lg:text-left space-y-4"
          >
            <Badge className="inline-block uppercase tracking-wide">
            ज़रूर जानिए 
            </Badge>
            <H2 className="text-4xl text-center lg:text-left tracking-normal font-extrabold sm:text-5xl md:text-6xl lg:text-5xl border-0 -mb-6">
              <span className="block text-balance text-zinc-900 xl:inline leading-none lg:leading-none">
              गर्भ
              </span>
              <br className="hidden md:block" />
              <span className="block text-balance text-zinc-900 xl:inline leading-none lg:leading-none">
              संस्कार
              </span>
            </H2>
            <P className="mt-3 text-base font-medium text-center lg:text-left text-zinc-700 sm:mt-5 sm:text-lg lg:text-xl">
            सुफल गर्भावस्था सपोर्ट  ग्रुप के साथ ...
            </P>
            <div className="pr-6">
              <div className="text-4xl font-bold text-zinc-800">
                $निःशुल्क <span className="text-2xl text-zinc-600">00</span>
              </div>
              <div className="flex mx-auto items-center justify-start  gap-4 mt-4">
                <Button
                  bg
                  href="/"
                  className={
                    "bg-zinc-900    transition-all hover:bg-zinc-950 rounded-full    px-10 py-4 flex text-wrap"
                  }
                >
                  <FaHandsHoldingChild />

                  जुड़ें हमारे साथ 
                </Button>
                <CirclePlus className="size-4 lg:size-8" />
              </div>
            </div>
          </Motion>
        </div>

        <div className="relative w-full lg:w-[24rem] h-auto lg:h-[35rem] mx-auto rounded-3xl overflow-clip z-40">
          <img
            src={garbhagif}
            alt="building plan image"
            width={300}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full px-3 lg:px-8 flex items-center justify-center">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>गर्भसंस्कार कब?
              </AccordionTrigger>
              <AccordionContent>  
              यह समझना आवश्यक है कि गर्बंस्कर केवल एक अभ्यास नहीं है, बल्कि एक जीवन शैली है जिसे योजना और गर्भवती दोनों जोड़ों को दैनिक रूप से शामिल करना चाहिए. आयुर्वेद के अनुसार, जोड़ों को उस दिन से गर्बंस्कर का अभ्यास शुरू करना चाहिए जिस दिन वे बच्चा पैदा करने का फैसला करते हैं. गर्भ धारण करने से कम से कम छह महीने पहले एक खुशहाल, स्वस्थ, सकारात्मक और आनंदमय जीवन शैली अपनाने की सलाह दी जाती है और इसे गर्भावस्था के दौरान जारी रखा जाना चाहिए.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>गर्भसंस्कार क्यों?</AccordionTrigger>
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
              <AccordionTrigger>गर्भसंस्कार कैसे?</AccordionTrigger>
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

export default EUI;
