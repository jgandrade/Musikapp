import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const options = {
  method: "GET",
  url: "https://shazam-core.p.rapidapi.com/v1/charts/genre-world",
  params: { genre_code: "POP" },
  headers: {
    "X-RapidAPI-Key": "9a829d40c3mshdc92f4be6d6f9afp1226bdjsnf13446105342",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi", 
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: ()=>{
        headers.set('X-RapidAPI-Key',)
    }
  })
});
