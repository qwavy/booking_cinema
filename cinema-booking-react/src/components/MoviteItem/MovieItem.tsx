import styles from './MovieItem.module.css'
import {Link} from "react-router-dom";
import {MovieItemProps} from "@/components/MoviteItem/types.ts";

const MovieItem = ({item}:MovieItemProps):JSX.Element => {

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