import * as React from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./dialog"
import { Button } from "./button"

export interface ModalProps {
  trigger?: React.ReactNode
  title?: string
  description?: string
  children?: React.ReactNode
}

export function Modal({
  trigger = <Button variant="outline">Open Modal</Button>,
  title = "Modal Title",
  description = "This is a modal dialog that can be used for various purposes.",
  children,
}: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {children || (
            <p>Modal content goes here. You can customize this content as needed.</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
