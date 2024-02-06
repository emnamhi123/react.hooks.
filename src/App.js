import React, { useState } from "react";
import "./App.css";
import MovieList from "./Components/MovieList";
import Data from "./Data";
import AddMovie from "./Components/AddMovie";
import Filter from "./Components/Filter";


function App() {
  const [movies, setMovies] = useState(Data);

  const [search, setSearch] = useState("");
  const [rating, setRating]= useState(0);
  // const Adding = (newMovie) => {
  //   setMovies([...movies, newMovie]);
  // };
  return (
    <div className="App">
   <Filter setSearch={setSearch} setRating={setRating}/>
      <br />
      {/* <AddMovie Adding={Adding} /> */}
      <AddMovie movies={movies} setMovies={setMovies}/>
      <br />
      <center>
        <MovieList Data={movies.filter((el)=> el.titre.trim().toLocaleLowerCase().includes(search)
          && el.rating >=rating)} />
      </center>
    </div>
  );
}

export default App;
