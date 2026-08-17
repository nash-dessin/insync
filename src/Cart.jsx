import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from './StoreContext';

export default function Cart() {
	const { state, dispatch } = useStore()
    let sum = 0;
        for (const item of state.cart) {
        sum += item.price * item.qty;
    }

    const total = sum.toFixed(2);

	return (
		<section>
			<h2>Your Cart</h2>
			{state.cart.length === 0 && (
				<div>
					<p>Your cart is empty... Browse some more to add to your collection!</p>
					<Link to="/products">Browse products➤</Link>
				</div>
			)}
			<ul className="cart-list">
				{state.cart.map((item) => (
					<li key={item.id} className="cart-item">
						<img src={item.image} alt={item.title} className="mini" />
						<div className="cart-info">
							<strong>{item.title}</strong>
							<p>${item.price}</p>
							<label>
								Qty:
								<input
									type="number"
									min={1}
									value={item.qty}
									onChange={(e) => dispatch({ type: 'set_qty', payload: { id: item.id, qty: Number(e.target.value) } })}
								/>
							</label>
							<button onClick={() => dispatch({ type: 'remove_from_cart', payload: item.id })}> Remove ➤</button>
						</div>
					</li>
				))}
			</ul>
			{state.cart.length > 0 && (
				<div className="cart-footer">
					<div>Total: ${total}</div>
					<Link to="/checkout" className="btn-primary">
						Checkout➤
					</Link>
				</div>
			)}
		</section>
	)
}

