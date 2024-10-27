import React, {useEffect} from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {Link} from "react-router-dom";
import styles from './MovieSession.module.css'

import ticketIcon from '@/assets/icons/ticket.svg'


const MovieSession = ({sessions}):JSX.Element => {

    if(!sessions.length) {
        return (
                <div className={styles.emptySessions}>
                    <img src={ticketIcon} alt="ticket icon" className={styles.ticketIcon}/>
                    <h2 className={styles.emptySessionsTitle}>We dont have any sessions</h2>
                </div>
            )
    }

    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Time</TableHead>
                        <TableHead>Cinema Name</TableHead>
                        <TableHead>Adult</TableHead>
                        <TableHead>Child</TableHead>
                        <TableHead className="text-right">Student</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                        {sessions.map((sessionCell) => (
                                <TableRow>
                                    <Link to="/takedSeats">
                                        <TableCell>{sessionCell.time}</TableCell>
                                    </Link>
                                    <TableCell>{sessionCell.cinema_name}</TableCell>
                                    <TableCell>${sessionCell.price.adult_price}</TableCell>
                                    <TableCell>${sessionCell.price.child_price}</TableCell>
                                    <TableCell>${sessionCell.price.student_price}</TableCell>
                                </TableRow>
                        ))}
                </TableBody>
            </Table>

        </div>
    );
};

export default MovieSession;