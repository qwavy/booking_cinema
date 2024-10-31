import React from 'react';
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTrigger} from "@/components/UI/dialog.tsx";
import {RadioGroup, RadioGroupItem} from "@/components/UI/radio-group.tsx";
import {Label} from "@/components/UI/label.tsx";

import styles from './MoviePriceRate.module.css'
import {rateNameFromObj} from "@/lib/workWithNames.ts";
import {MoviePriceRateProps} from "@/components/MoviePriceRate/types.ts";
import Seat from "@/components/UI/Seat/Seats.tsx";
const MoviePriceRate = ({seatNumber,sessionsPrices}:MoviePriceRateProps):JSX.Element => {



    return (
        <Dialog>
            <DialogTrigger className={styles.seats}>
                <Seat seatNumber={seatNumber}/>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogHeader className={styles.dialogHeader}>
                        Please pick rate
                    </DialogHeader>
                </DialogHeader>
                <div>
                    <RadioGroup defaultValue="adult">
                        {Object.keys(sessionsPrices).map((rateName,i) => (
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value={rateNameFromObj(rateName,false)} id="r1" />
                                <Label htmlFor={`r${i}`} className={styles.rateName}>{rateNameFromObj(rateName,true)}</Label>
                                <span className={styles.ratePrice}>${sessionsPrices[rateName]}</span>
                            </div>
                        ))}
                    </RadioGroup>
                </div>
                <DialogFooter>
                    {/*<Button className={styles.dialogButton} onClick={()}>Submit</Button>*/}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default MoviePriceRate;