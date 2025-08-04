import Contacts from "../models/contacts.models.js";
import mongoose from "mongoose";

export const getFindContacts = async (req, res) => {
  // home page
  try {
    const { page = 1, limit = 5 } = req.query;
    // const contacts = await Contacts.find(); //old one. supports no pagination
    const contacts = await Contacts.paginate(
      {}, //"{}" means select *.
      { page: page, limit: limit }
    ); //new one. Supports pagination.
    // res.json(contacts);

    if (!contacts) return res.render("404", { message: "Not data found" });
    res.render("home", {
      // all of these values come because of mongoose pagination
      contacts: contacts.docs, // could get only this line if didn't use pagination
      totalDocs: contacts.totalDocs,
      currentLimit: contacts.limit,
      totalPages: contacts.totalPages,
      currentPage: contacts.page,
      counter: contacts.pagingCounter,
      hasPrevPage: contacts.hasPrevPage,
      hasNextPage: contacts.hasNextPage,
      prevPage: contacts.prevPage,
      nextPage: contacts.nextPage,
    });
  } catch (error) {
    res.render("500", { message: error });
  }
};

export const getFindContactById = async (req, res) => {
  //static page to show contact details
  const validId = await mongoose.Types.ObjectId.isValid(req.params.id);
  if (!validId) return res.render("404", { message: "Invalid ID" });

  try {
    const contact = await Contacts.findOne({ _id: req.params.id });

    if (!contact) return res.render("404", { message: "Contact not Found" });
    res.render("show-contact", { contact });
  } catch (error) {
    res.render("500", { message: error });
  }
};

export const getAddContact = (req, res) => {
  //form page to take contact input from user
  res.render("add-contact");
};
export const postAddContact = async (req, res) => {
  //post the contact input into db
  // const contact_2= Contacts.insertOne({
  //   "db_field_name": "form_field_name"
  // }) //but this can be done in a shorter and simpler way.

  try {
    const contact = await Contacts.create(req.body);
    if (!contact)
      return res.render("500", { message: "Could not insert data" });
    // in this case "db_field_name" and "form_field_name" should be the same
    res.redirect("/");
  } catch (error) {
    res.render("500", { message: error });
  }
};

export const getUpdateContactById = async (req, res) => {
  //form page to take contact update from user
  const validId = await mongoose.Types.ObjectId.isValid(req.params.id);
  if (!validId) return res.render("404", { message: "Invalid ID" });

  try {
    const contact = await Contacts.findOne({ _id: req.params.id });
    if (!contact) return res.render("404", { message: "Contact Not Found" });
    res.render("update-contact", { contact });
  } catch (error) {
    res.render("500", { message: error });
  }
};

export const postUpdateContactById = async (req, res) => {
  //post the contact update into db
  const id = req.params.id;
  const updateData = req.body;
  const validId = await mongoose.Types.ObjectId.isValid(id);
  if (!validId) return res.render("404", { message: "Invalid ID" });

  try {
    const updateContact = await Contacts.findByIdAndUpdate(id, updateData);
    if (!updateContact)
      return res.render("404", { message: "Contact Not Found" });
    res.redirect("/");
  } catch (error) {
    res.render("500", { message: error });
  }
};

export const deleteContactById = async (req, res) => {
  //contact will be deleted from db
  const validId = await mongoose.Types.ObjectId.isValid(req.params.id);
  if (!validId) return res.render("404", { message: "Invalid ID" });

  try {
    const deleteData = await Contacts.findByIdAndDelete(req.params.id);
    if (!deleteData) return res.render("404", { message: "Contact Not Found" });
    res.redirect("/");
  } catch (error) {
    res.render("500", { message: error });
  }
};
