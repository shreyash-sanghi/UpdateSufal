import React, { useEffect, useState } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import { Motion } from "./Motion";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Button from "./Button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./Sheet";
import { H3 } from "./typographyh3";
import { colorTheme } from "./colorTheme.js";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const menuOptions = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about-us" },
    {
      title: "Page",
      path: "/page",
      submenu: [{ title: "Page Detail", path: "/page/page-detail" }],
    },
    { title: "Services", path: "/services" },
  ];

  useEffect(() => {
    setIsOpen(false);
    setExpandedMenu(null);
  }, [location.pathname]);

  const handleMenuClick = (option) => {
    if (option.submenu) {
      setExpandedMenu(expandedMenu === option.title ? null : option.title);
    } else {
      setIsOpen(false);
      setExpandedMenu(null);
    }
  };

  return (
    <div className="relative w-full z-20">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <div className="w-full flex items-center justify-center py-4 px-4 z-20 pt-4 ">
          <div className="max-w-6xl w-full flex items-center justify-between">
            <div className="text-xl font-semibold tracking-wide select-none">
              <Link to={"/"}>
                <H3>jobify</H3>
              </Link>
            </div>

            <nav className="hidden lg:flex items-center justify-center gap-10">
              {menuOptions.map((option) => (
                <div key={option.path} className="relative group">
                  <Link
                    to={option.submenu ? null : option.path}
                    className={`text-base font-light ${
                      option.path === location.pathname
                        ? "text-[#36787a] font-semibold"
                        : `text-[${colorTheme.lightZinc}]`
                    } hover:text-[#245153] transition-colors flex items-center`}
                  >
                    {option.title}
                    {option.submenu && <BiChevronDown className="ml-1" />}
                  </Link>
                  {option.submenu && (
                    <div className="absolute left-0 mt-3  p-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        {option.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className="block px-4 py-3 text-sm text-gray-600 hover:text-[#245153] hover:bg-zinc-200 rounded-lg"
                            role="menuitem"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <Button
              bg
              href="/get-started"
              className={
                "bg-[#36787a]  transition-all hover:bg-[#245153] rounded-md    px-6 py-3 hidden lg:flex"
              }
            >
              Contact Us
            </Button>

            <SheetTrigger asChild className="lg:hidden">
              <button onClick={() => setIsOpen(true)} aria-label="Open menu">
                <CgMenuGridO size={32} />
              </button>
            </SheetTrigger>
          </div>
        </div>
        <SheetContent
          side="left"
          // close={handleMenu}
          className="bg-zinc-50  w-full h-full p-3 pt-8"
        >
          <SheetHeader>
            <SheetTitle>
              {" "}
              <Link to={"/"} onClick={() => setIsOpen(false)}>
                <H3>jobify</H3>
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div className="flex  flex-col h-full  ">
            <nav className="flex-1 mt-6 grid gap-y-4 pt-4 ">
              {menuOptions.map((option) => (
                <div key={option.path}>
                  <div
                    onClick={() => handleMenuClick(option)}
                    className={`flex items-center justify-between rounded-md p-1 py-2 pb-3 px-2 text-sm font-semibold ${
                      option.path === location.pathname
                        ? "text-[#36787a] underline underline-offset-8 font-bold"
                        : "text-zinc-800"
                    } hover:bg-zinc-200`}
                  >
                    <span className="ml-3 text-base font-normal">
                      {option.title}
                    </span>
                    {option.submenu ? (
                      <BiChevronDown
                        className={`h-4 w-4 transition-transform ${
                          expandedMenu === option.title ? "rotate-180" : ""
                        }`}
                      />
                    ) : (
                      <BiChevronRight className="h-4 w-4" />
                    )}
                  </div>
                  {option.submenu && expandedMenu === option.title && (
                    <div className="ml-6 mt-2 space-y-2">
                      {option.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          onClick={() => setIsOpen(false)}
                          className="block p-2 text-sm text-gray-600 hover:text-[#245153] hover:bg-zinc-200 rounded-md"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-3 space-y-2">
              <div className="space-y-1 w-full">
                <Link to={"/auth?mode=signup"} onClick={() => setIsOpen(false)}>
                  <button
                    type="button"
                    className="w-full rounded-md border border-[#36787a] px-3 py-[0.5rem] text-sm font-semibold text-[#36787a] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#36787a]"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
              <div className="space-y-1 w-full">
                <Link to={"/auth?mode=login"} onClick={() => setIsOpen(false)}>
                  <button
                    type="button"
                    className="w-full rounded-md bg-[#36787a] px-3 py-[0.5rem] text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#36787a]"
                  >
                    Log In
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default function EJobifyLandingPage() {
  return (
    <>
      <Navbar />
      <MaxWidthWrapper className="px-2 sm:px-4 md:px-0 overflow-auto  py-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2  lg:gap-8 place-items-center space-y-6">
          <div className="flex flex-col space-y-6 sm:space-y-10 lg:items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto">
            <Motion direction="left">
              <h1 className=" font-normal leading-tight text-teal-950  text-4xl sm:text-5xl lg:text-6xl">
                Hire with Confidence, Find Your Dream Team
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
            <div className="flex flex-row items-center justify-center lg:justify-start gap-4 w-full">
              <Motion direction="left">
                <Button
                  bg
                  href="/get-started"
                  className={
                    "bg-[#36787a]  transition-all hover:bg-[#245153] rounded-md    px-10 py-4 flex text-wrap"
                  }
                >
                  Get Started
                </Button>
              </Motion>
              <Motion direction="left">
                <Button
                  variant={"link"}
                  href="/get-started"
                  className={"text-wrap"}
                >
                  Book a call
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
    </>
  );
}
