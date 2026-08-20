import { cn } from "@/lib/utils/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
  as?: "div" | "section" | "header" | "footer" | "main" | "nav";
};

export function Container({
  children,
  className,
  wide = false,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={cn(wide ? "container-wide" : "container-page", className)}>
      {children}
    </Tag>
  );
}
