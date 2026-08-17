import React from "react";

export default function Checkout() {
	const { state, dispatch } = useStore()
	const [name, setName] = useState(state.user?.name || '')
	const [address, setAddress] = useState('')
	const [error, setError] = useState('')

	function submit(e) {
		e.preventDefault()
		if (!name() || !address()) return setError('Please complete the form.')
		// doesnt really process order
		dispatch({ type: 'clear_from_cart' })
		setError('')
		alert('Order placed — thank you!')
	}

	return (
		<section>
			<h2>Checkout</h2>
			<form onSubmit={submit} className="form">
				<label>
					Name
					<input value={name} onChange={(e) => setName(e.target.value)} />
				</label>
				<label>
					Address
					<input value={address} onChange={(e) => setAddress(e.target.value)} />
				</label>
				{error && <div className="error">{error}</div>}
				<button type="submit">Place order➤</button>
			</form>
		</section>
	)
}

