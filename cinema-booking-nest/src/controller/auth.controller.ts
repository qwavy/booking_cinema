import {Body, Controller, Get, HttpCode, HttpStatus, Post, Res} from "@nestjs/common";
import { Response } from 'express';
import {AuthService} from "../services/auth.service";
import {User} from "../interfaces/users";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService:AuthService) {
    }

    @Get("/users")
    getUsers(){
        return this.authService.getUsers()
    }

    @Post("/register")
    registerUser(@Body() user: User){
        this.authService.signUp(user)
    }

    @HttpCode(HttpStatus.OK)
    @Post("/login")
    loginUser( @Body() user:User){
        return this.authService.signIn(user)
    }
}