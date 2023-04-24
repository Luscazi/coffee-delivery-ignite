import { InputText } from "../../../../components/InputText";
import { FormContainer } from "./styles";

export function AdressFormContainer() {
  return(
    <FormContainer>
      <InputText placeholder="CEP" type="number" className="cep"/>
      <InputText placeholder="Rua" className="street"/>
      <InputText placeholder="Número" type="number"/>
      <InputText placeholder="Complemento" className="complement"/>
      <InputText placeholder="Bairro" />
      <InputText placeholder="Cidade" />
      <InputText placeholder="UF" />
    </FormContainer>
  )
}