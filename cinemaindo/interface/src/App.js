// import logo from './logo.svg';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// component
import Layout from "./pages/Layout";
// import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Movie from "./pages/movie.js";
import Genre from "./pages/genre";
import Studio from "./pages/studio";
import MovieAdd from "./pages/movieAdd";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello Cinemaindo App</h1> */}

      {/* <Navbar />
      <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movie />} />
            <Route path="genres" element={<Genre />} />
            <Route path="studios" element={<Studio />} />
            <Route path="movies/add" element={<MovieAdd/>} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Movie /> */}

      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
    </div>
  );
}

export default App;
