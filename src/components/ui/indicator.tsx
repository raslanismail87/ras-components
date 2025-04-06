import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const indicatorVariants = cva(
  "absolute inline-flex items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        default: "bg-red-500 text-white",
        secondary: "bg-zinc-500 text-white",
        outline: "bg-white text-zinc-900 border border-zinc-200 dark:bg-zinc-950 dark:text-zinc-50 dark:border-zinc-800",
      },
      size: {
        default: "h-5 w-5 text-xs",
        sm: "h-3.5 w-3.5 text-[10px]",
        lg: "h-6 w-6 text-sm",
      },
      position: {
        "top-right": "top-0 right-0 -translate-y-1/2 translate-x-1/2",
        "top-left": "top-0 left-0 -translate-y-1/2 -translate-x-1/2",
        "bottom-right": "bottom-0 right-0 translate-y-1/2 translate-x-1/2",
        "bottom-left": "bottom-0 left-0 translate-y-1/2 -translate-x-1/2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      position: "top-right",
    },
  }
)

export interface IndicatorProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "size" | "content"> {
  variant?: "default" | "secondary" | "outline"
  size?: "default" | "sm" | "lg"
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left"
  content?: React.ReactNode
  showZero?: boolean
  max?: number
}

export function Indicator({
  className,
  variant,
  size,
  position,
  content,
  showZero = false,
  max,
  children,
  ...props
}: IndicatorProps) {
  const displayContent = React.useMemo(() => {
    if (content === undefined || content === null) return null
    if (typeof content === "number" && content === 0 && !showZero) return null
    if (typeof content === "number" && max !== undefined && content > max) {
      return `${max}+`
    }
    return content
  }, [content, max, showZero])

  if (!displayContent && !children) {
    return null
  }

  return (
    <div className="relative inline-flex">
      {children}
      {displayContent !== null && (
        <div
          className={cn(indicatorVariants({ variant, size, position, className }))}
          {...props}
        >
          {displayContent}
        </div>
      )}
    </div>
  )
}
