import React, {useEffect, useState} from 'react';
import styles from './MovieSeats.module.css'
import MoviePriceRate from "@/components/MoviePriceRate/MoviePriceRate.tsx";
import {MoviePrice, MovieSessionsSeats} from "@/types/components/movies.ts";


const MovieSeats = ():JSX.Element => {


    const price:MoviePrice = {
        adult_price: 12,
        student_price: 9,
        child_price: 7
    }

    const seats:MovieSessionsSeats[] = [

    ]

    const tookenSeats:MovieSessionsSeats[] = [
        { row: "A", taked_seats: ["10", "11"] },
        { row: "G", taked_seats: ["3", "4"] }
    ]

    const rangeSeats:string[] = ["A","B","C","D","E","F","G","H","I","J"]
    for(const el of rangeSeats){
        seats.push({row:el,seats:["1","2","3","4","5","6","7","8","9","10","11","12"]})
    }
    let k = 0

    seats.forEach((el) => {
        if(el.row === tookenSeats[k]?.row){
            for(let index = 0;index < el.seats.length;index++){
                if(tookenSeats[k].taked_seats.includes(el.seats[index])){
                    el.seats[index] = ""
                }
            }
            k++
        }
    })


    return (
        <div className={styles.page}>

            {seats.map((seatInfo) => (
                <div className={styles.seatsContainer}>
                    <p className={styles.seatsRow}>{seatInfo.row}</p>
                    <div className="flex w-9">
                        <div className={styles.seats}>
                            {seatInfo.seats.map((seatNumber) => (
                                seatNumber ? (
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