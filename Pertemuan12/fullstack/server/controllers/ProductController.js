const { Product, User, Brand } = require('../models')

class ProductController {

    static async getProducts(req, res){
        try {
            let products = await Product.findAll({
                include: [
                    User,Brand
                ]
            });
      
            res.status(200).json(products);
          } catch (err) {
            res.status(500).json(err);
          }
    }

    static async storeProduct(req, res){
        try {
            const {name, image, price, stock, UserId, BrandId } = req.body
            let result = await Product.create({
                name,
                image,
                price,
                stock,
                UserId,
                BrandId
            })
    
            res.status(201).json(result)
        } catch (err) {
            res.status(500).json(err);
        }
    }
    static async deleteProduct(req, res){
        try {
            const id = req.params.id;
            let result = await Product.destroy({
                where: {id}
            })
            result ?
            res.status(200).json({message: "Product removed"}) :
            res.status(400).json({message: "Product not deletd"})
            // if(result){
            //     res.status(200).json({
            //         message: "Product removed"
            //     })
            // } else {
            //     res.status(400).json({
            //         message: "Product not deletd"
            //     })
            // }
        } catch(err) {
            res.status(500).json(err);
        }
    }
    static async updateProduct(req, res){
        try {
            const id = +req.params.id;
            const {name, image, price, stock, UserId, BrandId} = req.body;
    
            let result = await Product.update({
                username,
                image,
                price,
                stock,
                UserId,
                BrandId
            }, {
                where: {id}
              })
            if(result[0]){
                res.status(200).json({
                    message: "Product updated successfully"
                })
            } else {
                res.status(404).json({
                    message: "Product not updated"
                })
            }
        } catch(err) {
            res.status(500).json(err);
        }
    }
    static async detailProduct(req, res){
        try {
            const id = +req.params.id;
            let user = await Product.findOne({
              where: { id },
            });
      
            res.json(user);
          } catch (err) {
            res.status(500).json(err);
          }
    }

    

}


module.exports = ProductController
