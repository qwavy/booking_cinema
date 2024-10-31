import styles from './Seats.module.css'

const Seat = ({seatNumber} : string):JSX.Element => {
    return (
        <div className={styles.seats}>
           <button className={styles.seat}>
               <p className={styles.seatNumber}>
                {seatNumber}
               </p>
           </button>
        </div>
    );
};

export default Seat;