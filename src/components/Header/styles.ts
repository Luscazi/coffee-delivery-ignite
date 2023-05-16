import styled from "styled-components";
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100000;
  width: 100%;
  padding: 0 39.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 10.4rem;
  background-color: ${({ theme }) => theme['background']};
`

export const Logo = styled(Link)``

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    
    height: 3.8rem;
    border-radius: 0.6rem;
    padding: 0.8rem;

    font-size: 1.4rem;
    font-weight: 400;
    line-height: 130%;
  }
`

export const Location = styled.div`
  background-color: ${props => props.theme['purple-light']};
  color: ${props => props.theme['purple-dark']};
  cursor: default;
`

export const CartLink = styled(Link)`
  :focus {
    box-shadow: none;
  }
`

export const Cart = styled.div`
  background-color: ${props => props.theme['yellow-light']};
  cursor: pointer;
`

export const CartValue = styled.span`
  position: absolute;
  color: ${props => props.theme['white']};
  background-color: ${props => props.theme['yellow-dark']};
  font-size: 1.2rem;
  font-weight: 700;

  border-radius: 999px !important;
  cursor: pointer;
  width: 20px;
  height: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -30px;
  margin-right: -30px;
`