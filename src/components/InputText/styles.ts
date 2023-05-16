import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    color: ${props => props.theme['base-error']};
  }
`

interface InputStyleContainerProps {
  hasError: boolean
}

export const InputStyleContainer = styled.div<InputStyleContainerProps>`
  height: 4.2rem;
  background-color: ${props => props.theme['base-input']};
  border: 0.1rem solid ${props => props.theme['base-button']};
  font-family: 'Roboto';
  font-weight: 400;
  line-height: 130%;
  border-radius: 0.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  transition: 0.4s;



  ${({ theme, hasError }) => hasError ? css`
    border-color: ${theme['base-error']};
  `:css`
    &:focus-within {
      border-color: ${props => props.theme['yellow-dark']};
    }
  `}
`

export const InputStyled = styled.input`
  flex: 1;
  height: 100%;
  padding: 1.2rem;
  font-size: 1.4rem;

  background: none;
  border: none;
  outline: none;
  box-shadow: none;
  color: ${props => props.theme['base-text']};

  ::placeholder {
    color: ${props => props.theme['base-label']};
  }
`

export const RightText = styled.p`
  font-size: 1.2rem;
  margin-right: 1.2rem;
  font-style: italic;
  color: ${props => props.theme['base-label']};
`