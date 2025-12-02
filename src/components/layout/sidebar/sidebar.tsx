import { Menu, PanelLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSidebar } from "./sidebar-context";
import { navItems } from "@/components/router";
import SidebarNavItem from "./sidebar-nav-item";
import CollapsibleButton from "@/components/layout/ui/button";

const SIDEBAR_WIDTH = 320; // 16 * 20 = 320px (w-64)
const COLLAPSED_WIDTH = 80; // Un poco más ancho cuando está colapsado

function Sidebar() {
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <aside
      className="flex flex-col h-full p-3 transition-all duration-300 ease-in-out shrink-0"
      style={{
        width: isCollapsed ? `${COLLAPSED_WIDTH}px` : `${SIDEBAR_WIDTH}px`,
      }}
    >
      <div className="flex flex-col h-full border border-border rounded-3xl shadow-md">
        {/* Header with toggle button */}
        <div
          className={cn(
            "flex h-14 items-center border-b transition-all duration-300",
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
              icon={isCollapsed ? Menu : PanelLeft}
              collapsed={isCollapsed}
              onClick={toggleSidebar}
              size="icon"
              variant="outline"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav
          className={cn(
            "flex-1 space-y-1 py-4 transition-all duration-300",
            isCollapsed ? "px-2" : "px-4"
          )}
        >
          {navItems.map((item) => (
            <SidebarNavItem
              key={item.path}
              path={item.path}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
