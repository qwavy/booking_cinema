import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CinemasModule} from "./modules/cinemas.module";
import {MoviesModule} from "./modules/movies.module";
import {AuthModule} from "./modules/auth.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "./entities/user.entity";
import {MovieInfo} from "./entities/movie/movieInfo.entity";
import {MovieSession} from "./entities/movie/movieSession.entity";
import {Price} from "./entities/movie/price.entity";
import {Seat} from "./entities/movie/seat.entity";
@Module({
  imports: [
      TypeOrmModule.forRoot({
          type:"postgres",
          host:"localhost",
          port:5432,
          username:"postgres",
          password:"postgres",
          entities: [UserEntity,MovieInfo,MovieSession,Price,Seat],
          database: 'cinema-booking',
          synchronize: true,
          logging: true,
      }),
      CinemasModule,MoviesModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
