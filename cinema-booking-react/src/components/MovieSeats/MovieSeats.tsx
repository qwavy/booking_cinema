import React, {useEffect, useState} from 'react';
import {MovieSessions} from "@/types/components/movies.ts";
import {fetchMovies} from "@/api/api.ts";
import Seats from "@/components/UI/Seat/Seats.tsx";


const MovieSeats = ():JSX.Element => {

    const takedSeats = [
        { row: "A", taked_seats: ["10", "11"] },
        { row: "G", taked_seats: ["3", "4"] }
    ]
    const seats = [

    ]
    const rangeSeats = ["A","B","C","D","E","F","G","H","I","J"]
    for(let el of rangeSeats){
        seats.push({row:el,taked_seats:[1,2,3,4,5,6,7,8,9,10,11,12]})
    }



    return (
        <div className="">
            {seats.map((seat) => (
                <div className="flex justify-between">
                    <p className="text-center margin-auto">{seat.row}</p>
                    <div className="flex w-9">
                        <Seats seats={seat.taked_seats}/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MovieSeats;