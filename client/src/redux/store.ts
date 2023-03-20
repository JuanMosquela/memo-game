import { configureStore } from "@reduxjs/toolkit";
import { emptyApi } from "./api/emptyApi";
import authSlice from "./slices/authSlice";
import gameSlice from "./slices/gameSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    game: gameSlice,
    [emptyApi.reducerPath]: emptyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
