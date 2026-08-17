import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<section className="home">
			<h1>Welcome to The INSYNC ♤ Store</h1>
			<p>Browse curated products and style with confidence!</p>
			<Link to="/products" className="btn-primary">
				View Products ➤
			</Link>
		</section>
	)
}

