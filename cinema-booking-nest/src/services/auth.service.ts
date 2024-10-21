import {Get, Injectable, Post, UnauthorizedException,BadRequestException } from "@nestjs/common";
import {User} from "../interfaces/users";

import { v4 as uuidv4 } from 'uuid';
import { JwtService } from "@nestjs/jwt";
import {UsersService} from "./users.service";
import {UserEntity} from "../entities/user.entity";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {
    }
    private readonly users: User[] = []

    async signUp(user:User): Promise<User   >{
        if(!user.username || !user.password){
            throw new BadRequestException()
        }else{
            user.id = uuidv4();
            await this.usersService.create(user)
            return user

        }
    }

    async signIn(user:User): Promise<{ access_token: string }> {
        const userDb = await this.usersService.findOne(user.username)
        console.log(user.username)
        console.log(userDb)
        if(userDb?.password !== user.password){
            throw new UnauthorizedException()
        }
        const payload = { sub: user.id, username: user.username };

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

    getUsers(): Promise<UserEntity[]> {
        return this.usersService.findAll()
    }
}