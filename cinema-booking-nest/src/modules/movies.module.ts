import {Module} from "@nestjs/common";
import {MoviesController} from "../controller/movies.controller";
import {MoviesService} from "../services/movies.service";
@Module({
    controllers:[MoviesController],
    providers:[MoviesService]
})

export class MoviesModule {}