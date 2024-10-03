
import {useEffect, useState } from  "react"
import "./App.css"
import MovieCard from "./components/MovieCard"
// import {v4 as uuidv4 } from "uuid"

function App() {
  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=3c4a25a2a0096d9767d941dd61100c1b"

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  
 
  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setMovies(data.results))
  },[])

  console.log(movies)


 const handleSearch = (e) => {
      e.preventDefault()

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzRhMjVhMmEwMDk2ZDk3NjdkOTQxZGQ2MTEwMGMxYiIsIm5iZiI6MTcyNzk3NjM5Ni43NzE4NzUsInN1YiI6IjY2YjM5Nzg2OTE0NzA1ZTc5MDZmNzYxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vABsxSn5ixpC4n8Q4T8H_LavkFV7ZT_Uq1ntIhQwdSU'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(responce => setMovies(responce.results))
        .catch(err => console.error(err));
      
  }

  return (
    <div className='App'>
      <div className="search_nav">
        <div className="title">
          <h1>Movies</h1>
        </div>
        <div className="search_box">
            <form onSubmit={handleSearch}>
              <input onChange={(e) => setSearch(e.target.value)}/>
              <button>Search</button>
            </form>
          </div>
        
      </div>
      <div className="movies">
          {movies.map((movie) => 
            <MovieCard {...movie} />
          )}
      </div>
      
      
    </div>
  );
}

export default App;
