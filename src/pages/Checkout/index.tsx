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
  ProductCartList,
} from './styles'

import { useContext, useEffect } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'

import LocationIcon from './../../assets/icons/location-yellow.svg'
import PaymentIcon from './../../assets/icons/payment.svg'

import { AdressFormContainer } from './components/AdressFormContainer'
import { PaymentMethod } from './components/PaymentMethod'
import { CartItem } from './components/CartItem'
import { CartProductsValues } from './components/CartProductsValues'

import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmOrderValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe o UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap:() => {
      return { message: 'Informe o método de pagamento' }
    }
  }),
})

export type OrderData = zod.infer<typeof confirmOrderValidationSchema>
type ConfirmOrderFormData = OrderData

export function Checkout() {
  const { cartProducts, cleanCart } = useContext(CoffeeContext)
  const cartHaveProduct = cartProducts.length > 0
  const navigate = useNavigate()
  
  useEffect(() => {
    if (cartHaveProduct === false) {
      navigate(`/`);
    }
  },[cartHaveProduct])

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderValidationSchema)
  })

  const { handleSubmit } = confirmOrderForm

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate('/orderConfirmed', {
      state: data,
    })
    cleanCart()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutContainer className='container' onSubmit={handleSubmit(handleConfirmOrder)}>
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
              <img src={PaymentIcon} alt="" />
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
            <ProductCartList>
              {cartProducts.map(product => (
                <div key={product.id}>
                  <CartItem
                    id={product.id}
                    value={product.value}
                  />
                  <hr/>
                </div>
              ))}
            </ProductCartList>
            <CartProductsValues />
            <ButtonConfirm type='submit'>confirmar pedido</ButtonConfirm>
          </CartAside>
        </Aside>
      </CheckoutContainer>
    </FormProvider>
  )
}