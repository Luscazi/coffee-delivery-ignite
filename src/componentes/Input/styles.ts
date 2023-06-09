import styled, { css } from "styled-components";
import { RegularText } from "../Typography";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    color: ${({ theme }) => theme.colors["base-error"]};
  }
`
type InputStyleContainerProps = {
  hasError: boolean
}

export const InputStyleContainer = styled.div<InputStyleContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  background: ${({ theme }) => theme.colors["base-input"]};
  transition: 0.4s;
  overflow: hidden;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }

  ${({ theme, hasError }) => 
  hasError && 
  css`
    border-color: ${theme.colors["base-error"]};
  `}
`

export const InputStyled = styled.input`
  flex: 1;
  height: 100%;
  background: none;
  border: none;
  font-size: 0.75rem;
  padding: 0 0.75rem;
  color: ${({ theme }) => theme.colors["base-text"]};

  &::placeholder {
    border-color: ${({ theme }) => theme.colors["base-label"]};
  }
`

export const RightText = styled.p`
  margin-right: 0.75rem;
  font-size: 0.75rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors["base-label"]};
`