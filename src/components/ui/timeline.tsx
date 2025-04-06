import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const timelineVariants = cva(
  "relative pl-6 border-l",
  {
    variants: {
      variant: {
        default: "border-zinc-200 dark:border-zinc-800",
        primary: "border-blue-500",
        secondary: "border-zinc-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const timelineItemVariants = cva(
  "relative mb-6 last:mb-0",
  {
    variants: {
      variant: {
        default: "before:bg-zinc-300 dark:before:bg-zinc-700",
        primary: "before:bg-blue-500",
        secondary: "before:bg-zinc-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "primary" | "secondary"
  items?: {
    title: string
    description?: string
    date?: string
    icon?: React.ReactNode
  }[]
}

export interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "primary" | "secondary"
  title?: string
  description?: string
  date?: string
  icon?: React.ReactNode
}

export function TimelineItem({
  className,
  variant,
  title = "Timeline Item",
  description,
  date,
  icon,
  children,
  ...props
}: TimelineItemProps) {
  return (
    <div
      className={cn(
        timelineItemVariants({ variant }),
        "before:absolute before:left-[-13px] before:top-2 before:h-3 before:w-3 before:rounded-full",
        className
      )}
      {...props}
    >
      {icon && (
        <div className="absolute left-[-20px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-zinc-950">
          {icon}
        </div>
      )}
      <div className="flex flex-col">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-medium">{title}</h3>
          {date && (
            <time className="text-xs text-zinc-500 dark:text-zinc-400">{date}</time>
          )}
        </div>
        {description && (
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
        )}
        {children}
      </div>
    </div>
  )
}

export function Timeline({
  className,
  variant,
  items,
  children,
  ...props
}: TimelineProps) {
  return (
    <div
      className={cn(timelineVariants({ variant, className }))}
      {...props}
    >
      {items ? (
        items.map((item, index) => (
          <TimelineItem
            key={index}
            variant={variant}
            title={item.title}
            description={item.description}
            date={item.date}
            icon={item.icon}
          />
        ))
      ) : (
        children || (
          <>
            <TimelineItem
              title="Created account"
              date="January 1, 2023"
              description="Account was created"
            />
            <TimelineItem
              title="Updated profile"
              date="January 5, 2023"
              description="Profile information was updated"
            />
            <TimelineItem
              title="Completed setup"
              date="January 10, 2023"
              description="Account setup was completed"
            />
          </>
        )
      )}
    </div>
  )
}
