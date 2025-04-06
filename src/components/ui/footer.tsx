import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const footerVariants = cva(
  "w-full px-4 py-6",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800",
        ghost: "bg-transparent",
        accent: "bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "ghost" | "accent"
  logo?: React.ReactNode
  copyright?: string
  links?: {
    title: string
    href: string
  }[]
  social?: {
    icon: React.ReactNode
    href: string
  }[]
}

export function Footer({
  className,
  variant,
  logo,
  copyright = "© 2025 Your Company, Inc. All rights reserved.",
  links,
  social,
  children,
  ...props
}: FooterProps) {
  return (
    <footer
      className={cn(footerVariants({ variant, className }))}
      {...props}
    >
      <div className="container mx-auto">
        {children || (
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-col gap-2">
              {logo && <div>{logo}</div>}
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{copyright}</p>
            </div>
            
            {links && links.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            )}
            
            {social && social.length > 0 && (
              <div className="flex gap-4">
                {social.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </footer>
  )
}
