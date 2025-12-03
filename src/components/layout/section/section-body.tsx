import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionBodyProps {
  children: ReactNode;
  className?: string;
}

function SectionBody({ children, className }: SectionBodyProps) {
  return (
    <div
      className={cn(
        "flex-1 p-3 md:p-2 overflow-hidden min-w-0 flex flex-col min-h-0",
        className
      )}
    >
      {children}
    </div>
  );
}

export default SectionBody;
