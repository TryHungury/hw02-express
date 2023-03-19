const {Contacts} = require('../../models/contactsModel');

const addNewContact = async (req, res, next) => {
    const contactBody = req.body;

    const contacts = await  Contacts.create(contactBody);
    // console.log(contacts)

    if (contacts) {
        res.status(201).json({ status: "Created", data: contacts })
        
    } else {
        res.status(404).json({ status: "Not Found" })
        
    }
}

module.exports = addNewContact;