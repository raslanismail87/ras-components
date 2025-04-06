import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const joinVariants = cva(
  "inline-flex",
  {
    variants: {
      variant: {
        default: "",
        vertical: "flex-col",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface JoinProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "vertical"
}

export function Join({
  className,
  variant,
  children,
  ...props
}: JoinProps) {
  return (
    <div
      className={cn(
        joinVariants({ variant }),
        variant === "default" && [
          "[&>*:first-child]:rounded-r-none",
          "[&>*:not(:first-child):not(:last-child)]:rounded-none",
          "[&>*:last-child]:rounded-l-none",
        ],
        variant === "vertical" && [
          "[&>*:first-child]:rounded-b-none",
          "[&>*:not(:first-child):not(:last-child)]:rounded-none",
          "[&>*:last-child]:rounded-t-none",
        ],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
