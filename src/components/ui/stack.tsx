import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const stackVariants = cva(
  "flex",
  {
    variants: {
      direction: {
        vertical: "flex-col",
        horizontal: "flex-row",
      },
      spacing: {
        none: "gap-0",
        xs: "gap-1",
        sm: "gap-2",
        md: "gap-4",
        lg: "gap-6",
        xl: "gap-8",
      },
      align: {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline",
      },
      justify: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly",
      },
      wrap: {
        wrap: "flex-wrap",
        nowrap: "flex-nowrap",
      },
    },
    defaultVariants: {
      direction: "vertical",
      spacing: "md",
      align: "start",
      justify: "start",
      wrap: "nowrap",
    },
  }
)

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "vertical" | "horizontal"
  spacing?: "none" | "xs" | "sm" | "md" | "lg" | "xl"
  align?: "start" | "center" | "end" | "stretch" | "baseline"
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly"
  wrap?: "wrap" | "nowrap"
  divider?: React.ReactNode
}

export function Stack({
  className,
  direction,
  spacing,
  align,
  justify,
  wrap,
  divider,
  children,
  ...props
}: StackProps) {
  const childrenArray = React.Children.toArray(children).filter(Boolean)
  
  return (
    <div
      className={cn(stackVariants({ direction, spacing, align, justify, wrap, className }))}
      {...props}
    >
      {divider
        ? childrenArray.map((child, index) => (
            <React.Fragment key={index}>
              {child}
              {index < childrenArray.length - 1 && (
                <div className={cn(
                  "flex-shrink-0",
                  direction === "horizontal" ? "self-stretch" : "w-full"
                )}>
                  {divider}
                </div>
              )}
            </React.Fragment>
          ))
        : children}
    </div>
  )
}
