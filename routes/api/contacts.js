const express = require('express')
const { getAll, getById, deleteById, addNewContact, updateContactInList } = require("../../controllers");
const { wrapper } = require('../../middlewares');
const isValidId = require('../../middlewares/isvalidid');
const updateStatusContact = require('../../controllers/contacts/updateStatusContacts');
const validation = require('../../middlewares/validation');
const { schemaAdd, schemaFavorite } = require('../../models/contactsModel');

const router = express.Router()

router.get('/', wrapper(getAll));

router.get('/:contactId', isValidId, wrapper(getById))

router.post('/', validation(schemaAdd), addNewContact)

router.delete('/:contactId', deleteById)

router.put('/:contactId', isValidId, validation(schemaAdd), updateContactInList)

router.patch('/:contactId/favorite', isValidId, validation(schemaFavorite), wrapper(updateStatusContact))

module.exports = router
