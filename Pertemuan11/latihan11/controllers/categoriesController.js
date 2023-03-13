const { Categorie } = require("../models");

class CategorieController {
  static getCategories(req, res) {
    // try {
    //   let categories = await;
    // } catch (err) {
    //   res.json(err);
    // }
    

    // res.send("Fruits berhasil");

    Categorie.findAll()
      .then((categories) => {
        // res.render('users.ejs',{
        //   users
        // })
        res.send(categories);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static addPage(req, res) {
    res.send("hal cateogires tambah gaes");
  }

  static add(req, res) {
    const { name, city, total_employees } = req.body;
    // const image = "http://via.placeholder.com/150"
    Categorie.create({
      name,
      // image,
      // city,
      // total_employees,
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

    Categorie.destroy({
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

  static updatePage(req, res) {
    res.send("halaman update page categories");
  }
  static async update(req, res) {
    try {
      let id = +req.params.id;
      const { name } = req.body;

      let result = await Categorie.update(
        {
          name,
        },
        {
          where: { id },
        }
      );
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
  
}

module.exports = CategorieController;
