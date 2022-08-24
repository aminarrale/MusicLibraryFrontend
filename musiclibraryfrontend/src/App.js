
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar';
import Song from './Components/Song';
import SongMapper from './Components/SongMapper'





function App() {
  const[songs, setSongs] = useState([]);


  
  
  useEffect(() => {
    fetchSongs();
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

  function searchFilter(query) {
    let newArray = []
    for(let i = 0; i < songs.length; i++) {
      if (songs[i].title.toLowerCase().includes(query) ||
          songs[i].artist.toLowerCase().includes(query) ||
          songs[i].album.toLowerCase().includes(query) ||
          songs[i].genre.toLowerCase().includes(query) ||
          songs[i].release_date.includes(query)){
            newArray.push(songs[i]);
      }
    }
    setSongs(newArray)
  }

  async function addNewSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/api/musiclibrary/', newSong);
    if(response.status === 201){
      await fetchSongs();
    }

  }

  return (
    <div>
      <header className='nav-style'>
        <NavBar/>
      </header>
      <div className='app-style'>
        <div>
          <SearchBar queryData={searchFilter}/>
        </div>
        <div className='container'>
          <SongMapper  songs={songs}/>
        </div>
        <div className='new-song-form'>
          <Song addNewSong={addNewSong}/>
        </div>
      </div>
    </div>
  );
}

export default App;
