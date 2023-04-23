import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 10.4rem;
`

export const Logo = styled.div``

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

export const Cart = styled.div`
  background-color: ${props => props.theme['yellow-light']};
  cursor: pointer;
`
