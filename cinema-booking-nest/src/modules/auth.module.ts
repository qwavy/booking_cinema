import {Module} from "@nestjs/common";
import {AuthController} from "../controller/auth.controller";
import {AuthService} from "../services/auth.service";
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../constants'
import {UsersModule} from "./users.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "../entities/user.entity";

@Module({
    controllers:[AuthController],
    providers:[AuthService],
    imports:[UsersModule,
        JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60s' },
    }),

    ]
})

export class AuthModule {}