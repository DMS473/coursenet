const { User } = require("../models");

class UserController {
  static async getUsers(req, res) {
    // res.send("halaman users")
    try {
      let users = await User.findAll();

      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getUserById(req, res) {
    try {
      const id = +req.params.UserId;
      let user = await User.findOne({
        where: { id },
      });

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async register(req, res) {
    try {
        const {username, email,image, password, } = req.body
        let result = await User.create({
            username,
            email,
            image,
            password
        })

        res.json(result)
    } catch (err) {
        res.status(500).json(err);
    }
  }
  static async login(req, res) {
    try {
        const {email, password} = req.body;
        let userFound = await User.findOne({
            where:{email}
        })
        if (userFound) {
            if(userFound.password == password) {
                res.json(userFound)
            } else {
                res.send("wrong password")
            }

        } else {
            res.send("email not found")
        }
    } catch(err) {
        res.status(500).json(err);
    }
  }
  static async delete(req, res) {
    try {
        const id = +req.params.UserId;
        let result = await User.destroy({
            where: {id}
        })
        if(result){
            res.status(200).json({
                message: "User removed"
            })
        } else {
            res.status(400).json({
                message: "User not deleted"
            })
        }
    } catch(err) {
        res.status(500).json(err);
    }
  }
  static async update(req, res) {
    try {
        const id = +req.params.id;
        const {username, email, image, password} = req.body;

        let result = await User.update({
            username,
            email,
            image,
            password,
        }, {
          where: {id}
        })
        if(result[0]){
            res.status(200).json({
                message: "User updated successfully"
            })
        } else {
            res.status(404).json({
                message: "User not updated"
            })
        }
    } catch(err) {
        res.status(500).json(err);
    }
  }
  static getProductsByUser(req, res) {}
}

module.exports = UserController;
