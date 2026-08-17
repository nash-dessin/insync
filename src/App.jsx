import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StoreProvider } from './StoreContext.jsx'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import Products from './Products.jsx'
import ProdDetails from './ProdDetails.jsx'
import Cart from './Cart.jsx'
import Checkout from './Checkout.jsx'
import Login from './Login.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'

export default function App() {
	return (
		<StoreProvider>
			<BrowserRouter>
				<Navbar />
				<main className="container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/products" element={<Products />} />
						<Route path="/products/:id/*" element={<ProdDetails />} />
						<Route path="/cart" element={<Cart />} />
						<Route
							path="/checkout"
							element={
								<ProtectedRoute>
									<Checkout />
								</ProtectedRoute>
							}
						/>
						<Route path="/login" element={<Login />} />
					</Routes>
				</main>
			</BrowserRouter>
		</StoreProvider>
	)
}

