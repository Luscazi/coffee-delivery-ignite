import { createContext, ReactNode, useEffect, useState } from "react";
import { CoffeeContextType, CoffeProductCartListType, CoffeProductListType } from "../@types/CoffeTypes";
import CooffeeA from './../assets/products/Image.png'
import CooffeeB from './../assets/products/Image-1.png'
import CooffeeC from './../assets/products/Image-2.png'
import CooffeeD from './../assets/products/Image-3.png'
import CooffeeE from './../assets/products/Image-4.png'
import CooffeeF from './../assets/products/Image-5.png'
import CooffeeG from './../assets/products/Image-6.png'
import CooffeeH from './../assets/products/Image-7.png'
import CooffeeI from './../assets/products/Image-8.png'
import CooffeeJ from './../assets/products/Image-9.png'
import CooffeeK from './../assets/products/Image-10.png'
import CooffeeL from './../assets/products/Image-11.png'
import CooffeeM from './../assets/products/Image-12.png'
import CooffeeN from './../assets/products/Image-13.png'

const COFEE_ITEMS_STORAGE_KEY = 'coffeeDelivery:cartItems'

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({children} : CoffeeContextProviderProps) {
  const CoffeProductList: CoffeProductListType[] = [
    {id: 1, image: CooffeeA, name: 'Expresso Tradicional', type: ['Tradicional'], price: 5.49},
    {id: 2, image: CooffeeB, name: 'Expresso Americano', type: ['Tradicional'], price: 5.49},
    {id: 3, image: CooffeeC, name: 'Expresso Cremoso', type: ['Tradicional'], price: 5.49},
    {id: 4, image: CooffeeD, name: 'Expresso Gelado', type: ['Tradicional', 'Gelado'], price: 5.49},
    {id: 5, image: CooffeeE, name: 'Café com Leite', type: ['Tradicional', 'Com leite'], price: 5.49},
    {id: 6, image: CooffeeF, name: 'Latte', type: ['Tradicional', 'Com leite'], price: 5.49},
    {id: 7, image: CooffeeG, name: 'Capuccino', type: ['Tradicional', 'Com leite'], price: 5.49},
    {id: 8, image: CooffeeH, name: 'Macchiato', type: ['Tradicional', 'Com leite'], price: 5.49},
    {id: 9, image: CooffeeI, name: 'Mocaccino', type: ['Tradicional', 'Com leite'], price: 5.49},
    {id: 10, image: CooffeeJ, name: 'Chocolate Quente', type: ['Tradicional', 'Com leite'], price: 5.49},
    {id: 11, image: CooffeeK, name: 'Cubano', type: ['Especial', 'Alcoólico', 'Gelado'], price: 5.49},
    {id: 12, image: CooffeeL, name: 'Havaiano', type: ['Especial'], price: 5.49},
    {id: 13, image: CooffeeM, name: 'Árabe', type: ['Especial'], price: 5.49},
    {id: 14, image: CooffeeN, name: 'Irlandês', type: ['Especial', 'Alcoólico'], price: 5.49},
  ]

  const [cartProducts, setCartProducts] = useState<CoffeProductCartListType[]>(() => {
    const storedCartItems = localStorage.getItem(COFEE_ITEMS_STORAGE_KEY)
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return []
  })

  function AddProductToCart(id: number, value: number) {
    if (id) {
      let found = false
      const updatedCartProducts = cartProducts.map(product => {
        if (product.id === id) {
          found = true
          return { ...product, value: product.value + value }
        }
        return product
      })
  
      if (found) {
        setCartProducts(updatedCartProducts)
      } else {
        setCartProducts([...updatedCartProducts, { id: id, value: value }])
      }
    }
  }

  function ChangeValueProductCart(id: number, value: number) {
    if (id && value) {
      let found = false
      const updatedCartProducts = cartProducts.map(product => {
        if (product.id === id) {
          found = true
          return {...product, value: value}
        }
        return product
      })

      if (found) {
        setCartProducts(updatedCartProducts)
      }
    }
  }

  function RemoveProductCart(id: number) {
    if (id) {
      const CartListProducts = cartProducts.filter(product => product.id !== id)
      if (CartListProducts) {
        setCartProducts(CartListProducts)
      }
    }
  }

  function cleanCart() {
    setCartProducts([])
  }

  useEffect(() => {
    localStorage.setItem(COFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartProducts))
  },[cartProducts])
  
  return (
    <CoffeeContext.Provider
    value={{
      CoffeProductList,
      cartProducts,
      AddProductToCart,
      ChangeValueProductCart,
      RemoveProductCart,
      cleanCart,
    }}
  >
    {children}
  </CoffeeContext.Provider>
  )
}
