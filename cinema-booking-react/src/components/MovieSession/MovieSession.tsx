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


const MovieSession = ({sessions}):JSX.Element => {


    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Time</TableHead>
                        <TableHead className="w-[200px]">Cinema Name</TableHead>
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