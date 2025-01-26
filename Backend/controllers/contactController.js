// controllers/contactController.js
const Contact = require("../models/contactmodels");

// Show the contact form
// exports.showContactForm = (req, res) => {
//   res.render("contact");
// };

// // Handle contact form submission
// exports.handleContactForm = async (req, res) => {
//   const { name, email, message } = req.body;

//   try {
//     const newContact = new Contact({
//       name,
//       email,
//       message,
//     });

//     await newContact.save();

//     res.render("contact", { message: "Your message has been sent!" });
//   } catch (error) {
//     console.error(error);
//     res.render("contact", { message: "There was an error sending your message." });
//   }
// };

// API to get all contacts
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching contacts." });
  }
};

// API to add a new contact
const addContact = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email ) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    res.status(201).json({ message: "Contact added successfully!", contact: newContact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding contact." });
  }
};
module.exports={addContact,getAllContacts}
