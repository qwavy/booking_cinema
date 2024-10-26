import styles from './HomePage.module.css'
import MyCarousel from "@/components/UI/MyCarousel/MyCarousel.tsx";
import {useEffect, useState} from "react";
import {Movie} from "@/types/api/movies.ts";
import {fetchMovies} from "@/api/api.ts";


const HomePage = ():JSX.Element => {
    const [movies, setMovies] = useState([])

    const fetchData = async (): Promise<void> => {
        try{
            const data:Movie[] = await fetchMovies()
            setMovies(data)
        }catch (e){
            throw e
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className={styles.homePage}>
            <div className={styles.moviesCarousel}>
                <MyCarousel items={movies}/>
            </div>
        </div>
    )
};

export default HomePage;