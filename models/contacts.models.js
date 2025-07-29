import mongoose from "mongoose";
const contactsSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
});

const contact = mongoose.model("Contact", contactsSchema); //here "Contact" is the schema name
export default contact;
