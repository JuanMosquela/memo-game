import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  difficulty: "",
  finished: false,
  status: "",
  points: 0,
  moves: 0,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameDifficulty: (state, { payload }) => {
      state.difficulty = payload;
    },
    updatePoints: (state, { payload }) => {
      state.points += payload;
    },

    setGameFinished: (state, { payload }) => {
      state.finished = payload;
    },
    setGameTotalMoves: (state, { payload }) => {
      state.moves += payload;
    },
    setGameStatus: (state, { payload }) => {
      state.status = payload;
    },
    resetGame: (state) => {
      state.difficulty = "";
      state.finished = false;
      state.status = "";
      state.points = 0;
      state.moves = 0;
    },
  },
});

export const selectGame = (state: RootState) => state.game;

export const {
  setGameFinished,
  updatePoints,
  setGameDifficulty,
  setGameTotalMoves,
  setGameStatus,
  resetGame,
} = gameSlice.actions;

export default gameSlice.reducer;
