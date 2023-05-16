import {
  HeaderContainer,
  Logo,
  Nav,
  Location,
  CartLink,
  Cart,
  CartValue,
} from './styles'

import LogoCoffee from './../../assets/logo.svg'
import CartIcon from './../../assets/icons/cart.svg'
import LocationIcon from './../../assets/icons/location.svg'
import { useContext } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'
import { useLocation, useNavigate } from 'react-router-dom'

export function Header() {
  const { cartProducts } = useContext(CoffeeContext)
  const cartHaveProduct = cartProducts.length > 0
  const cartRoute = cartHaveProduct ? '/checkout' : useLocation()

  return(
    <HeaderContainer>
      <Logo to={'/'} className="logo">
        <img src={LogoCoffee} alt="" />
      </Logo>
      <Nav>
        <Location >
          <img src={LocationIcon} alt="" />
          Jaru, RO
        </Location>
        <CartLink to={cartRoute}>
          <Cart>
            {cartHaveProduct && <CartValue>{cartProducts.length}</CartValue>}
            <img src={CartIcon} alt="" />
          </Cart>
        </CartLink>
      </Nav>
    </HeaderContainer>
  )
}