import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {MovieInfo} from "./movieInfo.entity";
import {Price} from "./price.entity";
import {Seat} from "./seat.entity";

@Entity()
export class MovieSession{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    cinema_name:string

    @Column()
    time:string

    @Column()
    hall:number

    @ManyToOne(() => MovieInfo, (movieInfo) => movieInfo.movie_sessions)
    @JoinColumn({name: "movie_info_id"})
    movieInfo:MovieInfo

    @Column(() => Price)
    price:Price;

    @OneToMany(() => Seat, (seat) => seat.session)
    seats: Seat[]
}