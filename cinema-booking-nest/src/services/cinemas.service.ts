import {Injectable} from "@nestjs/common";
import {Cinema} from "../interfaces/cinemas";

@Injectable()
export class CinemasService{
    private cinemas: Cinema[] = [
        {id:1,name:"Chaplin",city:"Astana",address:"Mangilik el 51",contacts:"+77711234432"},
        {id:2,name:"Kinopark 7",city:"Astana",address:"Respublika 4",contacts:"+77011234492"},
        {id:3,name:"Arsenal",city:"Almaty",address:"Abaya 8",contacts:"+77711236432"},
        {id:4,name:"Chaplin",city:"Astana",address:"Syganak 10",contacts:"+77711134432"},
    ]
    getAllCinemas(): Cinema[] {
        return this.cinemas
    }
    getCinema(id:number ): Cinema[]{
        return this.cinemas.filter((cinema) => cinema.id == id)
    }
}
