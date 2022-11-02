import { useContext } from "react"
import { AuthContext } from "../context/AuthContextProvider"

function useLogout() {
    const {dispatch} = useContext(AuthContext)
    const logout = () => {
        localStorage.clear()
        dispatch({type: "LOGOUT"})
    }

  return {logout}
}

export default useLogout