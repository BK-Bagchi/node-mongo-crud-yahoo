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
});
app.get("/show-contact", (req, res) => {
  //static page to show contact details
});
app.get("/add-contact", (req, res) => {
  //form page to take contact input from user
});
app.post("/add-contact", (req, res) => {
  //post the contact input into db
});
app.get("/update-contact", (req, res) => {
  //form page to take contact update from user
});
app.post("/update-contact", (req, res) => {
  //post the contact update into db
});
