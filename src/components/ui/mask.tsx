import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const maskVariants = cva(
  "relative overflow-hidden",
  {
    variants: {
      variant: {
        squircle: "mask-squircle",
        heart: "mask-heart",
        hexagon: "mask-hexagon",
        circle: "rounded-full",
        triangle: "mask-triangle",
        star: "mask-star",
        diamond: "mask-diamond",
      },
    },
    defaultVariants: {
      variant: "squircle",
    },
  }
)

export interface MaskProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "squircle" | "heart" | "hexagon" | "circle" | "triangle" | "star" | "diamond"
  src?: string
  alt?: string
}

export function Mask({
  className,
  variant,
  src,
  alt = "Masked image",
  children,
  ...props
}: MaskProps) {
  return (
    <div
      className={cn(maskVariants({ variant, className }))}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        children
      )}
    </div>
  )
}

const customMaskStyles = `
.mask-squircle {
  mask-image: url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 0C20 0 0 20 0 100s20 100 100 100 100-20 100-100S180 0 100 0Z'/%3E%3C/svg%3E");
}
.mask-heart {
  mask-image: url("data:image/svg+xml,%3Csvg width='200' height='185' viewBox='0 0 200 185' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m100 184.606-30.61-30.61C27.376 113.98 0 89.833 0 60.013 0 35.868 18.87 17 43.015 17c13.744 0 26.84 6.405 35.28 16.5C86.734 23.405 99.83 17 113.574 17 137.72 17 156.59 35.868 156.59 60.013c0 29.82-27.376 53.967-69.39 93.983l-30.61 30.61Z'/%3E%3C/svg%3E");
}
.mask-hexagon {
  mask-image: url("data:image/svg+xml,%3Csvg width='182' height='201' viewBox='0 0 182 201' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.3 65.486c0-9.196 6.687-20.063 14.211-25.078l61.86-35.946c8.36-5.016 20.899-5.016 29.258 0l61.86 35.946c8.36 5.015 14.21 15.882 14.21 25.078v70.055c0 9.196-6.686 20.063-14.21 25.079l-61.86 35.945c-8.36 5.015-20.899 5.015-29.258 0L14.51 160.62C6.151 155.604.301 144.737.301 135.54V65.486Z'/%3E%3C/svg%3E");
}
.mask-triangle {
  mask-image: url("data:image/svg+xml,%3Csvg width='200' height='174' viewBox='0 0 200 174' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m100 0 100 173.205H0z'/%3E%3C/svg%3E");
}
.mask-star {
  mask-image: url("data:image/svg+xml,%3Csvg width='192' height='180' viewBox='0 0 192 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m96 0 23.608 59.27L180 68.198l-43.596 39.598 13.086 62.004L96 139.27l-53.49 30.531 13.087-62.004L12 68.199l60.392-8.93L96 0Z'/%3E%3C/svg%3E");
}
.mask-diamond {
  mask-image: url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m100 0 100 100-100 100L0 100 100 0Z'/%3E%3C/svg%3E");
}
`;

if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = customMaskStyles;
  document.head.appendChild(style);
}
