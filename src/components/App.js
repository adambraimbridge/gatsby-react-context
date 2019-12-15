import React from 'react'
import '../style/index.scss'
import { ContextProvider } from './Context'
import { Home } from './Home'
import { AuthenticationUI } from './AuthenticationUI'
import { LoadingUI } from './LoadingUI'

export const App = () => {
	return (
		<ContextProvider>
			<LoadingUI />
			<h1>Goldbug Club</h1>
			<AuthenticationUI />
			<Home />
		</ContextProvider>
	)
}
