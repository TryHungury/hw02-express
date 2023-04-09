const { Contact } = require("../../models/contactsModels");

// getContactById
const getContactById = async (req, res, next) => {
  const { contactId } = req.params;
  
  const contact = await Contact.findById(contactId)

  if (contact) {
    res.status(200).json({
      message: "Ok",
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

module.exports = getContactById
