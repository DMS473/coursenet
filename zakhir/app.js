const express = require("express");
const app = express();
const port = 3000;

// layout ejs
const expressLayouts = require("express-ejs-layouts");

// use ejs
app.set("view engine", "ejs");

// third party middleware
var morgan = require("morgan");
app.use(morgan('dev'));
app.use(expressLayouts);

// build in middle ware
app.use(express.static("public"));

// application lvl middleware
app.use(function (req, res, next) {
  console.log("time", new Date());
  next();
});

app.use(function (req, res, next) {
  console.log("ini middleware ke2");
  next();
});

app.get("/", (req, res) => {
  const mahasiswa = 
  res.render("index", {
    layout: "layouts/main-layout",
    title: "Hindex",
    nama: "Muhammad Daffa Muis",
    mahasiswa,
  });
});

app.get("/about", (req, res, next) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "HAbout",
  });
  // next();
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Hontact",
  });
});

app.get("/product/:id", (req, res) => {
  res.send(` product = ${req.params.id}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
