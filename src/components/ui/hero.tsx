import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const heroVariants = cva(
  "relative w-full",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-zinc-950 py-12 md:py-24",
        centered: "bg-white dark:bg-zinc-950 py-12 md:py-24 flex flex-col items-center text-center",
        overlay: "bg-zinc-900 text-white py-12 md:py-24",
        gradient: "bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 md:py-24",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "centered" | "overlay" | "gradient"
  title?: string
  subtitle?: string
  image?: string
  imageAlt?: string
  cta?: React.ReactNode
}

export function Hero({
  className,
  variant,
  title = "Welcome to our platform",
  subtitle = "The best solution for your needs with powerful features and intuitive design.",
  image,
  imageAlt = "Hero image",
  cta,
  children,
  ...props
}: HeroProps) {
  return (
    <div
      className={cn(heroVariants({ variant, className }))}
      {...props}
    >
      <div className="container mx-auto px-4">
        {children || (
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className={cn(
              "flex-1 space-y-4",
              variant === "centered" && "max-w-2xl mx-auto"
            )}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                {title}
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                {subtitle}
              </p>
              {cta && (
                <div className="pt-4">
                  {cta}
                </div>
              )}
            </div>
            
            {image && variant !== "centered" && (
              <div className="flex-1">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
