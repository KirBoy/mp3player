import React from 'react';
import Waveform from "./Waveform";
import {useSelector} from "react-redux";

const Song = () => {
    const {playlist, currentSong, isPlaying} = useSelector(state => state.player);
    const song = playlist[currentSong];

    if (!song) {
        return null
    }

    return (
        <div className='song'>
            <img className='song__label' src={song.labelUrl} alt=""/>
            <Waveform
                isPlaying={isPlaying}
                songName={song.songName}
                author={song.author}
                url={song.songUrl}
                duration={song.duration}
            />
        </div>
    );
};

export default Song;