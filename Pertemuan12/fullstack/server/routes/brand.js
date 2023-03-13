const { Router } = require("express");
const brandRouter = Router();
const { BrandController } = require("../controllers");

brandRouter.get("/all", BrandController.getAllBrand);
brandRouter.post("/add", BrandController.addBrand);
brandRouter.delete("/delete/:id", BrandController.deleteBrand);
brandRouter.put("/update/:id", BrandController.updateBrand);

brandRouter.get("/details/:id", BrandController.getBrandDetails);
brandRouter.get("/details/:id/products", BrandController.getProductsFromBrand);
// userRouter.get("/update/:id", UserController.updatePage);
// 

// 
// userRouter.get("/getUserById/:UserId", UserController.getUserById);

module.exports = brandRouter;
