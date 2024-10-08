'use client'
import { useModal } from '@/providers/modal-provider'
import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from '../ui/dialog'

type Props = {
  title: string
  subheading: string
  children: React.ReactNode
  defaultOpen?: boolean
}

const CustomModal = ({ children, defaultOpen, subheading, title }: Props) => {
  const { isOpen, setClose } = useModal()
  return (
    <Dialog
      open={isOpen || defaultOpen}
      onOpenChange={setClose}
    >
      <DialogContent className="overflow-scroll h-auto md:max-h-[700px] md:h-fit bg-card rounded-xl CardStyle">
        <DialogHeader className="text-left">
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          <DialogDescription>{subheading}</DialogDescription>
        </DialogHeader>
          {children}
      </DialogContent>
    </Dialog>
  )
}

export default CustomModal