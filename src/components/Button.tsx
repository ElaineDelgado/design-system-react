import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  asChild: boolean
}

export const Button = ({ children, asChild  }: ButtonProps) => {
  const TagComp = asChild ? Slot : 'button'
  return (
    <TagComp  
      className = {
        clsx(
          'py-4 px-3 bg-cyan-700 font-semibold text-black text-sm w-full rounded transition-colors hover:bg-cyan-600 focus:ring-2 ring-black',
          
        )
      }
    >
      {children}
    </TagComp>
  )
}