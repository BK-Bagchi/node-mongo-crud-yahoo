import express from "express";
import mongoose from "mongoose";
import Contacts from "./models/contacts.models.js";

const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`App is listening at ${port} port`);
});

//necessary middlewares
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

//database connection
mongoose.connect("mongodb://127.0.0.1:27017/contact-crud").then(() => {
  console.log("MongoDB database connected");
});

//necessary routes
app.get("/", async (req, res) => {
  // home page
  const contacts = await Contacts.find();
  // res.json(contacts); //shows data in json format
  res.render("home", { contacts });
});
app.get("/show-contact/:id", async (req, res) => {
  //static page to show contact details
  const contact = await Contacts.findOne({ _id: req.params.id });
  res.render("show-contact", { contact });
});
app.get("/add-contact", (req, res) => {
  //form page to take contact input from user
  res.render("add-contact");
});
app.post("/add-contact", (req, res) => {
  //post the contact input into db
});
app.get("/update-contact/:id", async (req, res) => {
  //form page to take contact update from user
  const contact = await Contacts.findOne({ _id: req.params.id });
  res.render("update-contact", { contact });
});
app.post("/update-contact/:id", (req, res) => {
  //post the contact update into db
});
app.get("/delete-contact/:id", (req, res) => {
  //contact will be deleted from db
});
