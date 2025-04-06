import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const artboardVariants = cva(
  "relative rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950",
  {
    variants: {
      size: {
        "1:1": "aspect-square",
        "16:9": "aspect-video",
        "4:3": "aspect-[4/3]",
        "3:2": "aspect-[3/2]",
        "2:1": "aspect-[2/1]",
        phone: "w-[320px] h-[568px]",
        tablet: "w-[768px] h-[1024px]",
      },
      variant: {
        default: "",
        demo: "flex items-center justify-center",
      },
    },
    defaultVariants: {
      size: "1:1",
      variant: "default",
    },
  }
)

export interface ArtboardProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "1:1" | "16:9" | "4:3" | "3:2" | "2:1" | "phone" | "tablet"
  variant?: "default" | "demo"
  horizontal?: boolean
}

export function Artboard({
  className,
  size,
  variant,
  horizontal,
  children,
  ...props
}: ArtboardProps) {
  return (
    <div
      className={cn(
        artboardVariants({ size, variant }),
        horizontal && "rotate-90",
        className
      )}
      {...props}
    >
      {variant === "demo" && !children ? (
        <div className="text-sm text-zinc-500 dark:text-zinc-400">
          {size === "phone" ? "320×568" : size === "tablet" ? "768×1024" : size}
        </div>
      ) : (
        children
      )}
    </div>
  )
}
