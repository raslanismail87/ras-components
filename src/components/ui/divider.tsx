import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const dividerVariants = cva(
  "shrink-0 bg-zinc-200 dark:bg-zinc-800",
  {
    variants: {
      orientation: {
        horizontal: "h-[1px] w-full",
        vertical: "h-full w-[1px]",
      },
      variant: {
        default: "",
        dashed: "border-dashed",
        dotted: "border-dotted",
      },
      size: {
        default: "",
        sm: "h-[0.5px] w-[0.5px]",
        lg: "h-[2px] w-[2px]",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
      variant: "default",
      size: "default",
    },
  }
)

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
  variant?: "default" | "dashed" | "dotted"
  size?: "default" | "sm" | "lg"
  label?: string
}

export function Divider({
  className,
  orientation,
  variant,
  size,
  label,
  ...props
}: DividerProps) {
  return (
    <div
      className={cn(
        "flex items-center",
        orientation === "horizontal" ? "w-full" : "h-full",
        className
      )}
      {...props}
    >
      {label ? (
        <>
          <div className={cn(dividerVariants({ orientation, variant, size }))} />
          <span className="px-2 text-xs text-zinc-500 dark:text-zinc-400">{label}</span>
          <div className={cn(dividerVariants({ orientation, variant, size }))} />
        </>
      ) : (
        <div className={cn(dividerVariants({ orientation, variant, size }))} />
      )}
    </div>
  )
}
