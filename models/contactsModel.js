const Joi = require('joi');
const mongoose = require('mongoose');

const contactsSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
})

const schemaAdd = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean().valid(true, false).default(false),
});

const schemaFavorite = Joi.object({
  favorite: Joi.boolean().valid(true, false).required(),
});

const Contacts = mongoose.model('contacts', contactsSchema);

module.exports = { Contacts, schemaAdd, schemaFavorite };