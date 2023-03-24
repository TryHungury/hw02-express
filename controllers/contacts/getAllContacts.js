
const { Contact } = require("../../models/contact");

const getAllContacts = async (req, res, next) => {
  const { _id } = req.user;
  const { page = 1, limit = 20, favorite = true } = req.query;

  const skip = (page - 1) * limit;

  const contacts = await Contact.find({ owner: _id, favorite }, "", {
    skip,
    limit: Number(limit),
  });

  if (contacts) {
    res.status(200).json({
      status: "Ok",
      data: {
        contacts,
      },
    });

  } else {
    res.status(400).json({
      status: "Bad Request",
    });
  }

};
module.exports = getAllContacts;
