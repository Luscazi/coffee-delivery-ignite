import { InputNumber } from "../../../../components/InputNumber";
import { CartItemContainer } from "./styles";
import Product from './../../../../../public/products/Image-1.png'
import TrashIcon from './../../../../../public/icons/trash.svg'
import { Button } from "../../../../components/Button";

export function CartItem() {
  return(
    <CartItemContainer>
      <img className="product" src={Product} alt="" />
      <div className="actionBox">
        <span>Expresso Tradicional</span>
        <div className="actions">
          <InputNumber 
            min={1}
            value={1}
            max={9}
          />
          <Button
            text="REMOVER"
          >
            <img src={TrashIcon} alt="" />
          </Button>
        </div>
      </div>
      <span>R$ 9,90</span>
    </CartItemContainer>
  )
}