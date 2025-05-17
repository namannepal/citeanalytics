import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconRippleProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  iconSize?: number;
  iconColor?: string;
  borderColor?: string;
  inset?: string;
}

export function IconRipple({
  icon: Icon,
  iconSize = 24,
  iconColor = "#ddd",
  borderColor = "#ddd",
  inset = "10px",
}: IconRippleProps) {
  const customBorderStyle = {
    borderColor,
  };
  const insetStyle = {
    top: `-${inset}`,
    bottom: `-${inset}`,
    left: `-${inset}`,
    right: `-${inset}`,
  };

  return (
    <div className={cn("group relative flex items-center justify-center")}>
      <Icon size={iconSize} color={iconColor} />
      <div
        className={cn("absolute -inset-4 animate-ping rounded-full border-2")}
        style={{ ...customBorderStyle, ...insetStyle }}
      />
    </div>
  );
}