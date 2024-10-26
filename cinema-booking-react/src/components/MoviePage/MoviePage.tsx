import React, {useEffect, useState} from 'react';
import {fetchMovie} from "@/api/api.ts";
import {Movie} from "@/types/api/movies.ts";
import styles from './MoviePage.module.css'
import {useParams} from "react-router-dom";
import MovieSeats from "@/components/MovieSeats/MovieSeats.tsx";
import {releaseDateToYear} from "@/lib/utils.ts";
import {Badge} from "@/components/UI/badge.tsx";
import MovieSession from "@/components/MovieSession/MovieSession.tsx";

const MoviePage = ():JSX.Element => {
    const [movie, setMovie] = useState([])

    const params = useParams()

    const fetchData = async (): Promise<void> => {
        try{
            const data: Movie[] = await fetchMovie(params.id)
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

            {movie.map((movieInfo) => (
                <div className={styles.moviePage}>
                    <div>
                        <img src={movieInfo.movie_info.image} className={styles.movieImage}/>
                    </div>
                    <div className={styles.movieInfo}>
                        <h1 className={styles.movieTitle}>{movieInfo.movie_info.title} ({releaseDateToYear(movieInfo.movie_info.release_date)})</h1>
                        <div className={styles.movieGenres}>
                            {movieInfo.movie_info.genres.map((genre) => (
                                <Badge>{genre}</Badge>
                            ))}
                        </div>
                        <hr/>
                        <div className={styles.movieSessions}>
                            <MovieSession sessions={movieInfo.movie_session}/>
                        </div>
                    </div>
                </div>
            ))}


        </div>
    );
};

export default MoviePage;