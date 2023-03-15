const { Genre } = require('../models')

class GenreController {

    static async getGenres(req, res){
        try {
            let genres = await Genre.findAll({
                // include: [
                //     User,Brand
                // ]
            });
      
            res.status(200).json(genres);
          } catch (err) {
            res.status(500).json(err);
          }
    }

    static async addGenre(req, res){
        try {
            const {name, image} = req.body
            let result = await Genre.create({
                name,
                image
            })
    
            res.status(201).json(result)
        } catch (err) {
            res.status(500).json(err);
        }
    }
    static async deleteGenre(req, res){
        try {
            const id = req.params.id;
            let result = await Genre.destroy({
                where: {id}
            })
            result ?
            res.status(200).json({message: "Genre removed"}) :
            res.status(400).json({message: "Genre not deleted"})
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
    static async updateGenre(req, res){
        try {
            const id = +req.params.id;
            const {name, image} = req.body
    
            let result = await Genre.update({
                name,
                image,
            }, {
                where: {id}
              })
            if(result[0]){
                res.status(200).json({
                    message: "Genre updated successfully"
                })
            } else {
                res.status(404).json({
                    message: "Genre not updated"
                })
            }
        } catch(err) {
            res.status(500).json(err);
        }
    }
    static async detailGenre(req, res){
        try {
            const id = +req.params.id;
            let genre = await Genre.findOne({
              where: { id },
            });
      
            res.json(genre);
          } catch (err) {
            res.status(500).json(err);
          }
    }

    

}


module.exports = GenreController
