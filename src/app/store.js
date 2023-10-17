import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice'
import moviesReducer from '../features/movies/movieSlice'


export default configureStore({
    reducer :{
        user:userReducer,
        movie:moviesReducer
    }
})