import React, {useEffect, useState} from 'react';
import {MovieSessions} from "@/types/components/movies.ts";
import {fetchMovies} from "@/api/api.ts";


const MovieSeats = ({seats}):JSX.Element => {

    useEffect(() => {
        console.log(seats)
    }, []);

    return (
        <div className="">
            {seats.map((seat) => (
                <div className="flex justify-between">
                    <p>{seat.row}</p>
                    <div className="flex w-9">
                        {seat.taked_seats.map((el) => (
                            <p>{el}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MovieSeats;