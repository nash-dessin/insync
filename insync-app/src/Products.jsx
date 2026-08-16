import React, { useEffect, useState } from 'react'
import { useStore } from './StoreContext'
import ProductCard from './ProductCard'

export default function Products() {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const { state, dispatch } = useStore()

	useEffect(() => {
		let mounted =true
		setLoading(true)
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((data) => {
				if (mounted) setProducts(data)
			})
			.catch((err) => setError(err.message || 'Failed to load'))
			.finally(() => mounted && setLoading(false))
		return () => (mounted = false)
	}, [])

	const query = state.filters.query.toLowerCase()
	const visible = products.filter((p) => p.title.toLowerCase().includes(query) || p.description.toLowerCase().includes(query))

	return (
		<section>
			<h2>Products</h2>
			<div className="search-row">
				<input
					value={state.filters.query}
					onChange={(e) => dispatch({ type: 'filter', payload: { query: e.target.value } })}
					placeholder="Search products"
				/>
			</div>
			{loading && <p>Loading products...</p>}
			{error && <p className="error">{error}</p>}
			<div className="grid">
				{visible.map((p) => (
					<ProductCard key={p.id} product={p} />
				))}
			</div>
		</section>
	)
}

