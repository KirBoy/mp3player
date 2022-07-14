import Wavesurfer from "../../node_modules/wavesurfer.js/dist/wavesurfer";
import React, {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {nextSong, pauseTrack, playTrack, prevSong} from "../redux/player/playerSlice";

const Waveform = ({url, duration, songName, author, isPlaying}) => {
    const waveform = useRef(null);
    const dispatch = useDispatch();
    const [progress, setProgress] = useState('0:00');

    useEffect(() => {
        dispatch(pauseTrack());
        waveform.current = Wavesurfer.create({
            container: "#waveform",
            waveColor: "#cdedff",
            progressColor: "#1aafff",
            height: 70,
            scrollParent: false,
            barHeight: 1,
        });
        waveform.current.load(url);
        waveform.current.setVolume(0.1);

        if (isPlaying) {
            waveform.current.play();
        }

        return () => {
            waveform.current.destroy()
        }

    }, [url]);


    useEffect(() => {

        const id = setInterval(() => {
            const time = Math.trunc(waveform.current.getCurrentTime())
            let minute = 0;
            if (time >= 60) {
                minute = time / 60;
            }
            let seconds = (time % 60);
            seconds = seconds.toString().length > 1 ? seconds : 0 + '' + seconds;
            setProgress(Math.trunc(minute) + ':' + seconds);
        }, 1000)

        return () => {
            clearInterval(id)
        }
    }, [])


    const playAudio = () => {
        if (waveform.current.isPlaying()) {
            dispatch(pauseTrack());
            waveform.current.pause();
        } else {
            waveform.current.play();
            dispatch(playTrack());
        }
    };

    const onNextSong = () => {
        dispatch(nextSong());
    }

    const onPrevSong = () => {
        dispatch(prevSong());
    }

    return (
        <div className='song__inner'>
            <div className='song__top'>
                <div>
                    <div className='song__titles'>
                        <h2 className='song__title'>{songName}</h2>
                        <h2 className='song__author'>{author}</h2>
                    </div>
                    <div className='song__time'>
                        {progress} / {duration}
                    </div>
                </div>
                <div className='song__btns'>
                    <button className='song__prev song__btn' onClick={onPrevSong}/>
                    {!isPlaying ?
                        <button onClick={playAudio} className='song__play song__btn'/> :
                        <button onClick={playAudio} className='song__pause song__btn'/>
                    }
                    <button className='song__next song__btn' onClick={onNextSong}/>
                </div>
            </div>
            <div id="waveform"/>
        </div>
    );
};


export default Waveform;