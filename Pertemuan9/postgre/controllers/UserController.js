const { User } = require("../models");

class UserController {
  static getUsers(req, res) {
    User.findAll()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static create(req, res) {
    // console.log(req.body)
    const { username, email, password, image } = req.body;
    User.create({
      username,
      email,
      password,
      image,
    })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static update(req, res) {
    res.send("Page Update Users");
  }
  static delete(req, res) {
    res.send("Page Delete Users");
  }
  static getUserById(req, res) {
    let id = +req.params.UserId;

    User.findByPk(id)
      .then((result) => {
        if (!result) {
          res.send({
            message: `User id ${id} not found`,
          });
        } else {
          res.send(result);
        }
      })
      .catch((err) => {
        res.send(err);
      });
    // res.send(userId);

    // res.send("Page UserById");
  }
}

module.exports = UserController;

// const { Router } = require("express")
// const router = Router()

// const userController = require()
