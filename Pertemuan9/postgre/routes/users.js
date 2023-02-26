const { Router } = require("express");
const userRouter = Router();
const UserController = require("../controllers/UserController.js")

userRouter.get("/", UserController.getUsers);
userRouter.post("/create", UserController.create);
userRouter.put("/update", UserController.update);
userRouter.delete("/delete", UserController.delete);
userRouter.get("/getUserById/:UserId", UserController.getUserById);

module.exports = userRouter;
