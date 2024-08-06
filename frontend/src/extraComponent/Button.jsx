import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const Button = ({
  children,
  className,
  type,
  px,
  icon,
  bg,
  border,
  text,
  href,
  containerWidth,
  onClick,
  variant,
}) => {
  const baseClasses =
    "flex items-center justify-center gap-2 text-center font-semibold py-3 px-6 rounded-xl transition-colors duration-300";

  const variantClasses = {
    bg: "bg-[#ff6400] hover:bg-[#1f6351] text-zinc-50",
    border:
      "border border-[#ff6400] text-[#ff6400] hover:bg-[#ff6400] hover:text-zinc-50",
    text: "text-[#ff6400] hover:underline",
    outline:
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-[7px] hover:underline",
  };

  const classes = twMerge(
    baseClasses,
    bg && variantClasses.bg,
    border && variantClasses.border,
    text && variantClasses.text,
    variant && variantClasses[variant],
    containerWidth ? "w-full" : "w-fit",
    className
  );

  const content = (
    <button type={type} className={classes} onClick={onClick}>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );

  return href ? (
    <Link to={href} className={containerWidth ? "w-full block" : "w-fit"}>
      {content}
    </Link>
  ) : (
    content
  );
};

export default Button;
