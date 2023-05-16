import { useContext, useState } from "react";
import { ContainerValue } from "./styles";
import { CoffeeContext } from "../../../../context/CoffeeContext";

export function CartProductsValues() {
  const { cartProducts, CoffeProductList } = useContext(CoffeeContext)

  function ConverterNumber(value: number) {
    const convertedNumber = value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

    if (convertedNumber) {
      return convertedNumber
    }

    return value
  }

  const cartPricesProducts = cartProducts.map(cartProduct => {
    const productPrices = CoffeProductList.find(productList => productList.id === cartProduct.id)?.price
    if (productPrices) {
      return productPrices * cartProduct.value
    }
    return 0
  })

  const totalPriceItems = cartPricesProducts.reduce((accumulator: number, currentNumber) => {
    if (currentNumber !== undefined) {
      return accumulator + currentNumber;
    }
    return accumulator
  }, 0);

  const deliveryTax = 6

  const totalPrice = totalPriceItems + deliveryTax

  return (
    <ContainerValue>
      <div className="total-items">
        <span className="left">Total de itens</span>
        <span className="right">{ConverterNumber(totalPriceItems)}</span>
      </div>
      <div className="tax-delivery">
        <span className="left">Entrega</span>
        <span className="right">{ConverterNumber(deliveryTax)}</span>
      </div>
      <div className="total">
        <span className="left">Total</span>
        <span className="right">{ConverterNumber(totalPrice)}</span>
      </div>
    </ContainerValue>
  )
}