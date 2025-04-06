import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-2xl border-2 px-5 py-4 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "border-emerald-100 bg-white text-zinc-800 [&>svg]:text-emerald-500 dark:border-emerald-900/20 dark:bg-zinc-900 dark:text-zinc-50 dark:[&>svg]:text-emerald-400",
        destructive:
          "border-red-200 bg-white text-red-600 [&>svg]:text-red-500 dark:border-red-900/20 dark:bg-zinc-900 dark:text-red-400 dark:[&>svg]:text-red-400",
        info: "border-blue-100 bg-white text-blue-600 [&>svg]:text-blue-500 dark:border-blue-900/20 dark:bg-zinc-900 dark:text-blue-400 dark:[&>svg]:text-blue-400",
        warning: "border-yellow-100 bg-white text-yellow-600 [&>svg]:text-yellow-500 dark:border-yellow-900/20 dark:bg-zinc-900 dark:text-yellow-400 dark:[&>svg]:text-yellow-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
