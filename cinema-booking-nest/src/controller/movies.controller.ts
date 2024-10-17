import {Controller, Get} from "@nestjs/common";
import {MoviesService} from "../services/movies.service";
import {Movie} from "../interfaces/movies";

@Controller("movies")
export class MoviesController{
    constructor(private readonly moviesService:MoviesService) {
    }
    @Get()
    getMovies(): Movie[]{
        return this.moviesService.getMovies()
    }
}