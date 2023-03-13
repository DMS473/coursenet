// const { Router } = require("express");
const userRouter = require("express").Router();
const { UserController } = require("../controllers");

userRouter.get("/", UserController.getUsers);
userRouter.get("/account/:UserId", UserController.getUserById);
userRouter.post("/register", UserController.register);
userRouter.post("/login", UserController.login);
userRouter.delete("/delete/:UserId", UserController.delete);
userRouter.put("/update/:id", UserController.update);
userRouter.get("/account/:UserId/products", UserController.getProductsByUser);



// userRouter.get("/create", UserController.createPage);
// userRouter.get("/update/:id", UserController.updatePage);
// 

// 
// userRouter.get("/getUserById/:UserId", UserController.getUserById);

module.exports = userRouter;
