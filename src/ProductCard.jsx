import React from 'react'
import { Link } from 'react-router-dom'
import { useStore } from './StoreContext.jsx'

export default function ProductCard({ product }) {
  const { dispatch } = useStore()
  return (
    <article className="card">
      <Link to={`/products/${product.id}`} className="card-link">
        <img src={product.image} alt={product.title} className="thumb" />
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
      </Link>
      <div className="card-actions">
        <button onClick={() => dispatch({ type: 'add_to_cart', payload: product })}>Add to cart ➤</button>
      </div>
    </article>
  )
}
