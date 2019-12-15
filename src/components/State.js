import React, { createContext } from "react"

const state = {}
export const State = createContext()
export const StateProvider = ({ children }) => (
  <State.Provider value={state}>{children}</State.Provider>
)

// export const useStateValue = () => useContext(State)

export const reducer = (state, payload) => {
  console.log({ state, payload })
  return {
    ...state,
    ...payload,
  }
}
