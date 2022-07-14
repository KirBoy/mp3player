import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import Song from "./components/Song";
import SongItem from "./components/SongItem";
import {setFilter, setPlaylist} from "./redux/player/playerSlice";

function App() {
    const playlist = useSelector(state => state.player.playlist);
    const filter = useSelector(state => state.player.filter);

    const dispatch = useDispatch();
    const onChange = e => {
        dispatch(setFilter(e.target.value));
    };

    useEffect(() => {
        dispatch(setPlaylist());
    },[])

    return (
        <div className="player">
            <div className="container">
                <div className='playlist'>
                    <input className='player__filter' type="text" onChange={onChange}/>
                    <ul className='player__list'>
                        {playlist.length ? playlist.map((el, index) => <SongItem
                                index-={index}
                                key={el.id}
                                index={index}
                                songName={el.songName}
                                author={el.author}
                                duration={el.duration}
                            />) :
                            <span>По запросу {filter} ничего не найдено</span>
                        }
                    </ul>
                </div>
                <Song/>
            </div>
        </div>
    );
}

export default App;
