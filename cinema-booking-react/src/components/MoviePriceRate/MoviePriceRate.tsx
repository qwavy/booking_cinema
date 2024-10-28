import React from 'react';
import {Dialog, DialogContent, DialogTrigger} from "@/components/UI/dialog.tsx";

const MoviePriceRate = ({seatNumber}):JSX.Element => {
    return (
        <Dialog>
            <DialogTrigger>
                <button>{seatNumber}</button>
            </DialogTrigger>
            <DialogContent>
                <h1>{seatNumber}</h1>
            </DialogContent>
        </Dialog>
    );
};

export default MoviePriceRate;