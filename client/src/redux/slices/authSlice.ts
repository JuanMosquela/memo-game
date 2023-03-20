import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface AuthState {
  username: string;
  email: string;
  token: string;
}

const initialState: AuthState = {
  username: localStorage.getItem("username")
    ? JSON.parse(localStorage.getItem("username") || "")
    : "",
  email: localStorage.getItem("email")
    ? JSON.parse(localStorage.getItem("email") || "")
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
      const { token, username, email } = action.payload;

      state.username = username;
      state.token = token;
      state.email = email;

      console.log(action.payload);

      localStorage.setItem("username", JSON.stringify(username));
      localStorage.setItem("email", JSON.stringify(email));
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
