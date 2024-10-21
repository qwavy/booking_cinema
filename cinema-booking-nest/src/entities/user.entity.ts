import {Column, Entity,PrimaryColumn} from "typeorm";

@Entity()

export class UserEntity {
    @PrimaryColumn('uuid')
    id:string

    @Column()
    username:string

    @Column()
    password:string
}