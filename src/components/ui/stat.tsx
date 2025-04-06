import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const statVariants = cva(
  "rounded-lg p-4",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800",
        outline: "border border-zinc-200 dark:border-zinc-800",
        ghost: "hover:bg-zinc-100 dark:hover:bg-zinc-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "ghost"
  title?: string
  value?: string | number
  description?: string
  icon?: React.ReactNode
  trend?: "up" | "down" | "neutral"
  trendValue?: string | number
}

export function Stat({
  className,
  variant,
  title = "Total Revenue",
  value = "$45,231.89",
  description = "20.1% from last month",
  icon,
  trend = "up",
  trendValue,
  children,
  ...props
}: StatProps) {
  return (
    <div
      className={cn(statVariants({ variant, className }))}
      {...props}
    >
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {title}
          </p>
          <div className="flex items-baseline gap-2">
            <p className="text-2xl font-semibold">{value}</p>
            {trendValue && (
              <span className={cn(
                "text-xs font-medium",
                trend === "up" ? "text-green-500" : trend === "down" ? "text-red-500" : "text-zinc-500"
              )}>
                {trendValue}
              </span>
            )}
          </div>
          {description && (
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              {description}
            </p>
          )}
        </div>
        {icon && (
          <div className="text-zinc-500 dark:text-zinc-400">
            {icon}
          </div>
        )}
      </div>
      {children}
    </div>
  )
}
