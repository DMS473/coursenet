const { Item } = require("../models");

class ItemController {
  static getItem(req, res) {
    // res.send("ini adalah halaman items");
    // res.render("items.ejs")

    Item.findAll()
      .then((items) => {
        res.render('items.ejs', {items})
        // res.send(items);
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static create(req, res) {
    res.send("ini adalah halaman create items");
  }
  static update(req, res) {
    res.send("ini adalah halaman update items");
  }
  static delete(req, res) {
    res.send("ini adalah halaman delete items");
  }
}

module.exports = ItemController;
