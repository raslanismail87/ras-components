import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const swapVariants = cva(
  "relative inline-grid select-none place-content-center",
  {
    variants: {
      size: {
        default: "h-10 w-10",
        sm: "h-8 w-8",
        lg: "h-12 w-12",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface SwapProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof swapVariants> {
  active?: boolean
  onLabel?: string
  offLabel?: string
  onIcon?: React.ReactNode
  offIcon?: React.ReactNode
}

export function Swap({
  className,
  size,
  active = false,
  onLabel,
  offLabel,
  onIcon,
  offIcon,
  ...props
}: SwapProps) {
  const [isActive, setIsActive] = React.useState(active)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <div
      className={cn(swapVariants({ size, className }))}
      onClick={handleClick}
      {...props}
    >
      <div
        className={cn(
          "absolute transition-all duration-300",
          isActive ? "rotate-0 scale-100 opacity-100" : "rotate-45 scale-0 opacity-0"
        )}
      >
        {onIcon || (onLabel && <span>{onLabel}</span>) || "ON"}
      </div>
      <div
        className={cn(
          "absolute transition-all duration-300",
          !isActive ? "rotate-0 scale-100 opacity-100" : "rotate-45 scale-0 opacity-0"
        )}
      >
        {offIcon || (offLabel && <span>{offLabel}</span>) || "OFF"}
      </div>
    </div>
  )
}
