import React from 'react';
import {connect} from 'react-redux';

//const SongDetail=(props)=>{
//desestructuro el objeto props que se armó de la funcion mapstatetoprops
//obteniendo solo lo que me importa, que es el obj "song" que surgió de esa misma func
const SongDetail=({song})=>{
    if(!song){
        return <div>Select a song!</div>
    }
    return( 
        <div>
            <h3>Details for: </h3>
            Title: <p>{song.title}</p>
            Duration: <p>{song.duration}</p>
        </div>
    )
}

//lo que hace la función de abajo, en este componente
//es obtener la canción seleccionada actualmente
//llamanodo al reducer "selectedsong reducer", cuya clave es
//"selectedsong", que es lo que puse en el store de redux que armé, que es el obj state
//y como no llamé a un action creator, me devuelve sólo la canción seleccionada actualmente
const mapStateToProps=(state)=>{
    return {song: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);