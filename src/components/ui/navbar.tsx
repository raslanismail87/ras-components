import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const navbarVariants = cva(
  "flex items-center justify-between px-4 py-3 w-full",
  {
    variants: {
      variant: {
        default: "bg-white border-b border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800",
        transparent: "bg-transparent",
        sticky: "bg-white/80 backdrop-blur-md border-b border-zinc-200 sticky top-0 z-40 dark:bg-zinc-950/80 dark:border-zinc-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "transparent" | "sticky"
  logo?: React.ReactNode
  title?: string
  actions?: React.ReactNode
  centerItems?: React.ReactNode
}

export function Navbar({
  className,
  variant,
  logo,
  title = "Brand",
  actions,
  centerItems,
  children,
  ...props
}: NavbarProps) {
  return (
    <nav
      className={cn(navbarVariants({ variant, className }))}
      {...props}
    >
      <div className="flex items-center gap-2">
        {logo && <div className="flex-shrink-0">{logo}</div>}
        {title && (
          <span className="text-lg font-semibold">{title}</span>
        )}
      </div>
      
      {centerItems && (
        <div className="flex-1 flex justify-center">
          {centerItems}
        </div>
      )}
      
      <div className="flex items-center gap-2">
        {actions || children || (
          <button className="px-4 py-2 text-sm font-medium bg-zinc-900 text-white rounded-md hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200">
            Sign In
          </button>
        )}
      </div>
    </nav>
  )
}
