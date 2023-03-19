const { Contacts } = require('../../models/contactsModel');

const updateStatusContact = async (req, res, next) => {
    const contactParamsId = req.params.contactId; 
    const contactBody = req.body;

    console.log(contactBody)
    const contact = await Contacts.updateOne({ _id: contactParamsId }, contactBody);

    if (contact) {
        res.status(200).json({ status: "success", data: { contact }});

    } else {
        res.status(404).json({ status: "Not Found" })

    }
};

module.exports = updateStatusContact;