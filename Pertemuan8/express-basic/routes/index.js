const {Router} = require("express")
const router = Router();

router.get("/", (req, res) => {
  res.send("Hello Selamat Pagi");
});

const usersRoutes = require("./users.js")
// const itemsRoutes = require("./items.js")

router.use("/users",usersRoutes)
// router.use(itemsRoutes)

module.exports = router;