import React from 'react';
const Song = (props) => {
    return ( <div>
        <h1>{props.song.title}</h1>
        <div>{props.song.artist}</div>
        <div>{props.song.album}</div>
        <div>{props.song.release_date}</div>
        <div>{props.song.genre}</div>
    </div> );
}
 
export default Song;



