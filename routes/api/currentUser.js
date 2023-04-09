const express = require('express')
const { users } = require('../../controllers')
const { authMiddleware } = require('../../middlewares/autorizationMiddleware')
const uploadMiddleware = require('../../middlewares/uploadMiddleware')

const router = express.Router()

router.get('/current', authMiddleware, users.getCurrent)
router.patch('/avatars', authMiddleware, uploadMiddleware.single('avatar'), users.updateAvatar )
router.get('/verify/verificationToken',  users.verifyEmail)

module.exports = router;