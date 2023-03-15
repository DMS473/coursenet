const { Router } = require("express");
const routesGenre = Router();
const GenreController = require("../controllers/GenreController.js")

routesGenre.get("/genres", GenreController.getGenres);

routesGenre.post("/genres/add", GenreController.addGenre);
routesGenre.put("/genres/update/:id", GenreController.updateGenre);
routesGenre.delete("/genres/delete/:id", GenreController.deleteGenre);

routesGenre.get("/genres/movies/:id", GenreController.detailGenre);

module.exports = routesGenre;
