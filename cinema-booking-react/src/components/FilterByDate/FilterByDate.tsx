import React from 'react';
import styles from './FilterByDate.module.css'

const FilterByDate = ():JSX.Element => {

    const active_dates = [
        "2024-11-04",
        "2024-11-05",
        "2024-11-06",
        "2024-11-07",
        "2024-12-07",
    ]
    const active_months = active_dates.map((active_date) => {
        return new Date(active_date).toLocaleString("en-GB",{ month: "long" })
    })
    const active_days_week = active_dates.map((active_date) => {
        return new Date(active_date).toLocaleString("en-GB",{ weekday: "short" })
    })
    const active_days = active_dates.map((active_date) => {
        return new Date(active_date).getDate()
    })

    const show_months = active_months.map((active_month,i) => {
        if(active_month !== active_months[i-1]){
            return active_month
        }else{
            return ""
        }
    })

    return (
        <div>
            <div className={styles.calendar}>
                <div className={styles.calendarMonths}>
                    {show_months.map((month) => (
                            month ?
                                <div>
                                    {month}
                                </div>
                                :
                                <div></div>
                    ))}
                </div>
                <div className={styles.calendarCards}>
                    {active_days_week.map((active_day_week,index) => (
                        <div className={styles.calendarCard}>
                            <h1>{active_day_week}</h1>
                            <h2>{active_days[index]}</h2>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default FilterByDate;