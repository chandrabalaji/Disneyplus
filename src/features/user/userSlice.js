import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setuserLogin: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setsignout: (state) => {
      state.email = null;
      state.name = null;
      state.photo = null;
    },
  },
});

export const {setuserLogin, setsignout} = userSlice.actions;
export const username = (state) => state.user.name 
export const useremail = (state) => state.user.email
export const  userphoto = (state) => state.user.photo
export default userSlice.reducer