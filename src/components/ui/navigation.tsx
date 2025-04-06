import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const navigationVariants = cva(
  "rounded-lg border",
  {
    variants: {
      variant: {
        default: "bg-white border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800",
        outline: "border-zinc-200 dark:border-zinc-800",
        ghost: "border-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface NavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "ghost"
  title?: string
  description?: string
}

export function Navigation({
  className,
  variant,
  title,
  description,
  children,
  ...props
}: NavigationProps) {
  return (
    <div
      className={cn(navigationVariants({ variant, className }))}
      {...props}
    >
      {title && (
        <div className="border-b border-zinc-200 p-4 dark:border-zinc-800">
          <h3 className="font-medium text-zinc-900 dark:text-zinc-50">{title}</h3>
          {description && (
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
          )}
        </div>
      )}
      <div className="p-4">
        {children}
      </div>
    </div>
  )
}
