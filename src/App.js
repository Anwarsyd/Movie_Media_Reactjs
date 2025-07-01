import { useEffect } from "react";
import "./App.css";

//600aaa99
const API_URL = 'http://www.omdbapi.com?apikey=600aaa99'

const App =()=> {

const searchMovies = async(title)=>{
  const response = await fetch(`${API_URL}&s=${title}`)

  const data = await response.json()

  console.log(data.Search)
}

useEffect(()=>{
  searchMovies('spiderman')
},[])


  return (
    <div className="app">
      <h1>MovieMedia</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value="spiderman"
          onChange={()=>{}}
        />

        <img
          src={searchIcon}
          alt="search"
          onClick={() => {}}/>
      </div>
    </div>
  );
}

export default App;
