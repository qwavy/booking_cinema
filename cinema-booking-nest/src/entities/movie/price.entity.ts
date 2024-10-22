import {Column, Entity} from "typeorm";

export class Price {
    @Column()
    adult_price:number

    @Column()
    student_price:number

    @Column()
    child_price:number
}