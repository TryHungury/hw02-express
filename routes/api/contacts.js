const express = require('express')
const { contacts } = require('../../controllers')
const { addValidation, addValidationFavorite } = require('../../middlewares/validationMiddleware')
const { authMiddleware } = require('../../middlewares/autorizationMiddleware')

const router = express.Router()

router.get('/', authMiddleware, contacts.getAllContacts)

router.get('/:contactId', contacts.deleteContactById)

router.post('/', authMiddleware, addValidation, contacts.addNewContact)

router.put('/:contactId', addValidation, contacts.updateContactById)

router.patch('/:contactId/:favorite', addValidationFavorite, contacts.updateStatusContactById)

router.delete('/:contactId', contacts.deleteContactById)

module.exports = router