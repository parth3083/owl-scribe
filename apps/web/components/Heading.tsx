import React, { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/utils";

interface HeadingProps extends HTMLAttributes<HTMLHeadElement> {
  children: ReactNode;
  className?: string;
  description?: string;
}

function Heading({ children, className, description,...props }: HeadingProps) {
  return (
    <div
      className={cn(
        " flex flex-col items-center gap-2 text-center",
        className
      )}
    >
          <h1 className="text-5xl font-bold "
              {...props}
          >{children}</h1>
      <p className="text-md text-black font-medium max-w-prose">
        {description}
      </p>
    </div>
  );
}

export default Heading;
