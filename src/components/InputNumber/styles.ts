import styled from "styled-components";

export const InputNumberContainer = styled.div`
  width: 7.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme['base-button']};

  min-height: 3.2rem;
  height: 100%;
  border-radius: 0.6rem;
  padding: 0 0.8rem;
  gap: 0.4rem;
`

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`

export const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  width: 2rem;
  text-align: center;
  
  :focus {
    box-shadow: none;
  }

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 130%;
  color: ${props => props.theme['base-title']};
`