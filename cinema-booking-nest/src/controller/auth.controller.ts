import {Body, Controller, Get, HttpCode, HttpStatus, Post, Res} from "@nestjs/common";
import { Response } from 'express';
import {AuthService} from "../services/auth.service";
import {User} from "../interfaces/auth";

@Controller("auth")
export class AuthController {
    constructor(private readonly authServie:AuthService) {
    }

    @Get()
    getUsers(): User[]{
        return this.authServie.getUsers()
    }

    @Post()
    registerUser(@Body() user: User){
        this.authServie.registerUser(user)
    }

    @HttpCode(HttpStatus.OK)
    @Post("/login")
    loginUser( @Body() user:User){
        return this.authServie.loginUser(user)
    }
}