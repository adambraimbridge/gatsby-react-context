import React from "react"
import { StateProvider, reducer } from "../lib/state"
import { Home } from "./home"
import { GoButton } from "../components/GoButton"

export default () => {
  const initialState = {
    count: 0,
  }

  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      <GoButton />
      <Home />
    </StateProvider>
  )
}
