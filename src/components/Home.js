import React from 'react'
import { Context } from './Context'
import { SignInButton } from './AuthenticationUI'

export const Home = () => {
	const { state } = React.useContext(Context)
	const { authenticatedUser } = state || {}

	if (authenticatedUser) {
		return <p>Welcome</p>
	} else {
		return (
			<>
				<p>Please auth</p>
				<SignInButton />
			</>
		)
	}
}
