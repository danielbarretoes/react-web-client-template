import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSidebar } from "./sidebar-context";

interface SidebarNavItemProps {
  path: string;
  label: string;
  icon: LucideIcon;
}

function SidebarNavItem({ path, label, icon: Icon }: SidebarNavItemProps) {
  const { isCollapsed, closeMobileSidebar } = useSidebar();

  const handleClick = () => {
    // Cerrar el sidebar móvil cuando se hace clic en un enlace
    closeMobileSidebar();
  };

  return (
    <NavLink
      to={path}
      end={path === "/"}
      onClick={handleClick}
      className={({ isActive }) =>
        cn(
          "flex items-center rounded-3xl text-sm font-medium transition-all duration-300 ease-in-out group",
          "hover:bg-accent hover:text-accent-foreground hover:[&_svg]:text-accent-foreground",
          isActive
            ? "bg-primary/10 text-primary [&_svg]:text-primary"
            : "text-muted-foreground [&_svg]:text-muted-foreground",
          isCollapsed
            ? "justify-center size-10 p-0 gap-0 mx-auto"
            : "justify-start h-10 px-3 py-2 gap-3 w-full min-w-0"
        )
      }
    >
      <Icon className="size-6 shrink-0 transition-all duration-300" />
      <span
        className={cn(
          "transition-all duration-300 ease-in-out whitespace-nowrap font-medium min-w-0",
          isCollapsed
            ? "max-w-0 opacity-0 overflow-hidden gap-0"
            : "max-w-[200px] opacity-100 overflow-hidden text-ellipsis"
        )}
      >
        {label}
      </span>
    </NavLink>
  );
}

export default SidebarNavItem;
