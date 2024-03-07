import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ) { }

    async singnup(
        email: string,
        nickName: string,
        name: string,
        password: string,
    ) {
        console.log(email)
        const hashedPassword = await bcrypt.hash(password, 5);
        console.log('sucess signup')
        const createAuth = await this.userRepository.create({
            email,
            nickName,
            name,
            password: hashedPassword
        })
        console.log('sucess account', createAuth)
        const save = await this.userRepository.save(createAuth);
        return save
    }

    async profile() {
        const profile = this.userRepository.find();
        console.log('profile', profile)
        return profile;
    }
}