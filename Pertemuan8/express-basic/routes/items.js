const { Router } = require("express");
const router = Router();

router.get("/items", (req, res) => {
  res.send("ini adalah halaman items");
});

router.get("/items/create", (req, res) => {
  res.send("ini adalah halaman create items");
});

module.exports = router;
