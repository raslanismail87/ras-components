import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const linkVariants = cva(
  "inline-flex items-center gap-1 transition-colors",
  {
    variants: {
      variant: {
        default: "text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300",
        subtle: "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50",
        underline: "text-blue-500 hover:text-blue-600 underline underline-offset-4 dark:text-blue-400 dark:hover:text-blue-300",
        ghost: "text-zinc-900 hover:bg-zinc-100 dark:text-zinc-50 dark:hover:bg-zinc-800 px-2 py-1 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "default" | "subtle" | "underline" | "ghost"
  icon?: React.ReactNode
  iconPosition?: "start" | "end"
  external?: boolean
}

export function Link({
  className,
  variant,
  icon,
  iconPosition = "end",
  external = false,
  children,
  ...props
}: LinkProps) {
  return (
    <a
      className={cn(linkVariants({ variant, className }))}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      {...props}
    >
      {icon && iconPosition === "start" && (
        <span className="h-4 w-4">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "end" && (
        <span className="h-4 w-4">{icon}</span>
      )}
    </a>
  )
}
