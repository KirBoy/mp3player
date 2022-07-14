import {configureStore} from "@reduxjs/toolkit";
import player from './player/playerSlice'

export const store = configureStore({
    reducer : {
        player
    }
})

export default store