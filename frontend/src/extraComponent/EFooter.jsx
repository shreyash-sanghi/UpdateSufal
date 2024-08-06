import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { H1 } from "./typographyh1";
import { H4 } from "./typographyh4";
import { P } from "./typographypara";

const EFooter = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#15242b]">
      <div
        className={twMerge(
          className,
          "mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8"
        )}
      >
        <div className="flex items-center justify-between gap-4 -mb-4 lg:-mb-8">
          <H1 className="text-zinc-200 text-lg font-semibold">jobify</H1>
          <div className="flex space-x-4">
            {[ImLinkedin2, FaFacebookF, IoLogoTwitter, IoLogoYoutube].map(
              (Icon, index) => (
                <Link
                  key={index}
                  to="#"
                  className="text-zinc-100 bg-[#367978] p-2 rounded-lg hover:bg-[#28214c] transition-colors duration-200"
                >
                  <Icon className="size-4 lg:size-6" />
                </Link>
              )
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-4 lg:pt-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="w-full">
            <h2 className="text-zinc-300 text-xl font-semibold mb-4">
              Other Pages
            </h2>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Pricing"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Link
                    to="#"
                    className="text-zinc-300 hover:text-[#255453] transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full">
            <h2 className="text-zinc-300 text-xl font-semibold mb-4">
              Other Links
            </h2>
            <ul className="space-y-2">
              {["FAQ", "Blog", "Contact", "Support"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Link
                    to="#"
                    className="text-zinc-300 hover:text-[#255453] transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start justify-center space-y-8">
            <div>
              <h2 className="text-zinc-200 text-lg font-semibold mb-4">
                Subscribe to our newsletter
              </h2>
              <form className="relative max-w-lg">
                <input
                  className="w-full rounded-xl border-gray-200 bg-gray-100 p-4 pr-32 text-sm"
                  type="email"
                  placeholder="Your Email Address"
                />
                <button
                  type="submit"
                  className="absolute -right-[0.2rem] top-1/2 -translate-y-1/2 rounded-r-xl  px-5 py-[1.04rem] text-sm font-medium text-white bg-[#387677] hover:bg-[#387677e9] transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="flex flex-col lg:flex-row items-start justify-center gap-4">
              <div className="flex flex-col items-start justify-start space-y-2 text-left text-zinc-300">
                <H4>Call Us</H4>
                <P>+91 1234567890</P>
              </div>
              <div className="flex flex-col items-start justify-start space-y-2 text-left text-zinc-300">
                <H4>Email Us</H4>
                <P>contact@yourdomain.com</P>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EFooter;
