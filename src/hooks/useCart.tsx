
import {useEffect, useState} from 'react'
import type {ProductPanelType} from '../types/ProductPanelType'
import {productsData} from '../data/products'
import type {ProductPreview} from '../types/ProductPreview'

export const useCart = () => {

    const [productPanel, setProductPanel] = useState<ProductPanelType[]>([])
    const [isLoadingPanelProducts, setIsLoadingPanelProducts] = useState<boolean>(true)
    const [cartPreviewProducts, setCartPreviewProducts] = useState<ProductPreview[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoadingPanelProducts(true)
            await new Promise(resolve => setTimeout(resolve, 3000))
            setIsLoadingPanelProducts(false)
            const productsPanelData:ProductPanelType[] = productsData.map(productData => ({
                id:productData.id,
                title: productData.title,
                price: productData.price,
                description: productData.description
            }))
            setProductPanel(productsPanelData)
        }
        void fetchProducts()
    },[])

    const addProductToCart = (product: ProductPanelType) => {
        setCartPreviewProducts(currentCart => {
            const existingProduct = currentCart.find(item => item.id == product.id)
            if(existingProduct){
                return currentCart.map(currentProduct => currentProduct.id == product.id ?
                    {
                        ...currentProduct,
                        quantity: currentProduct.quantity + 1
                    } : currentProduct)
            }
            return [
                ...currentCart,
                {
                    id:product.id,
                    title:product.title,
                    quantity:1,
                    price:product.price
                }
            ]
        })
    }

    const deleteProductFromCart = (product: ProductPreview) => {
        setCartPreviewProducts(currentCart => {
            const existingProduct = currentCart.find(item => item.id === product.id)

            if (!existingProduct) {
            return currentCart
            }

            if (existingProduct.quantity === 1) {
            return currentCart.filter(item => item.id !== product.id)
            }

            return currentCart.map(item =>
            item.id === product.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
        })
    }

    

  return {
    productPanel,
    isLoadingPanelProducts,
    addProductToCart,
    cartPreviewProducts,
    // countProductsCart:cartPreviewProducts.
    countProductsCart: cartPreviewProducts.length,
    deleteProductFromCart
  }
}
