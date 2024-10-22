import {Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {MovieSession} from "./movieSession.entity";

@Entity()
export class MovieInfo{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    title:string

    @Column()
    image:string

    @Column()
    release_date: string

    @Column('simple-array')
    genres: string[]

    @Column()
    duration: number

    @OneToMany(() => MovieSession, (session) => session.movieInfo, { cascade: true })
    movie_sessions:MovieSession[]
}

