import { PanelLeft } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useSidebar } from "./sidebar-context";
import CollapsibleButton from "@/components/layout/ui/collapsible-button";

interface SidebarToolbarProps {
  children?: ReactNode;
  title?: string;
  hideTitle?: boolean;
}

function SidebarToolbar({ children }: SidebarToolbarProps) {
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <div
      className={cn(
        "flex items-center w-full transition-all duration-300 min-w-0",
        isCollapsed ? "justify-end" : "justify-between"
      )}
    >
      {children ? (
        children
      ) : (
        <>
          <div className="ml-auto text-muted-foreground">
            <CollapsibleButton
              icon={PanelLeft}
              collapsed={isCollapsed}
              onClick={toggleSidebar}
              size="icon"
              variant="ghost"
              className="bg-transparent border-none"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default SidebarToolbar;
