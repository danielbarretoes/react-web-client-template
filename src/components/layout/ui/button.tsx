import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { Button as ShadcnButton, buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface CollapsibleButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  icon?: LucideIcon;
  label?: string;
  collapsed?: boolean;
  className?: string;
}

function CollapsibleButton({
  icon: Icon,
  label,
  collapsed = false,
  className,
  variant = "outline",
  size = "default",
  ...props
}: CollapsibleButtonProps) {
  return (
    <ShadcnButton
      variant={variant}
      size={size}
      className={cn(
        "rounded-full border transition-all duration-300",
        collapsed ? "justify-center px-0" : "gap-2",
        className
      )}
      {...props}
    >
      {Icon && <Icon className="size-4 shrink-0" />}
      {!collapsed && label && (
        <span className="whitespace-nowrap">{label}</span>
      )}
    </ShadcnButton>
  );
}

export default CollapsibleButton;
