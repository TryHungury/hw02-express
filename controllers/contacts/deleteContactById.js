const { Contact } = require("../../models/contactsModels")

// deleteContactById
const deleteContactById = async (req, res, next) => {
  const { contactId } = req.params;

  if (!contactId) {
    const error = new Error("Not found");
    error.status = 404;
    throw error;
  }

  const result = await Contact.findByIdAndRemove(contactId)

  if (result) {
  res.status(204).json({
    message: "Contact Deleted",
    data: {
      result,
    },
  }); 
  } else {
    res.status(400).json({
      message: "Bad Request",
    });
  }
}

module.exports = deleteContactById
  