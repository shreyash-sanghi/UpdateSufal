import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io5";
import { Link } from "react-router-dom";
import { H1 } from "./typographyh1";
import { H3 } from "./typographyh3";

const EFooterTwo = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl space-y-8 px-6 py-16 sm:px-6 lg:space-y-8 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3">
          <div>
            <H1 className="text-zinc-800 text-lg font-semibold">HirePro</H1>

            <p className="mt-4 max-w-xs text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
              cupiditate quae nam molestias.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div className="w-full">
              <h2 className="text-[#171b4f] text-xl font-semibold mb-4">
                Navigation
              </h2>
              <ul className="space-y-2">
                {["Home", "Job list", "Companies", "Pricing"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Link
                      to="#"
                      className="text-zinc-600 hover:text-[#171b4f] transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full">
              <h2 className="text-[#171b4f] text-xl font-semibold mb-4">
                Company
              </h2>
              <ul className="space-y-2">
                {["About Us", "Our Team", "Read FAQ", "Contact"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Link
                      to="#"
                      className="text-zinc-600 hover:text-[#171b4f] transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full">
              <h2 className="text-[#171b4f] text-xl font-semibold mb-4">
                Contact
              </h2>
              <ul className="space-y-2">
                {["+1 234 5678 10", "help@support.com"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Link
                      to="#"
                      className="text-zinc-600 hover:text-[#171b4f] transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full">
              <h2 className="text-[#171b4f] text-xl font-semibold mb-4">
                Offices
              </h2>
              <ul className="space-y-2">
                {[
                  "8880 Santa Monica Blvd Suite 84562West Hollywood, CA 90069",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Link
                      to="#"
                      className="text-zinc-600 hover:text-[#171b4f] transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-4 lg:pt-8 ">
          <div className="space-y-8 flex flex-col lg:flex-row items-center justify-between">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-center gap-x-8">
              <span className="max-w-sm">
                {" "}
                <H3 className="text-[#171b4f] text-balance">
                  Find your next great opportunity!
                </H3>
              </span>
              <form className="relative w-full lg:max-w-lg">
                <input
                  className="w-full rounded-xl border-[1px] border-gray-300 bg-gray-100 p-4 pr-32 text-sm"
                  type="email"
                  placeholder="Your Email Address"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 rounded-xl bg-[#28214c] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#ff6400] transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="flex space-x-4 items-center ">
              {[FaFacebookF, IoLogoTwitter, IoLogoInstagram, ImLinkedin2].map(
                (Icon, index) => (
                  <Link
                    key={index}
                    to="#"
                    className="text-[#171b4f] bg-zinc-300 p-2 rounded-full transition-colors duration-200"
                  >
                    <Icon size={24} />
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EFooterTwo;
