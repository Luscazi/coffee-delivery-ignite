import {
  SuccessContainer,
  Main,
  Title,
  Content,
  ImageAside,
} from './styles'

import SuccessImage from './../../../public/success.svg'
import LocationIcon from './../../../public/icons/location-ball.svg'
import TimerIcon from './../../../public/icons/timer-ball.svg'
import CashIcon from './../../../public/icons/cash-ball.svg'

export function Success() {
  return (
    <SuccessContainer>
      <Main>
        <Title>
          <h1>Uhu! Pedido confirmado</h1>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </Title>
        <Content>
          <div className='Info'>
            <img src={LocationIcon} alt="" />
            <div className='text'>
              <span>Entrega em Rua <strong>João Daniel Martinelli</strong>, 102</span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </div>
          <div className='Info'>
            <img src={CashIcon} alt="" />
            <div className='text'>
              <span>Previsão de entrega</span>
              <span><strong>20 min - 30 min </strong></span>
            </div>
          </div>
          <div className='Info'>
            <img src={TimerIcon} alt="" />
            <div className='text'>
              <span>Pagamento na entrega</span>
              <span><strong>Cartão de Crédito</strong></span>
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