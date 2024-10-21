import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CinemasModule} from "./modules/cinemas.module";
import {MoviesModule} from "./modules/movies.module";
import {AuthModule} from "./modules/auth.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "./entities/user.entity";
@Module({
  imports: [
      TypeOrmModule.forRoot({
          type:"postgres",
          host:"localhost",
          port:5432,
          username:"postgres",
          password:"postgres",
          entities: [UserEntity],
          database: 'cinema-booking',
          synchronize: true,
          logging: true,
      }),
      CinemasModule,MoviesModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
