import { HTMLAttributes, InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { PaymentMethodInputContainer, ContentContainer } from "./styles";
import { CreditCard } from 'phosphor-react'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export const PaymentMethodInput = forwardRef<HTMLInputElement, PaymentMethodInputProps>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentMethodInputContainer>
      <input ref={ref} id={id} type="radio" {...props} name="paymentMethod" />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodInputContainer>
  )
})