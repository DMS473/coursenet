const { Router } = require("express");
const routesMovie = Router();
const MovieController = require("../controllers/MovieController")

routesMovie.get("/movies", MovieController.getMovies);

routesMovie.post("/movies/add", MovieController.addMovie);

routesMovie.put("/movies/update/:id", MovieController.updateMovie);
routesMovie.delete("/movies/delete/:id", MovieController.deleteMovie);

routesMovie.get("/movies/detail/:id", MovieController.detailMovie);

module.exports = routesMovie;
