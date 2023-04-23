type CatalogProps = {
  image: string
  type: string[]
  title: string
}

import { InputNumber } from '../../../../components/InputNumber'
import {
  CatalogContainer,
  Types,
  Title,
  Description,
  Value,
  TypesBox,
  Button,
} from './styles'

import CartWhite from './../../../../../public/icons/cart-white.svg'

export function Catalog({ image, title, type }: CatalogProps) {
  return(
    <CatalogContainer>
      <img src={image} alt="" />
      <TypesBox>
        {type.map((item, index) => (
          <Types className="type">
            <span key={index}>{item}</span>
          </Types>
        ))}
      </TypesBox>
      <Title>{title}</Title>
      <Description>O tradicional café feito com água quente e grãos moídos</Description>
      <Value>
        <span>R$ <strong>9,90</strong></span>
        <div>
          <InputNumber min={1} max={9} value={1} />
          <Button>
            <img src={CartWhite} alt="" />
          </Button>
        </div>
      </Value>
    </CatalogContainer>
  )
}