import { twMerge } from "tailwind-merge";

export function H3({ className, children, style }) {
  return (
    <h3
      className={twMerge(
        "scroll-m-20 text-2xl font-700 tracking-tight",
        className
      )}
      style={style}
    >
      {children}
    </h3>
  );
}
