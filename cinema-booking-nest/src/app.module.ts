import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CinemasModule} from "./modules/cinemas.module";
import {MoviesModule} from "./modules/movies.module";
import {AuthModule} from "./modules/auth.module";
@Module({
  imports: [CinemasModule,MoviesModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
