const { Router } = require("express");
const routes = Router();

const categorieController = require("../controllers/categoriesController.js")
routes.get("/", categorieController.getCategories);

routes.get("/add", categorieController.addPage);
routes.post("/add", categorieController.add);

routes.get("/delete/:id", categorieController.delete);

routes.get("/update", categorieController.updatePage);
routes.post("/update/:id", categorieController.update);

module.exports = routes;
