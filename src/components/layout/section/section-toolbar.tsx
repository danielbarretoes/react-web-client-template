import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { PanelLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/layout/sidebar/sidebar-context";

interface SectionToolbarProps {
  title?: string;
  children?: ReactNode;
  className?: string;
}

function SectionToolbar({ title, children, className }: SectionToolbarProps) {
  const { isMobileOpen, toggleMobileSidebar } = useSidebar();

  return (
    <div
      className={cn(
        "flex h-14 p-3 md:p-4 items-center w-full border-b border-border/50 transition-all duration-300 overflow-hidden shrink-0 gap-2",
        className
      )}
    >
      {/* Botón de menú móvil - solo visible en móvil cuando el sidebar está cerrado */}
      <Button
        variant="ghost"
        size="icon"
        className={cn("md:hidden", isMobileOpen && "hidden")}
        onClick={toggleMobileSidebar}
        aria-label="Abrir menú"
      >
        <PanelLeft className="h-6 w-6" />
      </Button>
      {title && <h1 className="m-0 text-xl font-semibold">{title}</h1>}
      {children}
    </div>
  );
}

export default SectionToolbar;
