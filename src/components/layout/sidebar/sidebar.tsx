import { PanelLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSidebar } from "./use-sidebar";
import { navGroups } from "@/components/router";
import SidebarNavGroup from "./sidebar-nav-group";
import CollapsibleButton from "@/components/layout/ui/collapsible-button";
import GlassBackground from "../utils/glass-background";

const SIDEBAR_WIDTH = 320; // 16 * 20 = 320px (w-64)
const COLLAPSED_WIDTH = 96; // Aumentado para evitar que se corte el fondo circular

function Sidebar() {
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <aside
      className="flex flex-col h-full transition-all duration-300 ease-in-out shrink-0"
      style={{
        width: isCollapsed ? `${COLLAPSED_WIDTH}px` : `${SIDEBAR_WIDTH}px`,
        padding: "12px",
      }}
    >
      <div className="flex flex-col h-full border border-border rounded-3xl shadow-md overflow-hidden">
        <GlassBackground className="flex flex-col h-full rounded-3xl">
          {/* Header with toggle button */}
          <div
            className={cn(
              "flex h-14 items-center border-b border-border/50 transition-all duration-300",
              isCollapsed ? "justify-center px-0" : "justify-between"
            )}
          >
            {!isCollapsed && (
              <h2 className="text-sm font-semibold transition-all duration-300 ease-in-out whitespace-nowrap pl-6 pr-4">
                Template
              </h2>
            )}
            <div className={cn(isCollapsed ? "mx-auto" : "px-4")}>
              <CollapsibleButton
                icon={PanelLeft}
                collapsed={isCollapsed}
                onClick={toggleSidebar}
                size="icon"
                variant="ghost"
                className="bg-transparent border-none"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav
            className={cn(
              "flex-1 space-y-4 py-4 transition-all duration-300 overflow-y-auto",
              isCollapsed ? "px-2" : "px-4"
            )}
          >
            {navGroups.map((group, index) => (
              <SidebarNavGroup
                key={group.title || `group-${index}`}
                group={group}
              />
            ))}
          </nav>
        </GlassBackground>
      </div>
    </aside>
  );
}

export default Sidebar;
