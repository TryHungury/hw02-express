const { Contact } = require("../../models/contact");

const updateStatusContactById = async (req, res, next) => {
  const { contactId } = req.params;

  const result = await Contact.updateOne({ _id: contactId }, req.body);

  if (result) {
    res.status(201).json({
      status: "Updated",
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

module.exports = updateStatusContactById;
