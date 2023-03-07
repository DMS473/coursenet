const { Router } = require("express");
const routes = Router();

const brandController = require("../controllers/brandController.js")
routes.get("/", brandController.getbrands);

routes.get("/add", brandController.addPage);
routes.post("/add", brandController.add);

routes.get("/delete/:id", brandController.delete);

module.exports = routes;
