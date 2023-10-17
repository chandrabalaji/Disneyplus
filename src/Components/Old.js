import React from 'react'
import { useSelector } from 'react-redux'
import { allmovies } from '../features/movies/movieSlice'
import { Link } from 'react-router-dom'
const Old = () => {

    const movies = useSelector(allmovies)
  return (
    <div className="containers">
    <h2>Movies from the 2010s</h2>
    <div className="content">
    {movies &&
          movies.map((movie, key) => {
            if (movie.type === "2010") {
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
  )
}

export default Old