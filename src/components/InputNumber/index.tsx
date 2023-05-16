import {
  InputNumberContainer,
  Button,
  Input,
} from './styles'

import IncrementIcon from './../../assets/icons/increment.svg'
import DecrementIcon from './../../assets/icons/decrement.svg'

import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  value: number
  setValue: (value: number) => void
  min: number
  max: number
}

export function InputNumber(props: InputProps) {
  function HandleChangeValue(type: string) {
    if (type === 'Decrement') {
      props.setValue(Math.max(props.value - 1, props.min));
    } else if (type === 'Increment') {
      props.setValue(Math.min(props.value + 1, props.max));
    }
  }
  return(
    <InputNumberContainer>
      <Button onClick={() => HandleChangeValue('Decrement')}>
        <img src={DecrementIcon} alt="" />
      </Button>
      <Input type="text" {...props} />
      <Button onClick={() => HandleChangeValue('Increment')}>
        <img src={IncrementIcon} alt="" />
      </Button>
    </InputNumberContainer>
  )
}