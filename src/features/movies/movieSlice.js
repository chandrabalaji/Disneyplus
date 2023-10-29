import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allmovies: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setmovies: (state, action) => {
      state.allmovies = action.payload.allmovies;
    },
  },
});

export const { setmovies } = movieSlice.actions;
export const allmovies = (state) => state.movie.allmovies;

export default movieSlice.reducer;
