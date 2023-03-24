const express = require("express");

const { validation, wrapper, isValidId, auth } = require("../../middlewares");
const { schemaAdd, schemaFavorite } = require("../../models/contact");
const { contacts } = require("../../controllers");

const router = express.Router();

router.get("/", auth, wrapper(contacts.getAllContacts));

router.get("/:contactId", isValidId, wrapper(contacts.getContactById));

router.post("/", auth, validation(schemaAdd), wrapper(contacts.addNewContact));

router.delete("/:contactId", wrapper(contacts.deleteContactById));

router.put("/:contactId", isValidId, validation(schemaAdd), wrapper(contacts.updateContactById));

router.patch("/:contactId/favorite", isValidId, validation(schemaFavorite), wrapper(contacts.updateStatusContactById));

module.exports = router;
