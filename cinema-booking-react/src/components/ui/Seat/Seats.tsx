import React from 'react';
import styles from './Seats.module.css'

const Seats = ({seats}):JSX.Element => {
    return (
        <div className={styles.seats}>
            {seats.map((seat) => (
               <button className={styles.seat}>
                   <p className={styles.seatNumber}>
                    {seat}
                   </p>
               </button>
            ))}
        </div>
    );
};

export default Seats;