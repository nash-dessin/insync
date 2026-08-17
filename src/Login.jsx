import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useStore } from './StoreContext.jsx'


export default function Login() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [error, setError] = useState('')
	const { dispatch } = useStore()
	const navigate = useNavigate()
	const location = useLocation()

	const from = location.state?.from?.pathname || '/'

	function submit(e) {
		e.preventDefault()
		if (!name()) return setError('Please enter your name...')
		dispatch({ type: 'login', payload: { name } })
		navigate(from, { replace: true })
	}

		function submit(e) {
		e.preventDefault()
		if (!email()) return setError('Please enter your email...')
		dispatch({ type: 'login', payload: { email } })
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
				<label>
					Email
					<input value={email} onChange={(e) => setEmail(e.target.value)}/>
				</label>
				{error && <div className="error">{error}</div>}
				<button type="submit">Login ➤</button>
			</form>
		</section>
	)
}

