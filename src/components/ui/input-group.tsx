import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const inputGroupVariants = cva(
  "flex",
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

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "vertical"
}

export function InputGroup({
  className,
  variant,
  children,
  ...props
}: InputGroupProps) {
  return (
    <div
      className={cn(
        inputGroupVariants({ variant }),
        variant === "default" && [
          "[&>*:first-child]:rounded-r-none",
          "[&>*:not(:first-child):not(:last-child)]:rounded-none [&>*:not(:first-child):not(:last-child)]:border-l-0",
          "[&>*:last-child]:rounded-l-none [&>*:last-child]:border-l-0",
        ],
        variant === "vertical" && [
          "[&>*:first-child]:rounded-b-none",
          "[&>*:not(:first-child):not(:last-child)]:rounded-none [&>*:not(:first-child):not(:last-child)]:border-t-0",
          "[&>*:last-child]:rounded-t-none [&>*:last-child]:border-t-0",
        ],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
