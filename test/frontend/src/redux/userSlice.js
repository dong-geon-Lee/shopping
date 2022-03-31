import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;

const currentUser = user && JSON.parse(user).currentUser;

const initialState = {
  currentUser: currentUser ? currentUser : null,
  isFetching: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutSuccess: (state) => {
      state.currentUser = null;
    },
    editSuccess: (state, action) => {
      state.isFetching = false;

      const { _id, username, email, password } = action.payload;

      [state.currentUser].map((user) => {
        if (user._id === _id) {
          user.username = username;
          user.email = email;
          user.password = password;
        }
      });
    },
    deleteSuccess: (state, action) => {
      console.log(action.payload, "payload");
      console.log(state.currentUser._id, "id");

      if (action.payload.id === state.currentUser._id) {
        state.currentUser = null;
        state.isFetching = false;
        state.error = false;
      }
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logoutSuccess,
  editStart,
  editSuccess,
  editFailure,
  deleteStart,
  deleteSuccess,
  deleteFailure,
} = userSlice.actions;

export default userSlice.reducer;
