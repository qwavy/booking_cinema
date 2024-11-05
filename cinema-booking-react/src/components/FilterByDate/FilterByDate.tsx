import React from 'react';
import styles from './FilterByDate.module.css'
import {useState} from "react";
import {dateToDay, dateToDayWeek, getDaysInMonth, getNextMonth, getTodaysMonth} from "@/lib/dateTime.ts";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/UI/carousel.tsx";
import MovieItem from "@/components/MoviteItem/MovieItem.tsx";
import classNames from "classnames";
import {Button} from "@/components/UI/button.tsx";

const FilterByDate = ():JSX.Element => {

    const currentDay = new Date()

    const allDates = [
        {
            month:currentDay.getMonth(),
            dates:[]
        },
        {
            month:currentDay.getMonth()+1,
            dates:[]
        }
    ]

    allDates.forEach((date) => {
        for(let i = 1;i <= getDaysInMonth(date.month);i++){
            if(i < 10){
                date.dates.push(`${currentDay.getFullYear()}-${date.month+1}-0${i}`)
            }else{
                date.dates.push(`${currentDay.getFullYear()}-${date.month+1}-${i}`)
            }
        }
    })


    const active_dates = [
        {
            month:"November",
            dates:[
                "2024-11-04",
                "2024-11-05",
                "2024-11-06",
                "2024-11-07",
            ]
        },
        {
            month:"December",
            dates:[
                "2024-12-07",
                "2024-12-08",
                "2024-12-09",
            ]
        }
    ]

    allDates.forEach((dateObj,dateObjIndex) => {
        dateObj.dates.forEach((date,index) => {
            if(active_dates[dateObjIndex].dates.includes(date)){
                allDates[dateObjIndex].dates[index] = false
            }
        })
    })

    console.log(allDates)

    // const active_dates = [
    //     "2024-11-04",
    //     "2024-11-05",
    //     "2024-11-06",
    //     "2024-11-07",
    //     "2024-12-07",
    //     "2024-12-08",
    //     "2024-12-09",
    // ]
    // const active_months = active_dates.map((active_date) => {
    //     return new Date(active_date).toLocaleString("en-GB",{ month: "long" })
    // })

    // const active_days = active_dates.map((active_date) => {
    //     return new Date(active_date).getDate()
    // })

    // const show_months = active_months.map((active_month,i) => {
    //     if(active_month !== active_months[i-1]){
    //         return active_month
    //     }else{
    //         return ""
    //     }
    // })

    return (
        <div>

            <div className={styles.calendar}>
                <Carousel hiddenButton={true}>
                    <div className={styles.calendarMonths}>
                        {active_dates.map((acitve_date) => (
                            <div>
                                <h2>{acitve_date.month}</h2>
                            </div>
                        ))}
                    </div>
                    <CarouselContent>
                        {active_dates.map((acitve_date) => (
                            <>
                                {acitve_date.dates.map((date) => (
                                    <CarouselItem className={classNames(styles.calendarCardActive,"sm:basis-1/2 md:basis-1/4 lg:basis-1/6 xl:basis-1/7")}>
                                        <Button variant={"ghost"} >
                                            <h1>
                                                {dateToDayWeek(date)}
                                            </h1>
                                            <h2>
                                                {dateToDay(date)}
                                            </h2>
                                        </Button>
                                    </CarouselItem>
                                ))}
                            </>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious hiddenButton={true}/>
                    <CarouselNext hiddenButton={true}/>
                </Carousel>


            </div>
        </div>
    );
};

export default FilterByDate;