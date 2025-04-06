import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const rangeVariants = cva(
  "w-full appearance-none bg-transparent cursor-pointer",
  {
    variants: {
      variant: {
        default: "[&::-webkit-slider-runnable-track]:bg-zinc-200 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:bg-zinc-900 [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-track]:bg-zinc-200 [&::-moz-range-track]:rounded-full [&::-moz-range-thumb]:bg-zinc-900 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:rounded-full dark:[&::-webkit-slider-runnable-track]:bg-zinc-800 dark:[&::-webkit-slider-thumb]:bg-zinc-50 dark:[&::-moz-range-track]:bg-zinc-800 dark:[&::-moz-range-thumb]:bg-zinc-50",
        accent: "[&::-webkit-slider-runnable-track]:bg-zinc-200 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-track]:bg-zinc-200 [&::-moz-range-track]:rounded-full [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:rounded-full dark:[&::-webkit-slider-runnable-track]:bg-zinc-800 dark:[&::-moz-range-track]:bg-zinc-800",
      },
      size: {
        default: "[&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:mt-[-4px] [&::-moz-range-track]:h-2 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4",
        sm: "[&::-webkit-slider-runnable-track]:h-1 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:mt-[-4px] [&::-moz-range-track]:h-1 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3",
        lg: "[&::-webkit-slider-runnable-track]:h-3 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:mt-[-4px] [&::-moz-range-track]:h-3 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface RangeProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: "default" | "accent"
  size?: "default" | "sm" | "lg"
  label?: string
  helperText?: string
  showValue?: boolean
}

export function Range({
  className,
  variant,
  size,
  label,
  helperText,
  showValue = false,
  id = "range-input",
  min = 0,
  max = 100,
  step = 1,
  value = 50,
  onChange,
  ...props
}: RangeProps) {
  const [currentValue, setCurrentValue] = React.useState(value)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(Number(e.target.value))
    onChange?.(e)
  }
  
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
        {showValue && (
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {currentValue}
          </span>
        )}
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={currentValue}
        onChange={handleChange}
        className={cn(rangeVariants({ variant, size }), className)}
        {...props}
      />
      {helperText && (
        <p className="text-xs text-zinc-500 dark:text-zinc-400">{helperText}</p>
      )}
    </div>
  )
}
