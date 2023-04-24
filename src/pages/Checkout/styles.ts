import styled from "styled-components";

export const CheckoutContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h2`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 130%;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const CheckoutForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  padding: 4rem;
  background-color: ${props => props.theme['base-card']};
  width: 64rem;
  height: 37.2rem;
  border-radius: 0.6rem;
`

export const FormTitle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  gap: 0.8rem;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 130%;
  color: ${props => props.theme['base-subtitle']};

  span:nth-child(2) {
    font-size: 1.4rem;
    color: ${props => props.theme['base-text']};
  }

  div {
    display: flex;
    flex-direction: column;
  }
`

export const CheckoutPayment = styled.div`
  padding: 4rem;
  background-color: ${props => props.theme['base-card']};
  width: 64rem;
  height: 20.7rem;
  border-radius: 0.6rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  hr {
    border-color: ${props => props.theme['base-button']};
  }
`

export const CartAside = styled.div`
  padding: 4rem;
  background-color: ${props => props.theme['base-card']};
  width: 44.8rem;
  height: 49.8rem;
  border-radius: 0.6rem 4.4rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

export const ButtonConfirm = styled.button`
  min-height: 4.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme['yellow']};
  color: ${props => props.theme['white']};

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;

  cursor: pointer;

  border: none;
  border-radius: 0.6rem;

  transition: 0.1s ease-out;

  :hover {
    background-color: ${props => props.theme['yellow-dark']};
  }
`