const { Router } = require("express");
const routes = Router();

// console.log(router);
routes.get("/", (req, res) => {
  // res.send("Hello World! HOME");
  res.render("main.ejs");
});

const fruitsRoute = require("./fruits.js");
const categoriesRoute = require("./categories.js");
const brandsRoute = require("./brands.js");

routes.use("/fruits", fruitsRoute);
routes.use("/categories", categoriesRoute);
routes.use("/brands", brandsRoute);


module.exports = routes;
