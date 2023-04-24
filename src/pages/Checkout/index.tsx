import {
  CheckoutContainer,
  Main,
  CheckoutForm,
  FormTitle,
  CheckoutPayment,
  Aside,
  CartAside,
  Title,
  ButtonConfirm,
} from './styles'

import LocationIcon from './../../../public/icons/location-yellow.svg'
import { AdressFormContainer } from './components/AdressFormContainer'
import { PaymentMethod } from './components/PaymentMethod'
import { CartItem } from './components/CartItem'
import { CartProductsValues } from './components/CartProductsValues'

export function Checkout() {
  return (
    <CheckoutContainer>
      <Main>
        <Title>Complete seu pedido</Title>
        <CheckoutForm>
          <FormTitle>
            <img src={LocationIcon} alt="" />
            <div>
              <span>Endereço de Entrega</span>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </FormTitle>
          <AdressFormContainer />
        </CheckoutForm>
        <CheckoutPayment>
          <FormTitle>
            <img src={LocationIcon} alt="" />
            <div>
              <span>Pagamento</span>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </div>
          </FormTitle>
          <PaymentMethod />
        </CheckoutPayment>
      </Main>
      <Aside>
        <Title>Cafés selecionados</Title>
        <CartAside>
          <CartItem />
          <hr />
          <CartItem />
          <hr />
          <CartProductsValues />
          <ButtonConfirm>confirmar pedido</ButtonConfirm>
        </CartAside>
      </Aside>
    </CheckoutContainer>
  )
}