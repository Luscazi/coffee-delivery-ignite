import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonContainer } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  children: ReactNode;
};

export function Button({children, text, ...restProps}: ButtonProps) {
  return(
    <ButtonContainer
      {...restProps}
    >
      {children}
      {text}
    </ButtonContainer>
  )
}