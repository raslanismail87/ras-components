import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const countdownVariants = cva(
  "flex items-center justify-center gap-2 font-mono",
  {
    variants: {
      size: {
        default: "text-lg",
        sm: "text-sm",
        lg: "text-2xl",
      },
      variant: {
        default: "text-zinc-900 dark:text-zinc-50",
        outline: "p-2 border border-zinc-200 rounded-md dark:border-zinc-800",
        filled: "p-2 bg-zinc-100 rounded-md dark:bg-zinc-800",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
)

export interface CountdownProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof countdownVariants> {
  value?: number // in seconds
  format?: "hms" | "ms" | "s"
  separator?: string
  autoStart?: boolean
}

export function Countdown({
  className,
  size,
  variant,
  value = 60,
  format = "ms",
  separator = ":",
  autoStart = true,
  ...props
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = React.useState(value)
  const [isRunning, setIsRunning] = React.useState(autoStart)
  
  React.useEffect(() => {
    if (!isRunning) return
    
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(interval)
          setIsRunning(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    
    return () => clearInterval(interval)
  }, [isRunning])
  
  const formatTime = () => {
    const hours = Math.floor(timeLeft / 3600)
    const minutes = Math.floor((timeLeft % 3600) / 60)
    const seconds = timeLeft % 60
    
    if (format === "hms") {
      return `${hours.toString().padStart(2, "0")}${separator}${minutes.toString().padStart(2, "0")}${separator}${seconds.toString().padStart(2, "0")}`
    } else if (format === "ms") {
      return `${minutes.toString().padStart(2, "0")}${separator}${seconds.toString().padStart(2, "0")}`
    } else {
      return seconds.toString().padStart(2, "0")
    }
  }
  
  const handleToggle = () => {
    setIsRunning(!isRunning)
  }
  
  const handleReset = () => {
    setTimeLeft(value)
    setIsRunning(false)
  }
  
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={cn(countdownVariants({ size, variant, className }))}
        {...props}
      >
        {formatTime()}
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleToggle}
          className="px-2 py-1 text-xs bg-zinc-100 rounded hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={handleReset}
          className="px-2 py-1 text-xs bg-zinc-100 rounded hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
