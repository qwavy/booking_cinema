import React, {useEffect, useState} from 'react';
import {fetchMovies} from "@/api/api.ts";
import {Movie} from "@/types/api/movies.ts";
import './MoviePage.css'

const MoviePage = ():JSX.Element => {

    const [movie, setMovie] = useState([])

    const fetchData = async (): Promise<void> => {
        try{
            const data: Movie[] = await fetchMovies()
            setMovie(data)
        }catch (e){
            throw e
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    return (
        <div>
            {movie.map((el,i) => (
                <h1 className="title">{el.movie_info.title}</h1>
            ))}
        </div>
    );
};

export default MoviePage;