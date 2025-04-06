import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const stepsVariants = cva(
  "flex",
  {
    variants: {
      variant: {
        default: "",
        vertical: "flex-col",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const stepVariants = cva(
  "relative flex flex-1",
  {
    variants: {
      variant: {
        default: "flex-row items-center",
        vertical: "flex-col",
      },
      status: {
        incomplete: "text-zinc-500 dark:text-zinc-400",
        current: "text-zinc-900 dark:text-zinc-50",
        complete: "text-green-500 dark:text-green-400",
      },
    },
    defaultVariants: {
      variant: "default",
      status: "incomplete",
    },
  }
)

const stepIndicatorVariants = cva(
  "flex items-center justify-center rounded-full border-2 font-medium",
  {
    variants: {
      variant: {
        default: "h-8 w-8 text-sm",
        small: "h-6 w-6 text-xs",
        large: "h-10 w-10 text-base",
      },
      status: {
        incomplete: "border-zinc-300 bg-white text-zinc-500 dark:border-zinc-600 dark:bg-zinc-950 dark:text-zinc-400",
        current: "border-blue-500 bg-blue-500 text-white",
        complete: "border-green-500 bg-green-500 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
      status: "incomplete",
    },
  }
)

export interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  status?: "incomplete" | "current" | "complete"
  indicator?: React.ReactNode
  isLast?: boolean
}

export function Step({
  className,
  title,
  description,
  status = "incomplete",
  indicator,
  isLast,
  ...props
}: StepProps) {
  return (
    <div
      className={cn(
        stepVariants({ status, variant: "default" }),
        className
      )}
      {...props}
    >
      <div className="flex flex-col items-center">
        <div
          className={cn(
            stepIndicatorVariants({ status })
          )}
        >
          {indicator || (status === "complete" ? "✓" : "")}
        </div>
        {!isLast && (
          <div className="h-full w-px bg-zinc-200 dark:bg-zinc-800" />
        )}
      </div>
      <div className="ml-4 pb-8">
        <div className="font-medium">{title}</div>
        {description && (
          <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            {description}
          </div>
        )}
      </div>
    </div>
  )
}

export interface StepsProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "vertical"
  currentStep?: number
  steps?: {
    title: string
    description?: string
  }[]
}

export function Steps({
  className,
  variant,
  currentStep = 1,
  steps,
  children,
  ...props
}: StepsProps) {
  const stepsArray = React.Children.toArray(children)
  
  return (
    <div
      className={cn(stepsVariants({ variant, className }))}
      {...props}
    >
      {steps ? (
        steps.map((step, index) => (
          <Step
            key={index}
            title={step.title}
            description={step.description}
            status={
              index < currentStep - 1
                ? "complete"
                : index === currentStep - 1
                ? "current"
                : "incomplete"
            }
            isLast={index === steps.length - 1}
          />
        ))
      ) : (
        children || (
          <>
            <Step
              title="Step 1"
              description="Description for step 1"
              status="complete"
            />
            <Step
              title="Step 2"
              description="Description for step 2"
              status="current"
            />
            <Step
              title="Step 3"
              description="Description for step 3"
              status="incomplete"
              isLast
            />
          </>
        )
      )}
    </div>
  )
}
