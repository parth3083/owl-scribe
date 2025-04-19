import { cn } from "../lib/utils";
import Link from "next/link";
import React, { AnchorHTMLAttributes, ReactNode } from "react";

interface IShinyButton extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children?: ReactNode;
  href?: string;
}
function ShinyButton({ children, className, href, ...props }: IShinyButton) {
  return (
    <Link
      prefetch={true}
      href={href ?? "#"}
      className={cn(
        "group relative flex transform items-center justify-center border rounded-md gap-2 bg-[#8B4513] overflow-hidden whitespace-nowrap border-white text-base/7 font-medium text-white transition-all duration-300 hover:ring-2 hover:ring-[#8B4513] hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="ease-[cubic-bezier(0.19,1,0.22,1)] absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-[35deg] bg-white opacity-20 transition-all duration-500 group-hover:left-[120%]" />
    </Link>
  );
}

export default ShinyButton;
