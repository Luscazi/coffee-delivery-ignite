import {
  ContainerPaymentMethod,
  Button,
} from './styles'

import CreditCardIcon from './../../../../../public/icons/credit-card.svg'
import BankIcon from './../../../../../public/icons/bank.svg'
import CashIcon from './../../../../../public/icons/cash.svg'

export function PaymentMethod() {
  return(
    <ContainerPaymentMethod>
      <Button><img src={CreditCardIcon} alt="" /> CARTÃO DE CRÉDITO</Button>
      <Button><img src={BankIcon} alt="" /> CARTÃO DE DÉBITO</Button>
      <Button><img src={CashIcon} alt="" /> DINHEIRO</Button>
    </ContainerPaymentMethod>
  )
}