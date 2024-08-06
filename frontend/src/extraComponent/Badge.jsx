import { twMerge } from "tailwind-merge";

const Badge = ({ children, className, icon }) => {
  return (
    <div
      className={twMerge(
        "inline-flex  items-center justify-center px-4 py-1 transition ease-out text-orange-600 hover:duration-300 bg-orange-200 rounded-full mb-2 ",
        className
      )}
    >
      <span className="text-sm items-center justify-center">{children}</span>
      {icon ? icon : null}
    </div>
  );
};

export default Badge;
