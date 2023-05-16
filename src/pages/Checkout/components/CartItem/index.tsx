import { InputNumber } from "../../../../components/InputNumber";
import { CartItemContainer } from "./styles";
import Product from './../../../../assets/products/Image-1.png'
import TrashIcon from './../../../../assets/icons/trash.svg'
import { Button } from "../../../../components/Button";
import { CoffeProductCartListType, CoffeProductListType } from "../../../../@types/CoffeTypes";
import { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "../../../../context/CoffeeContext";

export function CartItem({ id, value }: CoffeProductCartListType) {
  const { CoffeProductList, ChangeValueProductCart ,RemoveProductCart } = useContext(CoffeeContext)
  const Product = CoffeProductList.find(product => product.id === id)
  const [cartProductValue, setCartProductValue] = useState(value)

  useEffect(() => {
    if (cartProductValue) {
      ChangeValueProductCart(id, cartProductValue)
    }
  },[cartProductValue])
  
  return(
    <CartItemContainer>
      <img className="product" src={Product?.image} alt="" />
      <div className="actionBox">
        <span>{Product?.name}</span>
        <div className="actions">
          <InputNumber 
            min={1}
            value={cartProductValue}
            max={9} 
            setValue={setCartProductValue}
          />
          <Button
            onClick={() => RemoveProductCart(id)}
            text="REMOVER"
          >
            <img src={TrashIcon} alt="" />
          </Button>
        </div>
      </div>
      <span>R$ {Product?.price}</span>
    </CartItemContainer>
  )
}