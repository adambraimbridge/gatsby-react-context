import React from 'react'
import { Context } from './Context'

export const SignOutButton = () => {
	const { state, setState } = React.useContext(Context)
	const { authenticatedUser, loading } = state || false
	return (
		<>
			<pre>{JSON.stringify({ authenticatedUser })}</pre>
			<button onClick={() => setState({ loading: !loading })}>Sign out</button>
		</>
	)
}

export const AuthenticationUI = () => {
	const { state, setState } = React.useContext(Context)
	const { authenticatedUser } = state || {}

	React.useLayoutEffect(() => {
		;(async () => {
			setState({ authenticatedUser: true })
		})()
	}, [setState])

	if (authenticatedUser) {
		return <SignOutButton />
	} else {
		return <button>Sign in</button>
	}
}
