import { ButtonContainer } from "./styles";

type ButtonProps = {
  children: React.ReactNode
  text: string
}

export function Button({children, text}: ButtonProps) {
  return(
    <ButtonContainer>
      {children}
      {text}
    </ButtonContainer>
  )
}