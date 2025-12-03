import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassBackgroundProps {
  children: ReactNode;
  className?: string;
  opacity?: number; // 0-100, por defecto 40
}

function GlassBackground({
  children,
  className,
  opacity = 80,
}: GlassBackgroundProps) {
  // Asegurar que opacity esté en el rango válido
  const validOpacity = Math.max(0, Math.min(100, opacity));

  return (
    <div
      className={cn(
        "relative backdrop-blur-xl backdrop-saturate-150 overflow-hidden",
        className
      )}
    >
      {/* Light mode background */}
      <div
        className="absolute inset-0 dark:hidden rounded-none md:rounded-3xl"
        style={{
          backgroundColor: `rgb(255 255 255 / ${validOpacity}%)`,
        }}
      />
      {/* Dark mode background */}
      <div
        className="absolute inset-0 hidden dark:block rounded-none md:rounded-3xl"
        style={{
          backgroundColor: `rgb(0 0 0 / ${validOpacity}%)`,
        }}
      />
      <div className="relative flex flex-col h-full min-h-0">{children}</div>
    </div>
  );
}

export default GlassBackground;
