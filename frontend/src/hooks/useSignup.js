import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContextProvider"

function useSignup() {

    const navigate = useNavigate()
    const {dispatch} = useContext(AuthContext)
    const [error, setError] = useState(null)
    const signup = async (email, password) => {
        await axios.post("api/user/signup", {email, password})
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

    return {signup, error}
}

export default useSignup