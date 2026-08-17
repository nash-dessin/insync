import React from 'react'
import { Link } from 'react-router-dom'
import { useStore } from './StoreContext';

export default function Navbar() {
	const { state } = useStore()
        let totalQuantity = 0;

        for (const item of state.cart) {
        totalQuantity += item.qty;
        }

        const cartCount = totalQuantity;
	return (
		<nav className="nav">
			<div className="nav-left">
				<Link to="/" className="brand">
					My Store
				</Link>
			</div>
			<div className="nav-right">
				<Link to="/products">Products</Link>
				<Link to="/cart">Cart ({cartCount})</Link>
				{state.user ? <span className="user">Hello, {state.user.name}</span> : <Link to="/login">Login</Link>}
			</div>
		</nav>
	)
}

