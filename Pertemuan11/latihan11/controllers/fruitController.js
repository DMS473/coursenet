const { Fruit, Categorie, Brand } = require("../models");

class FruitController {
  static async getFruits(req, res) {
    try {
      let fruits = await Fruit.findAll({
          order: [
              ['id','asc']
          ],
          include :[
              Categorie,Brand
          ]
      })

      // res.json(fruits)
      res.render('./fruits/fruits.ejs', {fruits})

  } catch(err){
      res.json(err)
  }
    
    
    // res.send("Fruits berhasil");

    // Fruit.findAll()
    //   .then((fruits) => {
    //     // res.render('users.ejs',{
    //     //   users
    //     // })
    //     res.send(fruits);
    //   })
    //   .catch((err) => {
    //     res.send(err);
    //   });
  }

  static addPage(req, res) {
    res.send("halaman tambah fruits")
  }

  static async add(req, res) {
    try {
      const { name, price, stock, CategorieId, BrandId } = req.body
      const image = "http://via.placeholder.com/150"

      let result = await Fruit.create({
        name,
        image,
        price,
        stock,
        CategorieId,
        BrandId
      })

      res.json(result)
    }
    catch (err) {
      res.json(err)
    }
    // const { name, image, price, stock } = req.body;
    // // const image = "http://via.placeholder.com/150"
    // Fruit.create({
    //   name,
    //   image,
    //   price,
    //   stock,
    // })
    //   .then((result) => {
    //     res.send(result);
    //     // res.redirect("/users");
    //   })
    //   .catch((err) => {
    //     res.send(err);
    //   });
  }// end add function

  static delete(req, res) {
    let id = +req.params.id;

    Fruit.destroy({
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
    res.send("halaman update fruits")
  }

  static async update(req, res) {
    try {
      let id = +req.params.id
      const { name, image, price, stock, CategorieId, BrandId } = req.body

      let result = await Fruit.update({
        name,
        image,
        price,
        stock,
        CategorieId,
        BrandId,
      }, {
        where: {id}
      })

      res.json(result)

    } catch (err) {
      res.json(err);
    }
  }

}

module.exports = FruitController;
