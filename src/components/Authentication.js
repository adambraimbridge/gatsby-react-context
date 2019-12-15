import React from "react"
import { State } from "./State"

export const AuthenticationUI = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState(null)
  const value = useMemo(() => ({ authenticatedUser, setAuthenticatedUser }), [
    authenticatedUser,
    setAuthenticatedUser,
  ])
}
