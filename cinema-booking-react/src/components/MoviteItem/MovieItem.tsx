import React, {useEffect} from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/UI/card.tsx";
import styles from './MovieItem.module.css'

const MovieItem = ({item}):JSX.Element => {
    setTimeout(() => {
        console.log(item.genres)
    },2000)

    return (
        <Card className={styles.card}>
            <CardHeader>
                <img src={item.image} className={styles.image} alt="image" />
            </CardHeader>
            <CardContent>
                <CardTitle>
                    {item.title}
                </CardTitle>
            </CardContent>
            <CardFooter>
                <CardDescription>
                    {item.genres}
                </CardDescription>
            </CardFooter>
        </Card>
    );
};

export default MovieItem;