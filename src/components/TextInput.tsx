import { Slot } from '@radix-ui/react-slot'
import { InputHTMLAttributes, ReactNode } from 'react'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode
}

export interface TextInputIconrops {
  children: ReactNode
}

const TextInputRoot = (props: TextInputRootProps) =>  {
  return (
    <div 
      className = 'flex items-center gap-3 h-12 py-4 px-3 bg-gray-800 rounded focus-within:ring-2 ring-cyan-700'  
      >
        {props.children}
      </div>
  )
}
TextInputRoot.displayName = 'TextInput.Root'

const TextInputIcon = (props: TextInputIconrops) =>  {
  return (
    <Slot className="h-6 w-6 text-gray-400">
      {props.children}
    </Slot>
  )
}
TextInputIcon.displayName = 'TextInput.Icon'

const TextInputInput = (props: TextInputInputProps) => {
  return (
        <input 
          className='bg-transparent flex-1 placeholder:text:gray-400 text-gray-100 text-xs  outline-none'
          {...props}
        />
    
  )
}
TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}