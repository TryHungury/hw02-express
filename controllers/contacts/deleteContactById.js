
const { Contact } = require("../../models/contact");

const deleteContactById = async (req, res, next) => {
  const { contactId } = req.params;
  
  if (!contactId) {
    const error = new Error("Not found");
    error.status = 404;
    throw error;
  }
  const result = await Contact.deleteOne({ _id: contactId });

  if (result) {
    res.status(204).json({
      status: "No Content",
      data: {
        result,
      },
      message: "Contact Deleted",
    }); 

  } else {
    res.status(400).json({
      status: "Bad Request",
    }); 
  }
};

module.exports = deleteContactById;
