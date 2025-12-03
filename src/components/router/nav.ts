import type { LucideIcon } from "lucide-react";
import { Home, Users, Settings } from "lucide-react";

export interface NavItem {
  path: string;
  label: string;
  icon: LucideIcon;
}

export interface NavGroup {
  title?: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    title: "Main",
    items: [
      { path: "/", label: "Home", icon: Home },
      { path: "/users", label: "Users", icon: Users },
    ],
  },
  {
    title: "Settings",
    items: [{ path: "/settings", label: "Settings", icon: Settings }],
  },
];

export default navGroups;
