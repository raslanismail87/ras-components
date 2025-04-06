import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const menuVariants = cva(
  "rounded-md border bg-white p-2 shadow-md dark:bg-zinc-950 dark:border-zinc-800",
  {
    variants: {
      variant: {
        default: "border-zinc-200",
        ghost: "border-transparent shadow-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const menuItemVariants = cva(
  "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
  {
    variants: {
      variant: {
        default: "hover:bg-zinc-100 focus:bg-zinc-100 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800",
        destructive: "text-red-500 hover:bg-red-50 focus:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/10 dark:focus:bg-red-900/10",
        disabled: "pointer-events-none opacity-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "destructive" | "disabled"
  icon?: React.ReactNode
  suffix?: React.ReactNode
  inset?: boolean
}

export function MenuItem({
  className,
  variant,
  icon,
  suffix,
  inset,
  children,
  ...props
}: MenuItemProps) {
  return (
    <div
      className={cn(
        menuItemVariants({ variant }),
        inset && "pl-8",
        className
      )}
      {...props}
    >
      {icon && <span className="mr-2 h-4 w-4">{icon}</span>}
      <span className="flex-grow">{children}</span>
      {suffix && <span className="ml-2">{suffix}</span>}
    </div>
  )
}

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "ghost"
}

export function Menu({
  className,
  variant,
  children,
  ...props
}: MenuProps) {
  return (
    <div
      className={cn(menuVariants({ variant, className }))}
      {...props}
    >
      {children || (
        <>
          <MenuItem>Menu Item 1</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
          <MenuItem>Menu Item 3</MenuItem>
          <MenuItem variant="disabled">Disabled Item</MenuItem>
          <MenuItem variant="destructive">Delete</MenuItem>
        </>
      )}
    </div>
  )
}
