import React from 'react';
import {MovieSessions} from "@/types/components/movies.ts";


const MovieSeats = ():JSX.Element => {
    const movie_sessions:MovieSessions[] =  {
        cinema_name: "Cinema Plaza",
        time: "20:30",
        hall: 2,
        price: {
            adult_price: 12,
            student_price: 9,
            child_price: 7
        },
        seats: [
            { row: "A", taked_seats: ["1", "2"] },
            { row: "B", taked_seats: ["5", "6"] }
        ]
    }
    const {seats} = movie_sessions


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