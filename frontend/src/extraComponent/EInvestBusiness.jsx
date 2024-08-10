import { FaHouse } from "react-icons/fa6";
import { RxVideo } from "react-icons/rx";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineEventSeat } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";

import { IoMdPhotos } from "react-icons/io";
import { Link } from "react-router-dom";

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
        <div className="md:grid hidden grid-cols-2 grid-rows-2 gap-6 p-5 overflow-hidden">
          <Motion
            direction="left"
            className="z-50 bg-zinc-50 border-[1px] border-zinc-400/20 rounded-3xl max-w-96 shadow-xl"
          >
            <div className="flex flex-col items-start justify-start px-4 sm:px-6 py-6">
              <span className="p-2 rounded-xl bg-orange-300 mb-2">
                <Link to="video-gallery">
                <RxVideo
                  className="p-1 lg:p-3 mx-auto size-14 lg:size-16 text-zinc-200    "
                  size={12}
                /></Link>
              </span>
              <div className="w-full flex flex-col items-start text-left">
                <H3 className="text-lg text-zinc-800 font-semibold mb-2">
                  Video Gallery
                </H3>
                <p className="text-zinc-600 font-polySans">
                हमारे वीडियो गैलरी में देखें अनमोल वीडियो, जो आपके मातृत्व को आनंदमय बनाएंगे।
                </p>
              </div>
            </div>
          </Motion>
          <Motion
            direction="left"
            className="z-50 bg-zinc-50/35 border-[1px] border-zinc-400/20 rounded-3xl max-w-96 shadow-xl    "
          >
            <div className="flex flex-col items-start justify-start px-4 sm:px-6 py-6">
              <span className="p-2 rounded-xl bg-pink-300 mb-2">
                <Link to="/photo-gallery">
                <IoMdPhotos
                  className="p-1 lg:p-3 mx-auto size-14 lg:size-16 text-zinc-200    "
                  size={12}
                /></Link>
              </span>
              <div className="w-full flex flex-col items-start text-left">
                <H3 className="text-lg text-zinc-800 font-semibold mb-2">
                  Photo Gallery
                </H3>
                <p className="text-zinc-600  font-polySans">
                अनमोल और खूबसूरत पलों की झलक हमारी फोटो गैलरी में देखें।
                </p>
              </div>
            </div>
          </Motion>

          <Motion
            direction="left"
            className="z-50 bg-zinc-50/35 border-[1px] border-zinc-400/20 rounded-3xl max-w-96 shadow-xl "
          >
            <div className="flex flex-col items-start justify-start px-4 sm:px-6 py-6">
              <span className="p-2 rounded-xl bg-[#908dde] mb-2">
               <Link to=
               "/events"> 
               <MdOutlineEventSeat

className="p-1 lg:p-3 mx-auto size-14 lg:size-16 text-zinc-200    "
size={12}
/>
               </Link>
              </span>
              <div className="w-full flex flex-col items-start text-left">
                <H3 className="text-lg text-zinc-800 font-semibold mb-2">
                  Sufal Events
                </H3>
                <p className="text-zinc-600 font-polySans">
                सुफल इवेंट्स में भाग लेकर गर्भावस्था और मातृत्व से संबंधित महत्वपूर्ण जानकारियों और अनुभवों को साझा करें।
                </p>
              </div>
            </div>
          </Motion>

          <Motion
            direction="left"
            className="z-50 bg-zinc-50 border-[1px] border-zinc-400/20 rounded-3xl max-w-96 shadow-xl"
          >
            <div className="flex flex-col items-start justify-start px-4 sm:px-6 py-6">
              <span className="p-2 rounded-xl bg-[#65cdaa] mb-2">
                <Link to="our-team">
                <GrUserExpert
                  className="p-1 lg:p-3 mx-auto size-14 lg:size-16 text-zinc-200    "
                  size={12}
                /></Link>
              </span>
              <div className="w-full flex flex-col items-start text-left">
                <H3 className="text-lg text-zinc-800 font-semibold mb-2">
                  Our Experts
                </H3>
                <p className="text-zinc-600 font-polySans">
                हमारी विशेषज्ञ टीम आपकी गर्भावस्था और मातृत्व यात्रा को सुरक्षित और सुखद बनाने के लिए समर्पित है।
                </p>
              </div>
            </div>
          </Motion>
        </div>

        <div className="px-4 lg:py-4">
          <Motion direction="right">
            <div className="inline-flex  items-center justify-center py-1 transition ease-out text-[#8f81c8] hover:duration-300  mb-3 uppercase tracking-wide ">
              <span className="text-sm items-center justify-center">
              हम क्या करते हैं
              </span>
            </div>
          </Motion>
          <Motion direction="right">
            <H3 className="text-4xl sm:text-4xl font-semibold  mb-4">
            आपके मातृत्व को सुरक्षित और खुबसूरत बनाने के लिए तत्पर
            </H3>
          </Motion>
          <Motion direction="right">
            <P className=" text-[#27272a]/80 md:text-lg text-left">
            हमारी सेवाओं में आपके गर्भावस्था और मातृत्व से जुड़े हर पहलू का ध्यान रखा जाता है। हम आपकी आवश्यकताओं और चिंताओं को समझते हुए आपको सबसे बेहतर देखभाल प्रदान करते हैं।
            </P>
          </Motion>{" "}
          <Motion
            direction="right"
            className="my-4 flex justify-start items-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-start ">
              <div className="flex flex-col items-start justify-start">
                <H2 className="text-base md:text-lg lg:text-xl border-none font-semibold mb-4">
                हम कैसे आपकी मदद करते हैं
                </H2>
                <div className="flex flex-col justify-start items-start space-y-2">
                  <div className="flex items-center space-x-2">
                    <IoIosCheckmarkCircleOutline className="text-[#918ad8] text-2xl" />
                    <P className="text-gray-500 tracking-wide leading-6">
                    गर्भावस्था की देखभाल
                    </P>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IoIosCheckmarkCircleOutline className="text-[#918ad8] text-2xl" />
                    <P className="text-gray-500 tracking-wide leading-6">
                    स्वास्थ्य और पोषण
                    </P>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IoIosCheckmarkCircleOutline className="text-[#918ad8] text-2xl" />
                    <P className="text-gray-500 tracking-wide leading-6">
                    भावनात्मक समर्थन
                    </P>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IoIosCheckmarkCircleOutline className="text-[#918ad8] text-2xl" />
                    <P className="text-gray-500 tracking-wide leading-6">
                    सामुदायिक सहभागिता
                    </P>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IoIosCheckmarkCircleOutline className="text-[#918ad8] text-2xl" />
                    <P className="text-gray-500 tracking-wide leading-6">
                    श्रेष्ठ संतति का निर्माण
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
                    src="https://cdn.dribbble.com/users/3072447/screenshots/10297742/aromatherapy-pregnancy.gif"
                    alt="buildind plan image"
                    width={100}
                    className="w-full h-full object-cover z-30"
                  />
                </div>
              </Motion>
            </div>
          </Motion>{" "}
         
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default EInvestBusiness;
