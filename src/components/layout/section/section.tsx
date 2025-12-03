import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import GlassBackground from "../utils/glass-background";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

function Section({ children, className }: SectionProps) {
  return (
    <div
      className={cn(
        "flex flex-col h-full rounded-none md:rounded-3xl overflow-hidden overflow-x-hidden min-w-0",
        className
      )}
    >
      <GlassBackground className="flex flex-col h-full rounded-none md:rounded-3xl min-w-0">
        {children}
      </GlassBackground>
    </div>
  );
}

export default Section;
