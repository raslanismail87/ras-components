import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"
import { Star, StarHalf } from "lucide-react"

const ratingVariants = cva(
  "inline-flex",
  {
    variants: {
      size: {
        default: "gap-1",
        sm: "gap-0.5",
        lg: "gap-2",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const starVariants = cva(
  "",
  {
    variants: {
      size: {
        default: "h-5 w-5",
        sm: "h-4 w-4",
        lg: "h-6 w-6",
      },
      variant: {
        default: "text-yellow-500",
        outline: "text-yellow-500 stroke-[1.5]",
        muted: "text-zinc-400 dark:text-zinc-600",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
)

export interface RatingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "size" | "onChange"> {
  value?: number
  max?: number
  size?: "default" | "sm" | "lg"
  readonly?: boolean
  onChange?: (value: number) => void
  halfStar?: boolean
}

export function Rating({
  className,
  value = 3.5,
  max = 5,
  size,
  readonly = false,
  onChange,
  halfStar = true,
  ...props
}: RatingProps) {
  const [rating, setRating] = React.useState(value)
  const [hoverRating, setHoverRating] = React.useState(0)
  
  const handleClick = (index: number) => {
    if (readonly) return
    
    const newRating = halfStar && hoverRating === index - 0.5 ? index - 0.5 : index
    setRating(newRating)
    onChange?.(newRating)
  }
  
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (readonly) return
    
    const { left, width } = event.currentTarget.getBoundingClientRect()
    const percent = (event.clientX - left) / width
    
    if (halfStar && percent <= 0.5) {
      setHoverRating(index - 0.5)
    } else {
      setHoverRating(index)
    }
  }
  
  const handleMouseLeave = () => {
    if (readonly) return
    setHoverRating(0)
  }
  
  const activeRating = hoverRating || rating
  
  return (
    <div
      className={cn(ratingVariants({ size }), className)}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {Array.from({ length: max }).map((_, i) => {
        const starValue = i + 1
        const isFilled = activeRating >= starValue
        const isHalfFilled = halfStar && activeRating === starValue - 0.5
        
        return (
          <div
            key={i}
            className={cn(
              "relative cursor-pointer",
              readonly && "cursor-default"
            )}
            onClick={() => handleClick(starValue)}
            onMouseMove={(e) => handleMouseMove(e, starValue)}
          >
            {isHalfFilled ? (
              <StarHalf className={cn(starVariants({ size, variant: "default" }))} />
            ) : (
              <Star
                className={cn(
                  starVariants({
                    size,
                    variant: isFilled ? "default" : "muted",
                  })
                )}
                fill={isFilled ? "currentColor" : "none"}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
