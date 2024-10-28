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
import {Link, redirect, useNavigate} from "react-router-dom";
import styles from './MovieSession.module.css'
import ticketIcon from '@/assets/icons/ticket.svg'


const MovieSession = ({sessions}):JSX.Element => {

    const navigate = useNavigate()

    if(!sessions.length) {
        return (
                <div className={styles.emptySessions}>
                    <img src={ticketIcon} alt="ticket icon" className={styles.ticketIcon}/>
                    <h2 className={styles.emptySessionsTitle}>We dont have any sessions</h2>
                </div>
            )
    }

    const handleRedirect = (id):void => {
        navigate(`movieSeats/${id}`)
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
                        <TableHead >Student</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                        {sessions.map((sessionCell) => (
                            <TableRow onClick={() => handleRedirect(1)} className={styles.tableRow}>
                                <TableCell>{sessionCell.time}</TableCell>
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