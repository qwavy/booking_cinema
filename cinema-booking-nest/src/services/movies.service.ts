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

    async findOne(id:string): Promise<any>{
        const movieInfo = await this.movieRepository.findOneBy({id})
        const movieSession = await this.sessionRepository.find({
            where:{
                movieInfo:{id:movieInfo.id}
            }
        })

        return [{
            movie_info:movieInfo,
            movie_session:movieSession
        }]
    }

    async findAll(): Promise<any>{

        const movies = [

        ]
        const movie_info = await this.movieRepository.find()

        for(let el of movie_info){
            // @ts-ignore
            const movieSession = await this.sessionRepository.find({
                where:{
                    movieInfo:{id:el.id}
                }
            })

            const movie = {
                movie_info:el,
                movie_session:movieSession
            }
            movies.push(
                movie
            )
        }
        return movies
    }

    async create(
        movieData: Partial<MovieInfo>,
        sessionsData: Partial<MovieSession>
    ): Promise<any>{
        const movie = this.movieRepository.create(movieData.movie_info)
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