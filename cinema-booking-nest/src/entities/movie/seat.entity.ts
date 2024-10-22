import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {MovieSession} from "./movieSession.entity";

@Entity()
export class Seat {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    row:string

    @Column('simple-array')
    taked_seats:string[]

    @ManyToOne(() => MovieSession, (session) => session.seats)
    @JoinColumn({ name: "session_id"})
    session:MovieSession
}