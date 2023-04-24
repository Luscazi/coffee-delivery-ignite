import styled from "styled-components";

export const ContainerPaymentMethod = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
`

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 160%;

  padding: 1.6rem;
  border-radius: 0.6rem;

  cursor: pointer;

  background-color: ${props => props.theme['base-button']};
  transition: background-color 0.1s ease-out;

  :hover {
    background-color: ${props => props.theme['base-hover']};
  }
`
