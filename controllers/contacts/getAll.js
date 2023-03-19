const {Contacts} = require('../../models/contactsModel');

const getAll = async (req, res, next) => {
    const contacts = await Contacts.find({})
    // console.log(contacts)
    
    if (contacts) {
        res.status(200).json({ status: "Ok", data: contacts })

    } else {
        res.status(404).json({ status: "Not Found" })

    }
}

module.exports = getAll;