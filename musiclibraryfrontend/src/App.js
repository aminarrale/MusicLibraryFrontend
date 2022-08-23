
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar';
import Song from './Components/Song';
import 





function App() {
  const[songs, setSongs] = useState([]);


  
  
  useEffect(() => {
    fetchSongs()
  }, []);
  
  const fetchSongs = async () => {
    try{
      let response = await axios.get("http://127.0.0.1:8000/api/musiclibrary/")
      setSongs(response.data)
  
    } catch(error) {
      console.log(error.message)
    }
    console.log(songs)
  }

  function searchFilter









  
 
}

export default App;
