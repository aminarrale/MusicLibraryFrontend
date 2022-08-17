import Song from './Song';
import React from 'react';
const SongMapper = (props) => {
    return ( <ul>
        {props.songs.map(song=> <li><Song song={song}/></li>)}
    </ul> );
}
 
export default SongMapper;

props={
    songs: [{},{}]
}