import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentSong} from "./redux/player/playerSlice";

const SongItem = ({songName, author, duration, index}) => {
    const currentSong = useSelector(state => state.player.currentSong);
    const dispatch = useDispatch();

    const setSong = () => {
        dispatch(setCurrentSong(index))
    }

    return (
        <li className='song__item' onClick={setSong}>
            <div className={currentSong === index ? 'song__titles song__titles--green' : 'song__titles'}>
                <h2 className='song__title'>{songName}</h2>
                <h2 className='song__author'>{author}</h2>
            </div>
            <span>{duration}</span>
        </li>
    );
};

export default SongItem;