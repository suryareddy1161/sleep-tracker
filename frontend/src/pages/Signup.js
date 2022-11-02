import React, { useState } from 'react'
import {motion} from "framer-motion"
import useSignup from '../hooks/useSignup'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Box } from '@mui/material';
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
            <div className='text-center my-5'>
                <form onSubmit={handleSignup} className="login">
                    <h3>Signup</h3>
                    <Box margin="20px 0">
                        <Typography>Email</Typography>
                        <TextField type="text" 
                         variant="standard"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        />
                    </Box>
                    <Box>
                        <Typography>Password</Typography>
                        <TextField id="standard-password-input"
                        type="password"
                        variant="standard" 
                        onChange={e => setPassword(e.target.value)}
                        value={password}
    
                        />
                    </Box>
                    <Button variant='contained' color='error' component="button" type='submit'>Submit</Button>
                    {error && <Typography className='error'>{error}</Typography>}
                </form>
            </div>
        </motion.div>
      )
}

export default Signup