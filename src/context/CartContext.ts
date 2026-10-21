
import { createContext } from 'react'
import type { ProductPanelType } from '../types/ProductPanelType'
import type { ProductPreview } from '../types/ProductPreview'

type CartContextValue = {
  productPanel: ProductPanelType[]
  isLoadingPanelProducts: boolean
  addProductToCart: (product: ProductPanelType) => void
  cartPreviewProducts: ProductPreview[]
  countProductsCart: number
  deleteProductFromCart: (product: ProductPreview) => void
}

export const CartContext = createContext<CartContextValue>(
    {
        productPanel: [],
        isLoadingPanelProducts:false,
        addProductToCart: () => {},
        cartPreviewProducts: [],
        countProductsCart: 0,
        deleteProductFromCart: () => {}
    }
)
 