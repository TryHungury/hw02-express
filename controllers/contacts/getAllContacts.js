const { Contact } = require('../../models/contactsModels')

// getAllContact
const getAllContact = async (req, res, next) => {
    const {_id} = req.user
    const {page = 1, limit = 10, favorite = true} = req.query

    const skip = (page - 1) * limit;

    const contacts = await Contact.find({owner: _id, favorite }, "", {skip, limit: Number(limit)}).populate('Owner', "Email Subscription")
    
    if (contacts) {
    res.status(200).json({
      message: "Ok",
      data: {
        contacts,
      },
    });
    } else {
    res.status(400).json({
      message: "Bad Request",
    });
    
  }
}

module.exports = getAllContact