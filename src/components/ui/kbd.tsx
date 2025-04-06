import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const kbdVariants = cva(
  "inline-flex items-center justify-center rounded border px-2 py-0.5 text-xs font-semibold",
  {
    variants: {
      variant: {
        default: "border-zinc-200 bg-zinc-100 text-zinc-900 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50",
        outline: "border-zinc-200 text-zinc-900 dark:border-zinc-800 dark:text-zinc-50",
        ghost: "border-transparent bg-transparent text-zinc-900 dark:text-zinc-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface KbdProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof kbdVariants> {
  children?: React.ReactNode
}

export function Kbd({
  className,
  variant,
  children,
  ...props
}: KbdProps) {
  return (
    <kbd
      className={cn(kbdVariants({ variant, className }))}
      {...props}
    >
      {children || "Ctrl"}
    </kbd>
  )
}
