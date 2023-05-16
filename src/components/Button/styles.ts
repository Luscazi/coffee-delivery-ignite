import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  height: 3.2rem;
  background-color: ${props => props.theme['base-button']};
  padding: 0.8rem;
  border: none;
  border-radius: 0.6rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 160%;

  cursor: pointer;
`