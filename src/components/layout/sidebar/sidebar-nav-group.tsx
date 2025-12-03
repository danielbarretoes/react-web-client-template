import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSidebar } from "./sidebar-context";
import SidebarNavItem from "./sidebar-nav-item";
import type { NavGroup } from "@/components/router/nav";

interface SidebarNavGroupProps {
  group: NavGroup;
  defaultCollapsed?: boolean;
}

function SidebarNavGroup({
  group,
  defaultCollapsed = false,
}: SidebarNavGroupProps) {
  const { isCollapsed } = useSidebar();
  const [isGroupCollapsed, setIsGroupCollapsed] = useState(defaultCollapsed);

  const toggleGroup = () => {
    setIsGroupCollapsed(!isGroupCollapsed);
  };

  if (!group.title) {
    // Si no hay título, renderizar solo los items
    return (
      <div className="space-y-1">
        {group.items.map((item) => (
          <SidebarNavItem
            key={item.path}
            path={item.path}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-1">
      {!isCollapsed && (
        <button
          onClick={toggleGroup}
          className={cn(
            "w-full flex items-center justify-between px-4 py-2.5 rounded-lg",
            "text-xs font-semibold text-muted-foreground uppercase tracking-wider",
            "hover:bg-accent/50 hover:text-accent-foreground",
            "transition-all duration-200 ease-in-out"
          )}
        >
          <span>{group.title}</span>
          {isGroupCollapsed ? (
            <ChevronDown className="size-4" />
          ) : (
            <ChevronUp className="size-4" />
          )}
        </button>
      )}
      <div
        className={cn(
          "space-y-1.5 transition-all duration-300 ease-in-out overflow-hidden",
          isGroupCollapsed && !isCollapsed
            ? "max-h-0 opacity-0 -mt-2"
            : "max-h-[500px] opacity-100 pt-0.5"
        )}
      >
        {group.items.map((item) => (
          <SidebarNavItem
            key={item.path}
            path={item.path}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default SidebarNavGroup;
