import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const layoutVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: "",
        container: "container mx-auto px-4",
        fluid: "w-full px-4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "container" | "fluid"
}

export function Layout({
  className,
  variant,
  children,
  ...props
}: LayoutProps) {
  return (
    <div
      className={cn(layoutVariants({ variant, className }))}
      {...props}
    >
      {children}
    </div>
  )
}
