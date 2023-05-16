import {
  SuccessContainer,
  Main,
  Title,
  Content,
  ImageAside,
} from './styles'

import SuccessImage from './../../assets/success.svg'
import LocationIcon from './../../assets/icons/location-ball.svg'
import TimerIcon from './../../assets/icons/timer-ball.svg'
import CashIcon from './../../assets/icons/cash-ball.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../Checkout'
import { paymentMethods } from '../Checkout/components/PaymentMethod'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}

export function Success() {
  const { state } = useLocation() as unknown as LocationType
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  },[])

  if (!state) return<></>

  return (
    <SuccessContainer className='container'>
      <Main>
        <Title>
          <h1>Uhu! Pedido confirmado</h1>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </Title>
        <Content>
          <div className='Info'>
            <img src={LocationIcon} alt="" />
            <div className='text'>
              <span>Entrega em Rua <strong>{state.street}</strong>, {state.number}</span>
              <span>{state.district} - {state.city}, {state.uf}</span>
            </div>
          </div>
          <div className='Info'>
            <img src={TimerIcon} alt="" />
            <div className='text'>
              <span>Previsão de entrega</span>
              <span><strong>20 min - 30 min </strong></span>
            </div>
          </div>
          <div className='Info'>
            <img src={CashIcon} alt="" />

            <div className='text'>
              <span>Pagamento na entrega</span>
              <span><strong>{paymentMethods[state.paymentMethod].label}</strong></span>
            </div>
          </div>
        </Content>
      </Main>
      <ImageAside>
        <img src={SuccessImage} alt="" />
      </ImageAside>
    </SuccessContainer>
  )
}