const { Contact } = require("../../models/contactsModels")

// AddNewContact 
const addNewContact = async (req, res, next) => {
  const {_id} = req.user

  const contact = await Contact.create({...req.body, owner: _id})
  
  if (contact) {
    res.status(201).json({
    message: "Success Created",
      data: {
        contact,
      },
    });

  } else {
  res.status(400).json({
    message: "Bad Request",
    });
  }
}

module.exports = addNewContact
  