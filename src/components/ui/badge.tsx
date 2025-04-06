import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border-2 px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-emerald-500 text-white shadow hover:bg-emerald-600 focus:ring-emerald-500",
        secondary:
          "border-transparent bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
        destructive:
          "border-transparent bg-red-500 text-white shadow hover:bg-red-600 focus:ring-red-500",
        outline: "border-emerald-500 text-emerald-500 dark:border-emerald-400 dark:text-emerald-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
