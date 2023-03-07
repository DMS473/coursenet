const { Brand } = require("../models");

class BrandController {
  static getbrands(req, res) {
    // res.send("Fruits berhasil");

    Brand.findAll()
      .then((fruits) => {
        // res.render('users.ejs',{
        //   users
        // })
        res.send(fruits);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static addPage(req, res) {
    res.send("hal tambah brand gaes")
  }

  static add(req, res) {
    const { name, city, total_employees } = req.body;
    const image = "http://via.placeholder.com/150"
    Brand.create({
      name,
      image,
      city,
      total_employees,
    })
      .then((result) => {
        res.send(result);
        // res.redirect("/users");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static delete(req, res) {
    let id = +req.params.id;

    Brand.destroy({
      where: { id },
    })
      .then((result) => {
        if (result) {
          // res.redirect('/users');
          res.send({
            message: `User id ${id} deleted successfully.`,
          });
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

}

module.exports = BrandController;
