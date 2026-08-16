import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useStore } from './StoreContext.jsx'


export default function Login() {
	const [name, setName] = useState('')
	const [error, setError] = useState('')
	const { dispatch } = useStore()
	const navigate = useNavigate()
	const location = useLocation()

	const from = location.state?.from?.pathname || '/'

	function submit(e) {
		e.preventDefault()
		if (!name()) return setError('Please enter your name...')
		dispatch({ type: 'LOGIN', payload: { name } })
		navigate(from, { replace: true })
	}

	return (
		<section>
			<h2>Login</h2>
			<form onSubmit={submit} className="form">
				<label>
					Name
					<input value={name} onChange={(e) => setName(e.target.value)} />
				</label>
				{error && <div className="error">{error}</div>}
				<button type="submit">Login</button>
			</form>
		</section>
	)
}

