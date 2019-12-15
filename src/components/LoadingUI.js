import React from 'react'
import { Context } from './Context'

export const LoadingUI = () => {
	const { state } = React.useContext(Context)
	const { loading } = state || false
	return loading ? <div>loading ...</div> : <div>connected</div>
}
