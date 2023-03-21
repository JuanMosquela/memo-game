import { PlayerStats } from "../../types/types";
import { emptyApi } from "./emptyApi";

export const extendedGameApi = emptyApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPlayerStats: builder.query<PlayerStats[], void>({
      query: () => "/game/stats",
    }),
    saveGame: builder.mutation({
      query: (body) => ({
        url: "/game/save",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSaveGameMutation, useGetAllPlayerStatsQuery } =
  extendedGameApi;
