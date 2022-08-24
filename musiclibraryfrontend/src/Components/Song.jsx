import "./Song.css"
import React, {useState} from 'react';



const Song = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [date, setDate] = useState('');
    const [genre, setGenre] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: date,
            genre: genre
        }
        props.addNewSong(newSong);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type='text' value={title} placeholder='Title' className='form-field' onChange={(event) => setTitle(event.target.value)}/>
            </div>
            <div>
                <input type='text' value={artist} placeholder='Artist' className='form-field' onChange={(event) => setArtist(event.target.value)}/>
            </div>
            <div>
                <input type='text' value={album} placeholder='Album' className='form-field' onChange={(event) => setAlbum(event.target.value)}/>
            </div>
            <div>
                <input type='genre' value={genre} placeholder='Genre' className='form-field' onChange={(event) => setGenre(event.target.value)}/>
            </div>
            <div>
                <input type='date' value={date} className='form-field' onChange={(event) => setDate(event.target.value)}/>
            </div>
            <br></br>
            <div>
                <button type='submit' className='submit-button'>Create Song<i className="fa-solid fa-filter fa-lg"></i></button>
            </div>
        </form>
    )
}
export default Song;

