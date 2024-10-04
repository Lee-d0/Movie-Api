import React from 'react'
import "./MovieCard.css"
import { useNavigate } from 'react-router-dom'


const MovieCard = (movie) => {
    const navigate = useNavigate()

    const API_IMG = "https://image.tmdb.org/t/p/w500/"

    


  return (
   
    <div className='card' >
        
        <div className='poster'>
            <img src={movie.poster_path ? API_IMG + movie.poster_path : "https://images.unsplash.com/photo-1604975701397-6365ccbd028a?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='movie' />
        </div>
        <div className='info'>
            <p className='title'>
                {movie.title}
            </p>
            <p className='vote'>
                {movie.vote_average}
            </p>
        </div>

        <div className='overview'>
           <h2 className='title_overview' onClick={() => navigate(`/Detail/${movie.id}`)}>
                Overview
            </h2>
            <h3 className='overview_info'>{movie.overview}</h3>
        </div>
    </div>
  )
}

export default MovieCard