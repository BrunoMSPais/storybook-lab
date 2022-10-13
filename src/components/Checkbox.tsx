import * as CheboxPremitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export interface CheckboxProps extends CheboxPremitive.CheckboxProps {}

export function Checkbox(props: CheckboxProps) {

  return (
    <CheboxPremitive.Root
      className='w-6 h-6 p-[2px] bg-gray-800 rounded'
      {...props}
    >
      <CheboxPremitive.Indicator>
        <Check
          weight='bold'
          className='h5 w-5 text-cyan-500'
        />
      </CheboxPremitive.Indicator>
    </CheboxPremitive.Root>
  )
}