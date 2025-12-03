import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassBackgroundProps {
  children: ReactNode;
  className?: string;
}

function GlassBackground({ children, className }: GlassBackgroundProps) {
  return (
    <div className={cn("relative backdrop-blur-xl backdrop-saturate-150 bg-white/40 dark:bg-black/40", className)}>
      {children}
    </div>
  );
}

export default GlassBackground;
