import React, {useEffect, useState} from 'react';
import {MovieSessions} from "@/types/components/movies.ts";
import {fetchMovies} from "@/api/api.ts";
import Seats from "@/components/UI/Seat/Seats.tsx";
import styles from './MovieSeats.module.css'
import MoviePriceRate from "@/components/MoviePriceRate/MoviePriceRate.tsx";


const MovieSeats = ():JSX.Element => {


    const price = {
        adult_price: 12,
        student_price: 9,
        child_price: 7
    }

    const seats = [

    ]

    const tookenSeats = [
        { row: "A", taked_seats: ["10", "11"] },
        { row: "G", taked_seats: ["3", "4"] }
    ]

    const rangeSeats = ["A","B","C","D","E","F","G","H","I","J"]
    for(let el of rangeSeats){
        seats.push({row:el,seats:["1","2","3","4","5","6","7","8","9","10","11","12"]})
    }
    let k = 0

    seats.forEach((el,i) => {
        if(el.row === tookenSeats[k]?.row){
            for(let index = 0;index < el.seats.length;index++){
                if(tookenSeats[k].taked_seats.includes(el.seats[index])){
                    el.seats[index] = false
                }
            }
            k++
        }
    })

    const pickRate = ():any => {

    }


    return (
        <div className={styles.page}>

            {seats.map((seatInfo) => (
                <div className={styles.seatsContainer}>
                    <p className={styles.seatsRow}>{seatInfo.row}</p>
                    <div className="flex w-9">
                        <div className={styles.seats}>
                            {seatInfo.seats.map((seatNumber,i) => (
                                seatNumber ? (
                                    // <button className={styles.seat} onClick={pickRate}>
                                    //     <p className={styles.seatNumber}>
                                    //         {seatNumber}
                                    //     </p>
                                    // </button>
                                    <MoviePriceRate seatNumber={seatNumber} sessionsPrices={price}/>
                                ) : <div className={styles.seats}>
                                    <button disabled className={styles.seat}>
                                        <p>
                                            X
                                        </p>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MovieSeats;