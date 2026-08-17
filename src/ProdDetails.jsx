import React, { useEffect, useState } from 'react'
import { useParams, Link, Routes, Route, NavLink } from 'react-router-dom'
import { useStore } from './StoreContext.jsx'

function Overview({ product }) {
	return (
		<div>
			<p>{product.description}</p>
			<p className="price">${product.price}</p>
		</div>
	)
}

function Reviews() {
	return <div>No reviews yet.</div>
}

function Specs({ product }) {
	return (
		<div>
			<p>Category: {product.category}</p>
			<p>Rate: {product.rating?.rate ?? 'N/A'}</p>
		</div>
	)
}

export default function ProdDetails() {
	const { id } = useParams()
	const [product, setProduct] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const { dispatch } = useStore()

	useEffect(() => {
		setLoading(true)
		fetch(`https://fakestoreapi.com/products/${id}`)
});
	if (loading) return <p>Loading...</p>
	if (error) return <p className="error">{error}</p>
	if (!product) return <p>Product not found</p>

	return (
		<section>
			<div className="detail">
				<img src={product.image} alt={product.title} className="detail-img" />
				<div>
					<h2>{product.title}</h2>
					<div className="tabs">
						<NavLink to="overview" className={({ isActive }) => (isActive ? 'active' : '')}>
							Overview
						</NavLink>
						<NavLink to="reviews" className={({ isActive }) => (isActive ? 'active' : '')}>
							Reviews
						</NavLink>
						<NavLink to="specs" className={({ isActive }) => (isActive ? 'active' : '')}>
							Specs
						</NavLink>
					</div>
					<div className="detail-actions">
						<button onClick={() => dispatch({ type: 'add_to_cart', payload: product })}>Add to cart </button>
						<Link to="/cart" className="btn-secondary">
							Go to cart ➤
						</Link>
					</div>
				</div>
			</div>

			<Routes>
				<Route path="/" element={<Overview product={product} />} />
				<Route path="overview" element={<Overview product={product} />} />
				<Route path="reviews" element={<Reviews />} />
				<Route path="specs" element={<Specs product={product} />} />
			</Routes>
		</section>
	)
}

