import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const fileInputVariants = cva(
  "flex min-h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300",
  {
    variants: {
      variant: {
        default: "",
        outline: "border-2",
        ghost: "border-none bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface FileInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  variant?: "default" | "outline" | "ghost"
  label?: string
  helperText?: string
  error?: string
}

export function FileInput({
  className,
  variant,
  label,
  helperText,
  error,
  id = "file-input",
  ...props
}: FileInputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type="file"
        className={cn(
          fileInputVariants({ variant }),
          error && "border-red-500 focus-visible:ring-red-500",
          className
        )}
        {...props}
      />
      {helperText && !error && (
        <p className="text-xs text-zinc-500 dark:text-zinc-400">{helperText}</p>
      )}
      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}
    </div>
  )
}
