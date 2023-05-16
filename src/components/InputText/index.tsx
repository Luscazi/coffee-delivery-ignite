import { InputStyleContainer, InputStyled, InputWrapper, RightText } from "./styles";
import { InputHTMLAttributes, forwardRef } from 'react'

type InputText = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
}

export const InputText = forwardRef<HTMLInputElement, InputText>(
  ({ error, className, rightText, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          <InputStyled {...props} ref={ref}/>
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error && (
          <p>{error}</p>
        )}
      </InputWrapper>
    )
  }
)