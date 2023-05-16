import {
  ContainerPaymentMethod,
} from './styles'

import CreditCardIcon from './../../../../assets/icons/credit-card.svg'
import BankIcon from './../../../../assets/icons/bank.svg'
import CashIcon from './../../../../assets/icons/cash.svg'
import { PaymentMethodInput } from '../PaymentMethodInput'
import { useFormContext } from 'react-hook-form'

export const paymentMethods = {
  credit: {
    label: "Cartão de Crédito",
    icon: <img src={CreditCardIcon} alt="" />,
  },
  debit: {
    label: "Cartão de Débito",
    icon: <img src={BankIcon} alt="" />,
  },
  money: {
    label: "Dinheiro",
    icon: <img src={CashIcon} alt="" />,
  }
}

export function PaymentMethod() {
  const { register, formState: { errors } } = useFormContext()
  const paymentMethodError = errors?.paymentMethod?.message as unknown as string
  return(
    <ContainerPaymentMethod>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          {...register("paymentMethod")}
        />
      ))}
      {paymentMethodError && (
        <p>{paymentMethodError}</p>
      )}
    </ContainerPaymentMethod>
  )
}