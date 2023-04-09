const { Contact } = require("../../models/contactsModels")

// updateContactById
const updateContactById = async (req, res, next) => {
  const result = await Contact.findByIdAndUpdate(req.params.contactId, req.body, {new: true})
  
  if (result) {
  res.status(201).json({
    message: "Updated",
    data: {
      result,
    },
  });
  } else {
    res.status(400).json({
      status: "Bad Request",
    });
    
  }
}

module.exports = updateContactById
  