const {Contacts} = require('../../models/contactsModel');

const getById = async (req, res, next) => {
    const contactParamsId = req.params.contactId;

    const contact = await Contacts.findById({ _id: contactParamsId})
    // console.log(contactParamsId)
    
    if (contact) {
        res.status(200).json({ status: "success", data: contact })

    } else {
        res.status(404).json({ status: "Not Found" })
        
    }
}

module.exports = getById;
