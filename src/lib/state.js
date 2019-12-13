// @see: https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c
import React, { createContext, useContext, useReducer } from "react"
const StateContext = createContext()
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)
export const useStateValue = () => useContext(StateContext)
export const reducer = (state, payload) => {
  console.log({ state, payload })
  return {
    ...state,
    ...payload,
  }
}
