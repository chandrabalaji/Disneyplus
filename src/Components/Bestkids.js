import React from 'react'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { Link } from 'react-router-dom'
import { allmovies } from '../features/movies/movieSlice'

const Bestkids = () => {

    let movies = useSelector(allmovies)

  return (
    <div className="containers">
    <h2>Best of Kids</h2>
    <div className="content">
    {movies &&
          movies.map((movie, key) => {
            if (movie.type === "kids") {
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

export default Bestkids