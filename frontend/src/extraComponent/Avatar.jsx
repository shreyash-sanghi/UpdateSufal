import React from "react";

import { cn } from "@/lib/utils";

const AvatarCircles = ({ numPeople, className, avatarUrls }) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <img
          key={index}
          className="w-10 md:h-12 h-10 md:w-12 rounded-full border-2 border-white"
          src={url}
          width={40}
          height={40}
          alt={`Avatar ${index + 1}`}
        />
      ))}
      {numPeople ? (
        <a
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
          href=""
        >
          +{numPeople}
        </a>
      ) : null}
    </div>
  );
};

export default AvatarCircles;
