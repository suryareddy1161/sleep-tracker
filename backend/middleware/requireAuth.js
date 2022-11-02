const User = require("../models/userModels")
const jwt = require("jsonwebtoken")

const requireAuth = async (req, res, next) => {
    if(!req.headers.authorization) {
        return res.status(401).json({error: "Authorization is required"})
    }
    const token = req.headers.authorization.split(" ")[1]
    try {
       
        const user = jwt.verify(token, process.env.SECRET)

        req.user = await User.findById(user._id).select("_id")
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({error: "Authorization is required"})
    }
}

module.exports = requireAuth