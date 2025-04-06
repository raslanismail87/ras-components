import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const actionsVariants = cva(
  "flex gap-2",
  {
    variants: {
      variant: {
        default: "",
        vertical: "flex-col",
      },
      align: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
      },
    },
    defaultVariants: {
      variant: "default",
      align: "start",
    },
  }
)

export interface ActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "vertical"
  align?: "start" | "center" | "end" | "between"
}

export function Actions({
  className,
  variant,
  align,
  children,
  ...props
}: ActionsProps) {
  return (
    <div
      className={cn(actionsVariants({ variant, align, className }))}
      {...props}
    >
      {children}
    </div>
  )
}
