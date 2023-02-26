const { Router } = require("express");
const userRouter = Router();
const UserController = require("../controllers/UserController.js")

userRouter.get("/", UserController.getUsers);
userRouter.get("/ceate", UserController.create);
// router.get("/users/create", (req, res) => {
//     res.send("ini adalah halaman create users");
//   });

module.exports = userRouter;
