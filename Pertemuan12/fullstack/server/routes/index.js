const { Router } = require("express");
const router = Router();

const mainEndpoint = "/api"

router.get("/api", (req, res) => {
//   res.send("Hello Selamat Pagi fullstack");
//   res.render("home.ejs");
    res.status(200).json({
        message: "API for Fs Application"
    })
});

const userRoutes = require("./user.js");
const productRoutes = require("./product.js");
const brandRoutes = require("./brand.js");

router.use(`${mainEndpoint}/users`, userRoutes);
router.use(`${mainEndpoint}/products`, productRoutes);
router.use(`${mainEndpoint}/brands`, brandRoutes);

module.exports = router;
