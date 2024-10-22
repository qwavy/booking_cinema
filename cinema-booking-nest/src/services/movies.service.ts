import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {MovieInfo} from "../entities/movie/movieInfo.entity";
import {Repository} from "typeorm";
import {MovieSession} from "../entities/movie/movieSession.entity";
@Injectable()
export class MoviesService{

    constructor(
        @InjectRepository(MovieInfo)
        private readonly movieRepository: Repository<MovieInfo>,

        @InjectRepository(MovieSession)
        private readonly sessionRepository: Repository<MovieSession>
    ){}

    async create(
        movieData: Partial<MovieInfo>,
        sessionsData: Partial<MovieSession>
    ): Promise<any>{
        const movie = this.movieRepository.create(movieData.movie_info)
        // const movie = movieData.movie_info
        console.log(movie)
        await this.movieRepository.save(movie);


        const sessions = sessionsData.map((sessionData) => {
            const session = this.sessionRepository.create(sessionData)
            session.movieInfo = movie
            return session
        })

        await this.sessionRepository.save(sessions);

        return movie;
    }
}