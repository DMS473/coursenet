const { Studio } = require('../models')

class StudioController {

    static async getStudios(req, res){
        try {
            let studios = await Studio.findAll({
                // include: [
                //     User,Brand
                // ]
            });
      
            res.status(200).json(studios);
          } catch (err) {
            res.status(500).json(err);
          }
    }

    static async addStudio(req, res){
        try {
            const {name, image, city, total_employees} = req.body
            let result = await Studio.create({
                name,
                image,
                city,
                total_employees
            })
    
            res.status(201).json(result)
        } catch (err) {
            res.status(500).json(err);
        }
    }
    static async deleteStudio(req, res){
        try {
            const id = req.params.id;
            let result = await Studio.destroy({
                where: {id}
            })
            result ?
            res.status(200).json({message: "Studio removed"}) :
            res.status(400).json({message: "Studio not deleted"})
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
    static async updateStudio(req, res){
        try {
            const id = +req.params.id;
            const {name, image, city, total_employees} = req.body
    
            let result = await Genre.update({
                name,
                image,
                city,
                total_employees
            }, {
                where: {id}
              })
            if(result[0]){
                res.status(200).json({
                    message: "Studio updated successfully"
                })
            } else {
                res.status(404).json({
                    message: "Studio not updated"
                })
            }
        } catch(err) {
            res.status(500).json(err);
        }
    }
    static async detailStudio(req, res){
        try {
            const id = +req.params.id;
            let studio = await Studio.findOne({
              where: { id },
            });
      
            res.json(studio);
          } catch (err) {
            res.status(500).json(err);
          }
    }

    

}


module.exports = StudioController
