import { twMerge } from "tailwind-merge";

export function H1({ className, children }) {
  return (
    <h1
      className={twMerge(
        "scroll-m-20 font-extrabold tracking-normal text-4xl text-left lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}
