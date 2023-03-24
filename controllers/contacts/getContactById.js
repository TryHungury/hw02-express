const { Contact } = require("../../models/contact");
const createError = require("http-errors");

const getContactById = async (req, res, next) => {
  const { contactId } = req.params;

  const contact = await Contact.findById(contactId);

  if (!contact) {
    throw createError(404, "Not found");
  }

  if (contact) {
    res.status(200).json({
      status: "Ok",
      data: {
        contact,
      },
    });
    
  } else {
    res.status(400).json({
      status: "Bad Request",
    });
  }
};

module.exports = getContactById;
