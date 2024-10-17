import {Controller, Get, Param} from "@nestjs/common";
import {CinemasService} from "../services/cinemas.service";
import {Cinema} from "../interfaces/cinemas";


@Controller('cinemas')
export class CinemasController{
    constructor(private readonly cinemasService:CinemasService ) {}

    @Get()
    getCinemas(): Cinema[]{
        return this.cinemasService.getAllCinemas()
    }

    @Get(":id")
    getCinema(@Param() params:any): Cinema[]{
        return this.cinemasService.getCinema(params.id)
    }

}