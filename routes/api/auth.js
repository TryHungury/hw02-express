const express = require('express')
const { authValidation, loginValidation } = require('../../middlewares/validationMiddleware')
const { authMiddleware } = require('../../middlewares/autorizationMiddleware')

const { auth } = require('../../controllers')

const router = express.Router() 

router.post('/register', authValidation,  auth.register)
router.post('/login', loginValidation,  auth.login)
router.get('/logout', authMiddleware, auth.logout)

module.exports = router;