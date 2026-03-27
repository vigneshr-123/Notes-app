import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './features/UserSlice'
import NoteReducer from './features/NoteSlice'

export const store = configureStore({
    reducer:{
        users:UserReducer,
        notes:NoteReducer,
    }
})