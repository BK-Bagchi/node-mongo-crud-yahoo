import express from "express";
import ContactRoutes from "./routes/contact.routes.js";
import DBConnection from "./config/database.js";

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is listening at ${port} port`);
});

//necessary middlewares
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

//necessary routes
app.use("/", ContactRoutes); // if we use "/web", our routes will be like "/web/add-contact/:id. So better keep it "/"

//database connection
DBConnection();
