import axios, { AxiosResponse } from "axios";
import {Movie} from "@/types/api/movies.ts";
const URL = "http://localhost:3000"
export const fetchMovies = async (): Promise<Movie[]> => {
    try{
        const response:AxiosResponse<Movie[]> = await axios.get(`${URL}/movies`);
        return response.data
    }catch (e){
        throw e
    }
}


export const fetchMovie = async (id:string): Promise<Movie[]> => {
    try{
        const response:AxiosResponse<Movie[]> = await axios.get(`${URL}/movies/${id}`);
        return response.data
    }catch (e){
        throw e
    }
}