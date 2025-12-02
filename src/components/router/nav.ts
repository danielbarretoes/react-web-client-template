import type { LucideIcon } from "lucide-react";
import { Home, Users, Settings } from "lucide-react";

export interface NavItem {
  path: string;
  label: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { path: "/", label: "Home", icon: Home },
  { path: "/users", label: "Users", icon: Users },
  { path: "/settings", label: "Settings", icon: Settings },
];

export default navItems;
