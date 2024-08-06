import { twMerge } from "tailwind-merge";

export function P({ className, children, style }) {
  return (
    <p
      className={twMerge("leading-7", className)}
      style={{ fontFamily: "PolySansSlim", ...style }}
    >
      {children}
    </p>
  );
}
