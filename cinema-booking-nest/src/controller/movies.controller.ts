import {Body, Controller, Get, Post} from "@nestjs/common";
import {MoviesService} from "../services/movies.service";

@Controller("movies")
export class MoviesController{
    constructor(private readonly moviesService:MoviesService) {
    }

    @Get()
    helloWorld(){
        return "hello"
    }

    @Post()
    async createMovie(@Body() body:any){
        const { movie_sessions, ...movieData } = body
        return await this.moviesService.create(movieData,movie_sessions)
    }

}