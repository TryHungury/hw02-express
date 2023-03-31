const { Contact } = require("../../models/contact");

const addNewContact = async (req, res, next) => {
  const { _id } = req.user;

  const result = await Contact.create({ ...req.body, owner: _id });

  if (result) {
    res.status(201).json({
    status: "Success",
      data: {
        result,
      },
    });

  } else {
  res.status(400).json({
    status: "Bad Request",
    });
    
  }
};

module.exports = addNewContact;
