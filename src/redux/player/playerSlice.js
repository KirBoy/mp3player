import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    playlist: [],
    allPlaylist: [
        {
            id: 1,
            songName: 'Blinding Lights',
            author: 'The Weeknd',
            songUrl: './songs/1.mp3',
            labelUrl: './label/1.jpg',
            duration: '03:21'
        },
        {
            id: 2,
            songName: 'Hello',
            author: 'Adele',
            songUrl: './songs/2.mp3',
            labelUrl: './label/2.jpg',
            duration: '4:53'
        },
        {
            id: 3,
            songName: 'Old Town Road',
            author: 'Lil Nas X',
            songUrl: './songs/3.mp3',
            labelUrl: './label/3.jpg',
            duration: '01:53'
        },
        {
            id: 4,
            songName: 'River Flows In You',
            author: 'Yiruma',
            songUrl: './songs/4.mp3',
            labelUrl: './label/4.jpg',
            duration: '3:05'
        },
        {
            id: 5,
            songName: 'Falling',
            author: 'Trevor Daniel',
            songUrl: './songs/5.mp3',
            labelUrl: './label/5.jpg',
            duration: '02:39'
        },
        {
            id: 6,
            songName: 'Demons',
            author: 'Imagine Dragons',
            songUrl: './songs/6.mp3',
            labelUrl: './label/6.jpg',
            duration: '02:57'
        },
        {
            id: 7,
            songName: 'Paris',
            author: 'Else',
            songUrl: './songs/7.mp3',
            labelUrl: './label/7.jpg',
            duration: '03:29'
        },
        {
            id: 8,
            songName: 'Режиссер',
            author: 'Градусы',
            songUrl: './songs/8.mp3',
            labelUrl: './label/8.jpg',
            duration: '03:38'
        },
        {
            id: 9,
            songName: 'Highway to Hell',
            author: 'AC/DC',
            songUrl: './songs/9.mp3',
            labelUrl: './label/9.jpg',
            duration: '03:38'
        },
        {
            id: 10,
            songName: 'Butterfly',
            author: 'Crazy Town',
            songUrl: './songs/10.mp3',
            labelUrl: './label/10.jpg',
            duration: '03:36'
        },
        {
            id: 11,
            songName: 'Numb',
            author: 'Linkin Park',
            songUrl: './songs/11.mp3',
            labelUrl: './label/11.jpg',
            duration: '03:05'
        },
        {
            id: 12,
            songName: 'Pumped Up Kids',
            author: 'Mark Foster',
            songUrl: './songs/12.mp3',
            labelUrl: './label/12.jpg',
            duration: '03:59'
        },
        {
            id: 13,
            songName: 'Billie Jean',
            author: 'Michael Jackson',
            songUrl: './songs/13.mp3',
            labelUrl: './label/13.jpg',
            duration: '04:53'
        },
        {
            id: 14,
            songName: 'Хочешь?',
            author: 'Земфира',
            songUrl: './songs/14.mp3',
            labelUrl: './label/14.jpg',
            duration: '03:18'
        },
        {
            id: 15,
            songName: '18 мне уже',
            author: 'Руки Вверх!',
            songUrl: './songs/15.mp3',
            labelUrl: './label/15.jpg',
            duration: '04:07'
        },
    ],
    currentSong: 0,
    filter: '',
    isPlaying: false
}


const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        nextSong: (state => {
            if (state.currentSong < state.playlist.length - 1) {
                state.currentSong += 1
            }
        }),
        prevSong: (state => {
            if (state.currentSong > 0) {
                state.currentSong -= 1
            }
        }),
        setCurrentSong: ((state, action) => {
            state.currentSong = action.payload
        }),
        setFilter: ((state, action) => {
            state.playlist = state.allPlaylist.filter(el => el.songName
                .toLowerCase()
                .includes((action.payload.toLowerCase())))
        }),
        setPlaylist: (state => {
            state.playlist = state.allPlaylist
        }),
        pauseTrack: (state => {
            state.isPlaying = false
        }),
        playTrack: (state => {
            state.isPlaying = true
        }),
    }
})

export const {
    nextSong,
    prevSong,
    setFilter,
    setPlaylist,
    pauseTrack,
    playTrack,
    setCurrentSong
} = playerSlice.actions

export default playerSlice.reducer