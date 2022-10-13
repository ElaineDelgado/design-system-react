import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface TextProps {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
}

export const Text = ({ size= 'md', children, asChild  }: TextProps) => {
  const TagComp = asChild ? Slot : 'span'
  return (
    <TagComp  
      className = {
        clsx(
          'text-gray-100',
          {
            'text-xs': size === 'sm',
            'text-sm': size === 'md',
            'text-md': size === 'lg',
          }
        )
      }
    >
      {children}
    </TagComp>
  )
}