import {Injectable} from "@nestjs/common";
import {User} from "../interfaces/users";
import {Repository} from "typeorm";
import {UserEntity} from "../entities/user.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>

    ) {
    }

    findAll():Promise<UserEntity[]>{
       return this.userRepository.find()
    }

    async findOne(username: string): Promise<UserEntity | undefined> {
        return this.userRepository.findOneBy({username})
    }

    async create( user:UserEntity ): Promise<UserEntity>{
        console.log(user)
        return this.userRepository.save(user)
    }
}