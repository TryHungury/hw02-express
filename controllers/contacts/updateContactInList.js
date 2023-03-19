const {Contacts} = require('../../models/contactsModel');

const updateContactInList = async (req, res, next) => {
    const contactParamsId = req.params.contactId;
    const contactBody = req.body;

    const contacts = await Contacts.updateOne({ _id: contactParamsId }, contactBody)
    // console.log(contacts)

    if (contacts) {
        res.status(200).json({ status: "Ok", data: contacts })
        
    } else {
        res.status(404).json({ status: "Not Found" })
        
    }
}

module.exports = updateContactInList;