import { cn } from "../lib/utils";
import React, { ReactNode } from "react";

interface MaxWidthProps {
  className?: string;
  children: ReactNode;
}

function MaxWidth({ children, className }: MaxWidthProps) {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen font-dan px-2.5 md:px-20 ",
        className
      )}
    >
      {children}
    </div>
  );
}

export default MaxWidth;
