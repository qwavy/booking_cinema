import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {MoviesService} from "../services/movies.service";

@Controller("movies")
export class MoviesController{
    constructor(private readonly moviesService:MoviesService) {
    }

    @Get(":id")
    getMovie(@Param() params:any){
        return this.moviesService.findOne(params.id)
    }

    @Get()
    getMovies(){
        return this.moviesService.findAll()
    }

    @Post()
    async createMovie(@Body() body:any){
        const { movie_sessions, ...movieData } = body
        return await this.moviesService.create(movieData,movie_sessions)
    }

}