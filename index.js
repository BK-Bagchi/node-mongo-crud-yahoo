import express from "express";
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`App is listening at ${port} port`);
});

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
