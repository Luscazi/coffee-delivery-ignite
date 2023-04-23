import {
  HeaderContainer,
  Logo,
  Nav,
  Location,
  Cart,
} from './styles'

import LogoCoffee from './../../../public/logo.svg'
import CartIcon from './../../../public/icons/cart.svg'
import LocationIcon from './../../../public/icons/location.svg'

export function Header() {
  return(
    <HeaderContainer>
      <Logo className="logo">
        <img src={LogoCoffee} alt="" />
      </Logo>
      <Nav>
        <Location >
          <img src={LocationIcon} alt="" />
          Porto Alegre, RS
        </Location>
        <Cart >
          <img src={CartIcon} alt="" />
        </Cart>
      </Nav>
    </HeaderContainer>
  )
}