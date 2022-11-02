import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContextProvider"

function useLogin() {

    const navigate = useNavigate()
    const {dispatch} = useContext(AuthContext)
    const [error, setError] = useState(null)
    const login = async (email, password) => {
        await axios.post("api/user/login", {email, password})
            .then(res => {
                localStorage.setItem('user', JSON.stringify(res.data))
                dispatch({type: "LOGIN", payload: res.data})
                navigate("/")
            })
            .catch(error => {
                console.log(error.response.data.error)
                setError(error.response.data.error)
            })
    }

    return {login, error}
}

export default useLogin