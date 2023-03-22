import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface AuthState {
  username: string;
  email: string;
  picture?: string;
  token: string;
}

const initialState: AuthState = {
  username: localStorage.getItem("username")
    ? JSON.parse(localStorage.getItem("username") || "")
    : "",
  email: localStorage.getItem("email")
    ? JSON.parse(localStorage.getItem("email") || "")
    : "",
  picture: localStorage.getItem("picture")
    ? JSON.parse(localStorage.getItem("picture") || "")
    : "",
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token") || "")
    : "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, user, email, picture } = action.payload;

      state.username = user;
      state.token = token;
      state.email = email;
      state.picture = picture;

      localStorage.setItem("username", JSON.stringify(user));
      localStorage.setItem("email", JSON.stringify(email));
      localStorage.setItem("picture", JSON.stringify(picture));
      localStorage.setItem("token", JSON.stringify(token));
    },
    logout: (state) => {
      state.username = "";
      state.email = "";
      state.token = "";
      localStorage.clear();
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
