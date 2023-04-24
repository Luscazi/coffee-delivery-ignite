import styled from "styled-components";

export const InputStyleContainer = styled.input`
  height: 4.2rem;
  padding: 1.2rem;
  background-color: ${props => props.theme['base-input']};
  border: 0.1rem solid ${props => props.theme['base-button']};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 130%;
  border-radius: 0.4rem;

  ::placeholder {
    color: ${props => props.theme['base-label']};
  }
`