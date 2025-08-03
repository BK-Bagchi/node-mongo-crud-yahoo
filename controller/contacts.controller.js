import Contacts from "../models/contacts.models.js";

export const getFindContacts = async (req, res) => {
  // home page
  const contacts = await Contacts.find();
  // res.json(contacts); //shows data in json format
  res.render("home", { contacts });
};

export const getFindContactById = async (req, res) => {
  //static page to show contact details
  const contact = await Contacts.findOne({ _id: req.params.id });
  res.render("show-contact", { contact });
};

export const getAddContact = (req, res) => {
  //form page to take contact input from user
  res.render("add-contact");
};
export const postAddContact = async (req, res) => {
  //post the contact input into db
  // const contact_2= Contacts.insertOne({
  //   first_name: first_name,
  //   last_name: last_name,
  //   "db_field_name": "form_field_name"
  // }) //but this can be done in a shorter and simpler way.

  const contact = await Contacts.create(req.body);
  // in this case "db_field_name" and "form_field_name" should be the same
  //if i'm not using the const "contact anywhere else", directly "await Contacts.create(req.body)" can also be written
  res.redirect("/");
};

export const getUpdateContactById = async (req, res) => {
  //form page to take contact update from user
  const contact = await Contacts.findOne({ _id: req.params.id });
  res.render("update-contact", { contact });
};

export const postUpdateContactById = async (req, res) => {
  //post the contact update into db
  const id = req.params.id;
  const updateData = req.body;
  const updateContact = await Contacts.findByIdAndUpdate(id, updateData);
  // const updateContact= await Contacts.findByIdAndUpdate(req.params.id, req.body) //in short

  res.redirect("/");
};

export const deleteContactById = async (req, res) => {
  //contact will be deleted from db
  const deleteData = await Contacts.findByIdAndDelete(req.params.id);
  res.redirect("/");
};
