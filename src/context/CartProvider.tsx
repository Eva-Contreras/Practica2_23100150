import { type ReactNode } from 'react'
import { useCart } from '../hooks/useCart'
import { CartContext } from './CartContext'
 
type CartProviderProps = {
    children:ReactNode
}
 
export const CartProvider = ({children}:CartProviderProps) => {
    const {productPanel, isLoadingPanelProducts, addProductToCart, cartPreviewProducts, countProductsCart, deleteProductFromCart} = useCart()
  return (
    <CartContext.Provider
    value={{
        productPanel,
        isLoadingPanelProducts,
        addProductToCart,
        cartPreviewProducts,
        countProductsCart,
        deleteProductFromCart
    }}>
        {children}
    </CartContext.Provider>
  )
}