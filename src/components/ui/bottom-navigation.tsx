import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const bottomNavigationVariants = cva(
  "fixed bottom-0 left-0 right-0 flex items-center justify-around border-t bg-white p-2 dark:bg-zinc-950 dark:border-zinc-800",
  {
    variants: {
      variant: {
        default: "border-zinc-200",
        accent: "border-blue-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const bottomNavigationItemVariants = cva(
  "flex flex-col items-center justify-center rounded-md p-2 transition-colors",
  {
    variants: {
      variant: {
        default: "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50",
        active: "text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BottomNavigationItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  variant?: "default" | "active"
  icon?: React.ReactNode
  label?: string
  href?: string
}

export function BottomNavigationItem({
  className,
  variant,
  icon,
  label,
  href = "#",
  ...props
}: BottomNavigationItemProps) {
  return (
    <a
      href={href}
      className={cn(bottomNavigationItemVariants({ variant, className }))}
      {...props}
    >
      {icon && <div className="mb-1">{icon}</div>}
      {label && <span className="text-xs">{label}</span>}
    </a>
  )
}

export interface BottomNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "accent"
  items?: BottomNavigationItemProps[]
}

export function BottomNavigation({
  className,
  variant,
  items,
  children,
  ...props
}: BottomNavigationProps) {
  return (
    <div
      className={cn(bottomNavigationVariants({ variant, className }))}
      {...props}
    >
      {items ? (
        items.map((item, index) => (
          <BottomNavigationItem
            key={index}
            variant={item.variant}
            icon={item.icon}
            label={item.label}
            href={item.href}
            onClick={item.onClick}
          />
        ))
      ) : (
        children || (
          <>
            <BottomNavigationItem
              variant="active"
              icon={<div className="h-5 w-5 rounded-full bg-current" />}
              label="Home"
            />
            <BottomNavigationItem
              icon={<div className="h-5 w-5 rounded-full bg-current" />}
              label="Search"
            />
            <BottomNavigationItem
              icon={<div className="h-5 w-5 rounded-full bg-current" />}
              label="Library"
            />
            <BottomNavigationItem
              icon={<div className="h-5 w-5 rounded-full bg-current" />}
              label="Profile"
            />
          </>
        )
      )}
    </div>
  )
}
