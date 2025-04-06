import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-emerald-500 text-white shadow hover:bg-emerald-600 focus-visible:ring-emerald-500",
        destructive:
          "bg-red-500 text-white shadow-sm hover:bg-red-600 focus-visible:ring-red-500",
        outline:
          "border-2 border-emerald-500 bg-white text-emerald-500 shadow-sm hover:bg-emerald-50 focus-visible:ring-emerald-500",
        secondary:
          "bg-blue-500 text-white shadow-sm hover:bg-blue-600 focus-visible:ring-blue-500",
        ghost: "text-emerald-500 hover:bg-emerald-50 focus-visible:ring-emerald-500",
        link: "text-emerald-500 underline-offset-4 hover:underline focus-visible:ring-emerald-500",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-full px-4 text-xs",
        lg: "h-12 rounded-full px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
