import axios, { AxiosResponse } from "axios";
import {Movie} from "@/types/api/movies.ts";
//
export const fetchMovies = async (): Promise<Movie[]> => {
    try{
        const response:AxiosResponse<Movie[]> = await axios.get("http://localhost:3000/movies");
        return response.data
    }catch (e){
        throw e
    }
}
