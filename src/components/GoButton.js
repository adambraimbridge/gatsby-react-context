import React from "react"
import { useStateValue } from "../lib/state"

export const GoButton = () => {
  const [state, reducer] = useStateValue()
  return (
    <>
      <div>Count: {state.count}</div>
      <button onClick={() => reducer({ count: state.count + 1 })}>Go</button>
    </>
  )
}
