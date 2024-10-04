import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./detail.css"

const Detail = () => {
    const navigate = useNavigate()
    const {id} = useParams()

    const [movie, setMovie] = useState([])

    const API_IMG = "https://image.tmdb.org/t/p/w500/"

    useEffect( () => {
        const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzRhMjVhMmEwMDk2ZDk3NjdkOTQxZGQ2MTEwMGMxYiIsIm5iZiI6MTcyNzk3NjM5Ni43NzE4NzUsInN1YiI6IjY2YjM5Nzg2OTE0NzA1ZTc5MDZmNzYxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vABsxSn5ixpC4n8Q4T8H_LavkFV7ZT_Uq1ntIhQwdSU'
        }
    }
      
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
        .then(response => response.json())
        .then(response => setMovie(response))
        .catch(err => console.error(err));
    
    console.log(movie)
    
    },[id, movie])
    
  return (
    <div className='container'>
        <div>
            <button onClick={() => navigate("/Movie-Api")}>← Back</button>    
        </div>
     
        <div className='detail_container'>
          
          <img src={movie.poster_path ? API_IMG + movie.poster_path : "https://images.unsplash.com/photo-1604975701397-6365ccbd028a?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='movie' />
          <div className='details'>
            <div>Title: {movie.original_title}</div>    
          <div>Release Date: {movie.release_date}</div>

          <div>Overview: <br/>{movie.overview}</div>
        </div>
      </div>
    </div>
    
  )
}

export default Detail