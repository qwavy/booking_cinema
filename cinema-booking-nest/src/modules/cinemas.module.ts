import {Module} from "@nestjs/common";
import {CinemasController} from "../controller/cinemas.controller";
import {CinemasService} from "../services/cinemas.service";

@Module({
    controllers:[CinemasController],
    providers:[CinemasService]
})

export class CinemasModule {}