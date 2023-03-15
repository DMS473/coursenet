const { Router } = require("express");
const routes = Router();

routes.get("/", (req, res) => {
  res.send("Hello Cinemaindo");
});

const routesMovie = require("./movie");
const routesGenre = require("./genre");
const routesStudio = require("./studio");

routes.use(routesMovie);
routes.use(routesGenre);
routes.use(routesStudio);

module.exports = routes;
