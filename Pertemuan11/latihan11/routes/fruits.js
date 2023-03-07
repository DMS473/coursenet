const { Router } = require("express");
const routes = Router();


const fruitController = require("../controllers/fruitController.js")
routes.get("/", fruitController.getFruits);

routes.get("/add", fruitController.addPage);
routes.post("/add", fruitController.add);

routes.get("/delete/:id", fruitController.delete);

routes.get("/update", fruitController.updatePage);
routes.post("/update/:id", fruitController.update);

module.exports = routes;
