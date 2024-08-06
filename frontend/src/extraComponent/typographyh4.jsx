import { twMerge } from "tailwind-merge";

export function H4({ className, children }) {
  return (
    <h4
      className={twMerge(
        className,
        "scroll-m-20 text-xl font-semibold tracking-tight"
      )}
    >
      {children}
    </h4>
  );
}
