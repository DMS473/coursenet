class UserController {
    static getUsers(req, res) {
        res.send("Page Users.")
    }
    static create(req, res) {
        res.send("Page Create Users")
    }
    static update(req, res) {
        res.send("Page Update Users")
    }
    static delete(req, res) {
        res.send("Page Delete Users")
    }
    static getUserById(req, res) {
        res.send("Page UserById")
    }
}

module.exports = UserController;







// const { Router } = require("express")
// const router = Router()



// const userController = require()
