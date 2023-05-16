import styled, { css } from "styled-components";

export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      background: ${theme['purple-light']};
      border-color: ${theme['purple']};

      &:hover {
        background: ${({ theme }) => theme['purple-light']};
      }
    `}
  }
`

export const ContentContainer = styled.div`
  padding: 0 1.6rem;
  background: ${({ theme }) => theme['base-button']};
  color: ${({ theme }) => theme['base-text']};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  border-radius: 0.6rem;
  height: 4.8rem;
  border: 1px solid ${({ theme }) => theme['base-button']};

  transition: 0.4s;

  svg {
    color: ${({ theme }) => theme['purple']};
  }
  &:hover {
    background: ${({ theme }) => theme['base-hover']};
  }

  user-select: none;
`