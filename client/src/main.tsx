import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "./components/Board";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";

import Home from "./pages/Home";
import Game from "./pages/Game";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import LeaderBoard from "./pages/LeaderBoard";
import Register from "./pages/Register";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/game" element={<Game />} />
            <Route path="/ranking" element={<LeaderBoard />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);
