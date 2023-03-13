const { Router } = require("express");
const productRouter = Router();
const { ProductController } = require("../controllers");

productRouter.get("/", ProductController.getProducts);
productRouter.post("/store", ProductController.storeProduct);
productRouter.delete("/delete/:id", ProductController.deleteProduct);
productRouter.put("/update/:id", ProductController.updateProduct);

productRouter.get("/detail/:id", ProductController.detailProduct);

// userRouter.get("/update/:id", UserController.updatePage);
// 

// 
// userRouter.get("/getUserById/:UserId", UserController.getUserById);

module.exports = productRouter;
