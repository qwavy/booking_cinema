import {Get, Injectable, Post} from "@nestjs/common";
import {User} from "../interfaces/auth";

import { v4 as uuidv4 } from 'uuid';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService
    ) {
    }
    private readonly users: User[] = []

    registerUser(user: User){
        user.id = uuidv4();
        this.users.push((user))
        return user
    }

    loginUser(user: User){
        const targetUser = this.users.find((el) => el.username == user.username)
        if(!targetUser){
            return "undifiend user"
        }
        if(targetUser.username === user.username && targetUser.password === user.password){
            return this.jwtService.sign(user)
            // return "sucsees"
        }
        return "password or username incorrect"
    }

    getUsers(): User[]{
        return this.users
    }
}