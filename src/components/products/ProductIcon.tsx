import {
  BarChart3,
  Boxes,
  Cloud,
  GitBranch,
  Shield,
  type LucideIcon,
} from "lucide-react";
import type { Product } from "@/types";
import { cn } from "@/lib/utils/cn";

const iconMap: Record<Product["icon"], LucideIcon> = {
  core: Boxes,
  flow: GitBranch,
  cloud: Cloud,
  analytics: BarChart3,
  shield: Shield,
};

type ProductIconProps = {
  icon: Product["icon"];
  className?: string;
  color?: string;
};

export function ProductIcon({ icon, className, color }: ProductIconProps) {
  const Icon = iconMap[icon];
  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-[0.85rem] border border-border bg-elevated",
        className,
      )}
      style={color ? { color } : undefined}
      aria-hidden
    >
      <Icon className="h-5 w-5" strokeWidth={1.75} />
    </span>
  );
}
