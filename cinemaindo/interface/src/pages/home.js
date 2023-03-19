// import React, { useState, useEffect } from "react";
// import axios from "axios";

function Home() {
//   const [movies, setMovies] = useState([]);

//   const getMovies = async () => {
//     try {
//       let temp = await axios({
//         url: "http://localhost:3000/movies",
//         method: "GET",
//       });

//       console.log(temp.data);
//       setMovies(temp.data);
//     } catch (err) {
//       alert(err);
//     }
//   };

//   useEffect(() => {
//     getMovies();
//   }, []);

  return (
    <div>
      <h1>wassap Home</h1>
      {/* <h3>{movies[0].title}</h3> */}
    </div>
  );
}

export default Home;
