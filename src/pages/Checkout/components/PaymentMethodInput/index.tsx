import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import {
  PaymentMethodContainer,
  ContentContainer,
} from './styles'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  icon: ReactNode
}

export const PaymentMethodInput = forwardRef<HTMLInputElement, PaymentMethodInputProps>(({ id, label, icon, ...props }, ref) => {
  return(
    <PaymentMethodContainer>
      <input id={id} type="radio" {...props} name='paymentMethod' ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  )
}) 