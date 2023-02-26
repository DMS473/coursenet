class ItemController {
    static getItem(req, res) {
        res.send("ini adalah halaman items");
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