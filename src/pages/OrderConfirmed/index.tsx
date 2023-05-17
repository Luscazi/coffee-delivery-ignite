import { RegularText, TitleText } from "../../componentes/Typography";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import ConfirmedOrderIllustratrion from '../../assets/confirmed-order.svg'
import { InfoWithIcon } from "../../componentes/InfoWithIcon";
import { CurrencyDollar, Clock, MapPin } from "phosphor-react";
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../CompleteOrder";
import { paymentMethods } from "../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions";
import { useEffect } from "react";

interface LocationType {
  state: OrderData
}

export function OrderConfirmed() {
  const { colors } = useTheme()!

  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  },[])

  if (!state) return <></>
  
  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">Uhu! Pedido confirmado</RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconColor={colors["brand-purple"]}
            text={
              <RegularText>
                Entrega em <strong>{state.street}, {state.number}</strong>
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />
          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconColor={colors["brand-yellow"]}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />
          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconColor={colors["brand-purple"]}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        
        <img src={ConfirmedOrderIllustratrion} />
      </section>
    </OrderConfirmedContainer>
  )
}