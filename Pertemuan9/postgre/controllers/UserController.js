const { User } = require("../models");

class UserController {
  static getUsers(req, res) {

    
    User.findAll()
      .then((users) => {
        res.render('users.ejs',{
          users
        })
        // res.send(user);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static createPage(req, res){
    res.render('createpage.ejs')
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
        // res.send(result);
        res.redirect("/users");
      })
      .catch((err) => {
        res.send(err);
      });
  }


  static delete(req, res) {
    // res.send("Page Update Users");
    let id = +req.params.id;

    User.destroy({
      where: { id },
    })
      .then((result) => {
        if (result) {
          res.redirect('/users');
          // res.send({
          //   message: `User id ${id} deleted successfully.`,
          // });
        } else {
          res.send({
            message: `User id ${id} could not be deleted`,
          });
        }
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static updatePage(req, res) {
    // res.render('updatePage.ejs');
    let id = +req.params.id;

    User.findByPk(id)
      .then((user) => {
        if (!user) {
          res.send({
            message: `User id ${id} not found`,
          });
        } else {
          // res.send(result);
          res.render('updatePage.ejs', {user})
        }
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static update(req, res) {
    let id = +req.params.id;
    const { username, email, password, image } = req.body;
    User.update(
      {
        username,
        email,
        password,
        image,
      },
      {
        where: { id },
      }
    )
      .then((result) => {
        if (result[0] === 1) {
          res.send({
            message: `User id ${id} updated successfully.`,
          });
        } else {
          res.send({
            message: `User id ${id} could not be updated`,
          });
        }
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static getUserById(req, res) {
    let id = +req.params.UserId;

    User.findByPk(id)
      .then((user) => {
        if (!user) {
          res.send({
            message: `User id ${id} not found`,
          });
        } else {
          // res.send(result);
          res.render('detail.ejs', {user})
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
