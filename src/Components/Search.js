import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useSelector } from "react-redux";
import { allmovies } from "../features/movies/movieSlice";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  let movies = useSelector(allmovies);

  const [searchmovie, setsearchmovie] = useState([]);

  const handlesubmit = (val) => {

    let searchmovie = movies ? movies.filter((movie) =>
      movie.name
        ? movie.name.toLowerCase().replace(/\s+/g, "").includes(val.replace(/\s+/g,""))
        : null
    ): [];

    setsearchmovie(searchmovie);
   
  };

  return (
    <section className="search">
      <div className="input">
        <form onSubmit={(e) => e.preventDefault()} className="searchform">
          <input
            type="search"
            placeholder="Movie, Shows and more"
            onChange={(e) => handlesubmit(e.target.value)}
          />
          <BsSearch />
        </form>
        <h3>Top result</h3>
      </div>
      <div className="searchmovielist">
        {searchmovie.length
          ? searchmovie.map((movie, key) => (
              <div key={key} className="datalist">
                <Link to={movie.id}>
                  <img src={movie.title} alt="" className="title" />
                  <img src={movie.img} alt={movie.title} className="img" />
                </Link>
              </div>
            ))
          : movies &&
            movies.map((movie, key) => (
              <div key={key} className="datalist">
                <Link to={movie.id}>
                  <img src={movie.title} alt="" className="title" />
                  <img src={movie.img} alt={movie.title} className="img" />
                </Link>
              </div>
            ))}
      </div>
    </section>
  );
};

export default Search;
