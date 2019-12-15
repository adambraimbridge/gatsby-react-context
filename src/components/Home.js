import React from 'react'
import { Context } from './Context'
import { SignOutButton } from './AuthenticationUI'

export const Home = () => {
	const { state } = React.useContext(Context)
	const { authenticatedUser } = state || {}

	if (authenticatedUser) {
		return (
			<>
				<p>Welcome</p>
				<SignOutButton />
			</>
		)
	} else {
		return (
			<>
				<p>Please auth</p>
				<button>Sign in</button>
			</>
		)
	}
}
