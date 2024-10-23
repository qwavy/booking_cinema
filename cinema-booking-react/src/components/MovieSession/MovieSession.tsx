import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const MovieSession = ({session}):JSX.Element => {
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
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
                    <TableRow>
                        <TableCell className="font-medium">{session.time}</TableCell>
                        <TableCell>{session.cinema_name}</TableCell>
                        <TableCell>${session.price.adult_price}</TableCell>
                        <TableCell>${session.price.child_price}</TableCell>
                        <TableCell>${session.price.student_price}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </div>
    );
};

export default MovieSession;