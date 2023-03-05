const { Router } = require("express");
const userRouter = Router();
const UserController = require("../controllers/UserController.js");

userRouter.get("/", UserController.getUsers);

userRouter.get("/create", UserController.createPage);
userRouter.post("/create", UserController.create);

userRouter.get("/update/:id", UserController.updatePage);
userRouter.post("/update/:id", UserController.update);

userRouter.get("/delete/:id", UserController.delete);
userRouter.get("/getUserById/:UserId", UserController.getUserById);

module.exports = userRouter;
