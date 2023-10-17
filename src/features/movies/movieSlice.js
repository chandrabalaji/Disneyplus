import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  new: null,
  allmovies: null,
  starvijay:null,
  oldmovies:null,
  kids:null,
};


const  movieSlice = createSlice({
  name:'movie',
  initialState,
  reducers:{
    setmovies:(state, action) => {
      state.allmovies = action.payload.allmovies
    
    }
  }
})


export const  {setmovies} = movieSlice.actions
export const allmovies = state => state.movie.allmovies



export default movieSlice.reducer