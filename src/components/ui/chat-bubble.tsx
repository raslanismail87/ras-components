import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const chatBubbleVariants = cva(
  "relative rounded-lg p-3 max-w-[80%] text-sm",
  {
    variants: {
      variant: {
        default: "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50",
        primary: "bg-blue-500 text-white",
        secondary: "bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-50",
      },
      position: {
        start: "self-start rounded-bl-none",
        end: "self-end rounded-br-none ml-auto",
      },
    },
    defaultVariants: {
      variant: "default",
      position: "start",
    },
  }
)

export interface ChatBubbleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chatBubbleVariants> {
  message?: string
  sender?: string
  timestamp?: string
}

export function ChatBubble({
  className,
  variant,
  position,
  message = "Hello, this is a chat message!",
  sender = "User",
  timestamp = "12:34 PM",
  children,
  ...props
}: ChatBubbleProps) {
  return (
    <div className="flex flex-col gap-1 mb-4">
      {position === "start" && (
        <span className="text-xs text-zinc-500 dark:text-zinc-400 ml-1">{sender}</span>
      )}
      <div
        className={cn(chatBubbleVariants({ variant, position, className }))}
        {...props}
      >
        {children || message}
        <span className="block text-xs opacity-70 mt-1 text-right">
          {timestamp}
        </span>
      </div>
      {position === "end" && (
        <span className="text-xs text-zinc-500 dark:text-zinc-400 mr-1 self-end">{sender}</span>
      )}
    </div>
  )
}
