import { InputHTMLAttributes, forwardRef } from "react";
import { InputStyleContainer, InputWrapper, InputStyled, RightText } from "./styles";
import { RegularText } from "../Typography";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, error, rightText, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          <InputStyled {...props} ref={ref} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error && (
          <RegularText size="s">{error}</RegularText>
        )}
      </InputWrapper>
    )
  }
)