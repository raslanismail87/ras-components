import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const dataInputVariants = cva(
  "rounded-lg border p-4",
  {
    variants: {
      variant: {
        default: "bg-white border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800",
        outline: "border-zinc-200 dark:border-zinc-800",
        ghost: "border-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface DataInputProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "ghost"
  title?: string
  description?: string
}

export function DataInput({
  className,
  variant,
  title,
  description,
  children,
  ...props
}: DataInputProps) {
  return (
    <div
      className={cn(dataInputVariants({ variant, className }))}
      {...props}
    >
      {title && (
        <h3 className="mb-2 font-medium text-zinc-900 dark:text-zinc-50">{title}</h3>
      )}
      {description && (
        <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
      )}
      <div className="space-y-4">
        {children}
      </div>
    </div>
  )
}
