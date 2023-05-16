export type CoffeeContextType = {
  CoffeProductList: CoffeProductListType[]
  cartProducts: CoffeProductCartListType[]

  AddProductToCart: (id: number, value: number) => void
  ChangeValueProductCart: (id: number, value: number) => void
  RemoveProductCart: (id: number) => void
  cleanCart: () => void
}

export type CoffeProductListType = {
  id: number
  image: string
  name: string
  type: string[]
  price: number
}

export type CoffeProductCartListType = {
  id: number
  value: number
}
