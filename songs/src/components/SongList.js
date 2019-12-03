import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';

class SongList extends Component{
    renderList(){
        return this.props.songs.map((song)=>{
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={()=>this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        })
    }


    render(){
        //console.log(this.props)
        return(
            <div className="ui divided list">
                {this.renderList()}
            </div>
        );
    }
}

//para obtener el objeto state, uso el componente connect de redux,
//llamamos a conect
//le paso el mismo comoponente (songlist) y luego
//la función mapStateToProps
//devolviendo un objeto con lo que quiero devolver del state, o todo el state
//obtengo con este return que hice, los props de éste componente que armo
//si hago this.props, obtengo lo que retorné en la función de abajo
//la funcion de abajo actualiza y obtiene el nuevo state object
//actualiza el objeto state en el store que creamos con redux
//CUANDO HAGO CLICK EN EL BOTON "SELECT", se actualiza el state
//como selectSong está incluido en las props de este componente,
//debido a la llamada a la función de abajo, que se llama a su vez desde "connect()"
//se actualiza el state, llamando al reducer "selectsongreducer"
const mapStateToProps=(state)=>{
    
    return { songs: state.songs };
}


//llama a la función que devuelve "connect()" mandándole SongList como parametro
//la función de abajo toma automaticamente lo que devuelve el action creator 
//(QUE LO importé como "selectSong"), y lo tira al dispatch, y esto actualiza el state
export default connect(mapStateToProps, {selectSong})(SongList);