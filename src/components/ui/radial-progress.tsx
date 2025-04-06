import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const radialProgressVariants = cva(
  "relative inline-flex items-center justify-center rounded-full",
  {
    variants: {
      size: {
        default: "h-20 w-20",
        sm: "h-16 w-16",
        lg: "h-24 w-24",
      },
      variant: {
        default: "bg-zinc-100 dark:bg-zinc-800",
        outline: "border-2 border-zinc-200 dark:border-zinc-800",
      },
      color: {
        default: "text-zinc-900 dark:text-zinc-50",
        primary: "text-blue-500",
        secondary: "text-zinc-500",
        success: "text-green-500",
        warning: "text-yellow-500",
        danger: "text-red-500",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
      color: "default",
    },
  }
)

export interface RadialProgressProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "sm" | "lg"
  variant?: "default" | "outline"
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger"
  value?: number
  thickness?: number
  showValue?: boolean
  valueFormat?: (value: number) => string
}

export function RadialProgress({
  className,
  size,
  variant,
  color,
  value = 75,
  thickness = 4,
  showValue = true,
  valueFormat = (value) => `${value}%`,
  ...props
}: RadialProgressProps) {
  const normalizedValue = Math.min(100, Math.max(0, value))
  const radius = 45
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (normalizedValue / 100) * circumference
  
  return (
    <div
      className={cn(radialProgressVariants({ size, variant, color, className }))}
      {...props}
    >
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-zinc-200 dark:text-zinc-700"
          strokeWidth={thickness}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
        />
        <circle
          className="transition-all duration-300 ease-in-out"
          strokeWidth={thickness}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
          transform="rotate(-90 50 50)"
        />
      </svg>
      {showValue && (
        <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
          {valueFormat(normalizedValue)}
        </div>
      )}
    </div>
  )
}
