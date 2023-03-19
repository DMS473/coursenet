import React, { useState, useEffect } from "react";
import axios from "axios";

function Genre() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      let temp = await axios({
        url: "http://localhost:3000/genres",
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
      <h1>wassap movies Genres</h1>
      <div className="container">
        <div className="row">
          {movies.length !== 0 ? (
            movies.map((movie) => {
              return (
                <div className="col-4">
                  <div className="card">
                    <img className="img-fluid card-img-top" src={movie.image} />
                    {/* <div className="card-body">
                      <h5 class="card-title">{movie.title}</h5>
                      <p class="card-text">
                        {movie.description}
                      </p>
                      <a href="#" class="btn btn-primary">
                        Go somewhere
                      </a>
                    </div> */}
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

export default Genre;
