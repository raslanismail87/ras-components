import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"
import { Button } from "./button"

const buttonGroupVariants = cva(
  "inline-flex",
  {
    variants: {
      variant: {
        default: "",
        vertical: "flex-col",
      },
      size: {
        default: "gap-1",
        sm: "gap-0.5",
        lg: "gap-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "vertical"
  size?: "default" | "sm" | "lg"
  buttons?: {
    label: string
    onClick?: () => void
    variant?: React.ComponentProps<typeof Button>["variant"]
    disabled?: boolean
  }[]
}

export function ButtonGroup({
  className,
  variant,
  size,
  buttons,
  children,
  ...props
}: ButtonGroupProps) {
  return (
    <div
      className={cn(buttonGroupVariants({ variant, size, className }))}
      {...props}
    >
      {buttons ? (
        buttons.map((button, index) => (
          <Button
            key={index}
            variant={button.variant}
            onClick={button.onClick}
            disabled={button.disabled}
            className={cn(
              variant === "default" && index > 0 && "rounded-l-none",
              variant === "default" && index < buttons.length - 1 && "rounded-r-none",
              variant === "vertical" && index > 0 && "rounded-t-none",
              variant === "vertical" && index < buttons.length - 1 && "rounded-b-none"
            )}
          >
            {button.label}
          </Button>
        ))
      ) : (
        children || (
          <>
            <Button>Button 1</Button>
            <Button variant="outline">Button 2</Button>
            <Button variant="secondary">Button 3</Button>
          </>
        )
      )}
    </div>
  )
}
