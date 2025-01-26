// routes/contactRoutes.js
const express = require("express");
const router = express.Router();
const {addContact,getAllContacts}=require('../controllers/contactController')
router.get("/get", getAllContacts);
router.post("/post", addContact);

module.exports = router;
