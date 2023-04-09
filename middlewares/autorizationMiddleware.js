const { User } = require('../models/user')
const jwt = require('jsonwebtoken');
require("dotenv").config();

const {SECRET_KEY} = process.env;

const authMiddleware = async (req, res, next) => {

    const {authorization = ""} = req.headers;
    const [bearer, token] = authorization.split(" ")

    try {
        if(bearer !== "Bearer"){
            return res.status(401).json({ message: "Not authorized" })
        }
        
        const {id} = jwt.verify(token, SECRET_KEY)
        
        const user = await User.findById(id)
        
        if(!user || !user.token){
            return res.status(401).json({ message: "Not authorized" })
        }
        req.user = user
        next()
        
    } catch (error) {
        if(error){
            return res.status(401).json({ message: "Invalid Signature" })
        }
        next(error)
    }
}

module.exports = {
    authMiddleware,
}