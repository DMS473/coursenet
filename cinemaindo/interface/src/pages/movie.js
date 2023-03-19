import React, { useState, useEffect, } from "react";
import axios from "axios";
import {Link} from "react-router-dom"

function Movie() {
  const [movies, setMovies] = useState([]);
  // const [movies1, setMovies1] = useVariable();
  const getMovies = async () => {
    try {
      let temp = await axios({
        url: "http://localhost:3000/movies",
        method: "GET",
      });
      // https://api.unsplash.com/search/photos?query=canada █

      console.log(temp.data);
      setMovies(temp.data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>Our Movies</h1>
      <Link className="btn btn-success mt-2 mb-2" to="/movies/add" >+add movies</Link>
      <div className="container">
        <div className="row">
          {movies.length !== 0 ? (
            movies.map((movie) => {
              return (
                <div className="col-4">
                  <div className="card">
                    <img className="img-fluid card-img-top" src={movie.image} />
                    <div className="card-body">
                      <h5 class="card-title">{movie.title}</h5>
                      <p class="card-text">
                        {movie.description}
                      </p>
                      <a href="#" class="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>sabar bang</h1>
          )}
        </div>
      </div>

      {/* <h3>{movies[0].title}</h3> */}
    </div>
  );
}

export default Movie;
