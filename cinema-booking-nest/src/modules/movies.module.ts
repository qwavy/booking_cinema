import {Module} from "@nestjs/common";
import {MoviesController} from "../controller/movies.controller";
import {MoviesService} from "../services/movies.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {MovieInfo} from "../entities/movie/movieInfo.entity";
import {MovieSession} from "../entities/movie/movieSession.entity";
import {Price} from "../entities/movie/price.entity";
import {Seat} from "../entities/movie/seat.entity";
@Module({
    imports:[TypeOrmModule.forFeature([MovieInfo,MovieSession,Price,Seat])],
    controllers:[MoviesController],
    providers:[MoviesService]
})

export class MoviesModule {}