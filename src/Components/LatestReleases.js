import React from "react";
import { Link } from "react-router-dom";
import { allmovies } from "../features/movies/movieSlice";
import { useSelector } from "react-redux";

const LatestReleases = () => {
  const movies = useSelector(allmovies);

  return (
    <div className="containers">
      <h2>latest relesase</h2>
      <div className="content">
        {movies &&
          movies.map((movie, key) => {
            if (movie.type === "new") {
              return (
                <div key={key} className="movielist">
                  <Link to={movie.id}>
                    <img src={movie.title} alt="" className="title" />
                    <img src={movie.img} alt={movie.title} className="img" />
                  </Link>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default LatestReleases;
