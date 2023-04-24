import { ContainerValue } from "./styles";

export function CartProductsValues() {
  return (
    <ContainerValue>
      <div className="total-items">
        <span className="left">Total de itens</span>
        <span className="right">R$ 29,70</span>
      </div>
      <div className="tax-delivery">
        <span className="left">Entrega</span>
        <span className="right">R$ 3,50</span>
      </div>
      <div className="total">
        <span className="left">Total</span>
        <span className="right">R$ 33,20</span>
      </div>
    </ContainerValue>
  )
}