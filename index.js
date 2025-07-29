import express from "express";
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

//necessary routes
app.get("/", (req, res) => {
  // home page
  res.render("home");
});
app.get("/show-contact", (req, res) => {
  //static page to show contact details
  res.render("show-contact");
});
app.get("/add-contact", (req, res) => {
  //form page to take contact input from user
  res.render("add-contact");
});
app.post("/add-contact", (req, res) => {
  //post the contact input into db
});
app.get("/update-contact", (req, res) => {
  //form page to take contact update from user
  res.render("update-contact");
});
app.post("/update-contact", (req, res) => {
  //post the contact update into db
});
app.get("/delete-contact", (req, res) => {
  //contact will be deleted from db
});
