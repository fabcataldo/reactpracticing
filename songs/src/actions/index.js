//action creator
//exporto más de una funcion, más de un action creator
export const selectSong=(song)=>{
    //return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};