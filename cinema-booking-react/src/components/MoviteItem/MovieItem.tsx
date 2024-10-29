import React, {useEffect} from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/UI/card.tsx";
import styles from './MovieItem.module.css'
import {Link} from "react-router-dom";

const MovieItem = ({item}):JSX.Element => {

    return (
        <Link to={`/moviePage/${item.id}`} className={styles.movie}>
            <div className={styles.movieName}>
                <img src={item.image} className={styles.movieImage} alt="image" />
            </div>
            <div className={styles.movieInfo}>
                <h3 className={styles.movieTitle}>
                    {item.title}
                </h3>
                <div className={styles.movieGenres}>
                    {item.genres.map((genre) => (
                        <h4 className={styles.movieGenre}>
                            {genre}
                        </h4>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default MovieItem;