import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const contactsSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
});

contactsSchema.plugin(mongoosePaginate); //allows the pagination
const contact = mongoose.model("Contact", contactsSchema); //here "Contact" is the schema name
export default contact;
