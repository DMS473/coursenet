const { Router } = require("express");
const routesStudio = Router();
const StudioController = require("../controllers/StudioController")

routesStudio.get("/studios", StudioController.getStudios);
routesStudio.post("/studios/add", StudioController.addStudio);
routesStudio.put("/studios/update/:id", StudioController.updateStudio);
routesStudio.delete("/studios/delete/:id", StudioController.deleteStudio);

routesStudio.get("/studios/movies/:id",StudioController.detailStudio);

module.exports = routesStudio;
