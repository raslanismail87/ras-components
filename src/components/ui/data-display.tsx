import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const dataDisplayVariants = cva(
  "rounded-lg border p-4",
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

export interface DataDisplayProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "ghost"
  title?: string
  description?: string
  icon?: React.ReactNode
}

export function DataDisplay({
  className,
  variant,
  title,
  description,
  icon,
  children,
  ...props
}: DataDisplayProps) {
  return (
    <div
      className={cn(dataDisplayVariants({ variant, className }))}
      {...props}
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div className="flex-shrink-0 text-zinc-500 dark:text-zinc-400">
            {icon}
          </div>
        )}
        <div className="flex-1">
          {title && (
            <h3 className="font-medium text-zinc-900 dark:text-zinc-50">{title}</h3>
          )}
          {description && (
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
          )}
          {children && <div className="mt-3">{children}</div>}
        </div>
      </div>
    </div>
  )
}
