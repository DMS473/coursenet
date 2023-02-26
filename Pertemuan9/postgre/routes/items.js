const { Router } = require("express");
const router = Router();
const ItemController = require("../controllers/ItemController.js")

router.get("/", ItemController.getItem);
router.get("/create", ItemController.create);
router.get("/delete", ItemController.delete)
router.get("/update", ItemController.update);

// router.get("/items/create", (req, res) => {
//   res.send("ini adalah halaman create items");
// });

module.exports = router;
