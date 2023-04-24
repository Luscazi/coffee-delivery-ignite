import { InputStyleContainer } from "./styles";
import { InputHTMLAttributes } from 'react'

type InputText = InputHTMLAttributes<HTMLInputElement>

export function InputText(props: InputText) {
  return(
    <InputStyleContainer {...props}/>
  )
}