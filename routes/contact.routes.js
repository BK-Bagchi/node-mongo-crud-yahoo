import express from "express";
import {
  getFindContacts,
  getFindContactById,
  getAddContact,
  postAddContact,
  getUpdateContactById,
  postUpdateContactById,
  deleteContactById,
} from "../controller/contacts.controller.js";

//necessary routes
const app = express();
app.get("/", getFindContacts);
app.get("/show-contact/:id", getFindContactById);
app.get("/add-contact", getAddContact);
app.post("/add-contact", postAddContact);
app.get("/update-contact/:id", getUpdateContactById);
app.post("/update-contact/:id", postUpdateContactById);
app.get("/delete-contact/:id", deleteContactById);

export default app;
