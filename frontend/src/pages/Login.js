import React, { useState } from 'react'
import {motion} from "framer-motion"
import useLogin from '../hooks/useLogin'
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {login, error} = useLogin()
    const handleLogin = async (e) => {
        e.preventDefault()
        console.log(email, password)
        await login(email, password)
    }

    return (
        <motion.div className='container'
        animate={{x: 0}}
        initial={{x: "-100vw"}}
        transition={{delay: 0.5}}
        >
            <div className='text-center py-5 my-5'>
                <h3 className='text-primary py-3'>Welcome To Login Page</h3>
                <form onSubmit={handleLogin}>
                    <div>
                        <label>Email: </label>
                        <input type="text" onChange={e => setEmail(e.target.value)}
                        value={email}
                        />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" onChange={e => setPassword(e.target.value)}
                        value={password}
                        />
                    </div>
                    <button>Submit</button>
                    {error && <div className='error'>{error}</div>}
                </form>
            </div>
        </motion.div>
      )
}

export default Login