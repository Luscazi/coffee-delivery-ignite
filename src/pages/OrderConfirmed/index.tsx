import { RegularText, TitleText } from "../../componentes/Typography";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import ConfirmedOrderIllustratrion from '../../assets/confirmed-order.svg'
import { InfoWithIcon } from "../../componentes/InfoWithIcon";
import { CurrencyDollar, Clock, MapPin } from "phosphor-react";
import { useTheme } from "styled-components";

export function OrderConfirmed() {
  const { colors } = useTheme()!
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
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
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        
        <img src={ConfirmedOrderIllustratrion} />
      </section>
    </OrderConfirmedContainer>
  )
}