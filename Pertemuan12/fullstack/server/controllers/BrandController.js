const { Brand } = require('../models')

class BrandController {

    static async getAllBrand(req, res){
        try {
            let brands = await Brand.findAll();
      
            res.status(200).json(brands);
          } catch (err) {
            res.status(500).json(err);
          }
    }

    static async addBrand(req, res){
        try {
            const {name, city, total_employees, image } = req.body
            let result = await Brand.create({
                name,
                city,
                total_employees,
                image,
            })
            result ?
            res.status(201).json(result) :
            res.status(422).json({message: "Invalid"})
        } catch (err) {
            res.status(500).json(err);
        }
    }
    static async deleteBrand(req, res){
        try {
            const id = +req.params.id;
            let result = await Brand.destroy({
                where: {id}
            })
            result ?
            res.status(200).json({message: "Brand removed"}) :
            res.status(400).json({message: "Brand not deletd"})
        } catch(err) {
            res.status(500).json(err);
        }
    }
    static async updateBrand(req, res){
        try {
            const id = +req.params.id;
            const {name, city, total_employees, image} = req.body;
    
            let result = await Brand.update({
                name,
                city,
                total_employees,
                image
            }, {
              where: {id}
            })
            if(result[0]){
                res.status(200).json({
                    message: "Brand updated successfully"
                })
            } else {
                res.status(404).json({
                    message: "Brand not updated"
                })
            }
        } catch(err) {
            res.status(500).json(err);
        }
    }
    static async getBrandDetails(req, res){
        try {
            const id = +req.params.UserId;
            let user = await Brand.findOne({
              where: { id },
            });
      
            res.json(user);
          } catch (err) {
            res.status(500).json(err);
          }
    }
    static getProductsFromBrand(req, res){

    }


    

}


module.exports = BrandController
