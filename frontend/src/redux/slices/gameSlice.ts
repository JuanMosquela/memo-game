import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface GameState {
  difficulty: string;
  finished: boolean;
  status: string;
  points: number;
  moves: number;
}

const difficulty = localStorage.getItem("difficulty")
  ? JSON.parse(localStorage.getItem("difficulty") || "")
  : "normal";

const initialState: GameState = {
  difficulty,
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

      localStorage.setItem("difficulty", JSON.stringify(state.difficulty));
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

      localStorage.clear();
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
