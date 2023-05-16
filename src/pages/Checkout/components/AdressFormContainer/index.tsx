import { useFormContext } from "react-hook-form";
import { InputText } from "../../../../components/InputText";
import { FormContainer } from "./styles";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AdressFormContainer() {
  const { register, formState } = useFormContext()
  const { errors } = formState as unknown as ErrorsType
  return(
    <FormContainer>
      <InputText
        placeholder="CEP"
        type="number"
        className="cep"
        {...register('cep')}
        error={errors.cep?.message}
      />
      <InputText
        placeholder="Rua"
        className="street"
        {...register('street')}
        error={errors.street?.message}
      />
      <InputText
        placeholder="Número"
        type="number"
        {...register('number')}
        error={errors.number?.message}
      />
      <InputText
        placeholder="Complemento"
        className="complement"
        {...register('complement')}
        error={errors.complement?.message}
        rightText="Opcional"
      />
      <InputText
        placeholder="Bairro"
        {...register('district')}
        error={errors.district?.message}
      />
      <InputText
        placeholder="Cidade"
        {...register('city')}
        error={errors.city?.message}
      />
      <InputText
        placeholder="UF"
        {...register('uf')}
        error={errors.uf?.message}
      />
    </FormContainer>
  )
}