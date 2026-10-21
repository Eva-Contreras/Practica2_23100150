import AddButton from './AddButton'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
 
function Panel() {
 
  const {productPanel, isLoadingPanelProducts} = useContext(CartContext)
  return (
    <>
      {isLoadingPanelProducts ? (
        <p>Loading products...</p>
      ) : (
        productPanel.map((product) => (
          <article className="product-card" key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <AddButton product={product}/>
          </article>
        )))}
      </>
  )
}
 
export default Panel