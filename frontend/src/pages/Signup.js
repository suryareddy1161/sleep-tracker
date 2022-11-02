import React, { useState } from 'react'
import {motion} from "framer-motion"
import useSignup from '../hooks/useSignup'
function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {signup, error} = useSignup()
    const handleSignup = async (e) => {
        e.preventDefault()
        console.log(email, password)
        await signup(email, password)
    }

    return (
        <motion.div className='container'
        animate={{x: 0}}
        initial={{x: "-100vw"}}
        transition={{delay: 0.5}}
        >
            <div className='text-center py-5 my-5'>
                <h3 className='text-primary py-3'>Welcome To Signup Page</h3>
                <form onSubmit={handleSignup}>
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

export default Signup