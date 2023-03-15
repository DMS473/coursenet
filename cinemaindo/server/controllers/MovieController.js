const { Movie } = require('../models')

class MovieController {

    static async getMovies(req, res){
        try {
            let movies = await Movie.findAll({
                // include: [
                //     User,Brand
                // ]
            });
      
            res.status(200).json(movies);
          } catch (err) {
            res.status(500).json(err);
          }
    }

    static async addMovie(req, res){
        try {
            const {title, image, description, GenreId, StudioId } = req.body
            let result = await Movie.create({
                title,
                image,
                description,
                GenreId,
                StudioId
            })
    
            res.status(201).json(result)
        } catch (err) {
            res.status(500).json(err);
        }
    }
    static async deleteMovie(req, res){
        try {
            const id = req.params.id;
            let result = await Movie.destroy({
                where: {id}
            })
            result ?
            res.status(200).json({message: "Movie removed"}) :
            res.status(400).json({message: "Movie not deletd"})
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
    static async updateMovie(req, res){
        try {
            const id = +req.params.id;
            const {title, image, description, GenreId, StudioId } = req.body
    
            let result = await Movie.update({
                title,
                image,
                description,
                GenreId,
                StudioId
            }, {
                where: {id}
              })
            if(result[0]){
                res.status(200).json({
                    message: "Movie updated successfully"
                })
            } else {
                res.status(404).json({
                    message: "Movie not updated"
                })
            }
        } catch(err) {
            res.status(500).json(err);
        }
    }
    static async detailMovie(req, res){
        try {
            const id = +req.params.id;
            let user = await Movie.findOne({
              where: { id },
            });
      
            res.json(user);
          } catch (err) {
            res.status(500).json(err);
          }
    }

    

}


module.exports = MovieController
