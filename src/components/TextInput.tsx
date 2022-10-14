import { Slot } from "@radix-ui/react-slot"
import { InputHTMLAttributes, ReactNode } from "react"

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode
}

export interface TextInputRootProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode
}

export interface TextInputIconProps {
  children?: ReactNode
}

function TextInputRoot({ children, ...props }: TextInputRootProps) {
  return (
    <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300 outline-none'>
      {children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {props.children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className='bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400 placeholder:bg-gray-800 valid:text-gray-100'
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
