import { useContext } from 'react'
import { InputNumber } from '../../../../components/InputNumber'
import { CoffeeContext } from '../../../../context/CoffeeContext'
import {
  CatalogContainer,
  Types,
  Title,
  Description,
  Value,
  TypesBox,
  Button,
  CoverProduct,
} from './styles'

import CartWhite from './../../../../assets/icons/cart-white.svg'
import { useState } from 'react'
import { CoffeProductListType } from '../../../../@types/CoffeTypes'

export function Catalog({ id, image, name, type, price }: CoffeProductListType) {
  const [value, setValue] = useState(1)
  const { AddProductToCart } = useContext(CoffeeContext)


  function HandleAddProductToCart() {
    AddProductToCart(id, value)
    setValue(1)
  }

  return(
    <CatalogContainer>
      <CoverProduct src={image} alt="" />
      <TypesBox>
        {type.map((item, index) => (
          <Types className="type">
            <span key={index}>{item}</span>
          </Types>
        ))}
      </TypesBox>
      <Title>{name}</Title>
      <Description>O tradicional café feito com água quente e grãos moídos</Description>
      <Value>
        <span>R$ <strong>{price}</strong></span>
        <div>
          <InputNumber min={1} max={9} setValue={setValue} value={value} />
          <Button onClick={HandleAddProductToCart}>
            <img src={CartWhite} alt="" />
          </Button>
        </div>
      </Value>
    </CatalogContainer>
  )
}