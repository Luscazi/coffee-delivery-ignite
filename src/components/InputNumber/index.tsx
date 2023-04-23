import {
  InputNumberContainer,
  Button,
  Input,
} from './styles'

import IncrementIcon from './../../../public/icons/increment.svg'
import DecrementIcon from './../../../public/icons/decrement.svg'

import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function InputNumber(props: InputProps) {
  return(
    <InputNumberContainer>
      <Button>
        <img src={DecrementIcon} alt="" />
      </Button>
      <Input type="text" {...props} />
      <Button>
        <img src={IncrementIcon} alt="" />
      </Button>
    </InputNumberContainer>
  )
}