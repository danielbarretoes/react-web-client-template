import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSidebar } from "./use-sidebar";

interface SidebarNavItemProps {
  path: string;
  label: string;
  icon: LucideIcon;
}

function SidebarNavItem({ path, label, icon: Icon }: SidebarNavItemProps) {
  const { isCollapsed } = useSidebar();

  return (
    <NavLink
      to={path}
      end={path === "/"}
      className={({ isActive }) =>
        cn(
          "flex items-center rounded-3xl text-sm font-medium transition-all duration-300 ease-in-out group",
          "hover:bg-accent hover:text-accent-foreground hover:[&_svg]:text-accent-foreground",
          isActive
            ? "bg-primary/10 text-primary [&_svg]:text-primary"
            : "text-muted-foreground [&_svg]:text-muted-foreground",
          isCollapsed
            ? "justify-center size-10 p-0 gap-0 mx-auto"
            : "justify-start h-10 px-3 py-2 gap-3 w-full"
        )
      }
    >
      <Icon className="size-6 shrink-0 transition-all duration-300" />
      <span
        className={cn(
          "transition-all duration-300 ease-in-out whitespace-nowrap font-medium",
          isCollapsed
            ? "max-w-0 opacity-0 overflow-hidden gap-0"
            : "max-w-[200px] opacity-100"
        )}
      >
        {label}
      </span>
    </NavLink>
  );
}

export default SidebarNavItem;
