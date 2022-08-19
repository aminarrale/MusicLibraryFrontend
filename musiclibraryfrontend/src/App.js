
import axios from 'axios';
import React, { useState, useEffect } from 'react';






function App() {
  const[songs, setSongs] = useState([]);


  const fetchSongs = async () => {
    try{
      let response = await axios.get("http://127.0.0.1:8000/api/musiclibrary/")
      setSongs(response.data)
  
    } catch(error) {
      console.log(error.message)
    }
    console.log(songs)
  }
  
  useEffect(() => {
    fetchSongs()
  }, []);







  
  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;
