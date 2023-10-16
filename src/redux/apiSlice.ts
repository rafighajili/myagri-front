import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Prediction } from "#/types/prediction";
import { Soil } from "#/types/soil";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://smarthackathon.alwaysdata.net/mission2023/enigma/hackaton1",
  }),
  endpoints: (builder) => ({
    getPrediction: builder.query<
      Prediction | undefined,
      { city?: string; temperature?: number }
    >({
      query: ({ city = "", temperature = 27 }) => ({
        url: "/api1.php",
        params: { city, temperature },
      }),
      transformResponse: (response: Prediction) =>
        !!response.city ? response : undefined,
    }),
    getSoil: builder.query<Soil | undefined, { city?: string }>({
      query: ({ city = "" }) => ({ url: "/api.php", params: { uid: city } }),
      transformResponse: (response: Soil[]) =>
        !!response.length ? response[0] : undefined,
    }),
  }),
});

export default apiSlice;

export const { useGetPredictionQuery, useGetSoilQuery } = apiSlice;
