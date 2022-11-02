const User = require("../models/userModels")
const {isEmail, isStrongPassword} = require("validator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// createToken
const createToken = (_id) => {
     return jwt.sign({_id}, process.env.SECRET, {expiresIn: "3d"})
}

// login
const LOGIN = async (req, res) => {
    const {email, password} = req.body;

    try {
        //check if email and password is already filled
        if(!email && !password) throw Error("All fields are required")
        if(!email) throw Error("Email is required")
        if(!password) throw Error("Password is required")

        // check if user is exist with email
        const user = await User.findOne({email})
        if(!user) throw Error("Incorrect Email")

        // check if the password is correct after compare
        const match = await bcrypt.compare(password, user.password)
        if(!match) throw Error("Incorrect Password")
        // generate token
        const token = createToken(user._id)
        // if found user return email and token
        res.status(200).json({email, token}) 
    } catch (error) {
        console.log(error)
        res.status(400).json({error: error.message}) 
    }
}

// signup

const SINGUP = async (req, res) => {
    const {email, password} = req.body;
    try {

        //check if email and password is already filled
        if(!email && !password) throw Error("All fields are required")
        if(!email) throw Error("Email is required")
        if(!password) throw Error("Password is required")

        // validation email and password
        if(!isEmail(email)) throw Error("Email must be valid")
        if(!isStrongPassword(password)) throw Error("Password must be strong")
        
        // check if use is exist
        const isExist = await User.findOne({email})
        if(isExist) throw Error("This email is already existed")

        // hashing bcrypt
        const salt = await bcrypt.genSalt()
        const hashing = await bcrypt.hash(password, salt)
     
        // save to db
        const user = await User.create({email, password: hashing})  
        // generate token
        const token = createToken(user._id)
        res.status(200).json({email, token})  
    } catch (error) {
        console.log(error)
        res.status(400).json({error: error.message}) 
    }
}

module.exports = {
    LOGIN,
    SINGUP
}

