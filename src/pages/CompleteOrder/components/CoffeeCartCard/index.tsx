import { QuantityInput } from "../../../../componentes/QuantityInput";
import { RegularText } from "../../../../componentes/Typography";
import { CartItem } from "../../../../contexts/CartContext";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import { Trash } from 'phosphor-react'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

  const formattedPrice = formatMoney(coffee.price)

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              quantity={coffee.quantity}
              size="small"
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16}/>
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}