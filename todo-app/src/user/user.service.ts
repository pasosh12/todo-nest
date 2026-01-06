import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async findOneByEmail(email: string): Promise<User | null> {
        return this.userRepository.findOne({ where: { email } });
    }

    async create(userData: Partial<User>): Promise<User> {
        const user = this.userRepository.create(userData);
        return this.userRepository.save(user);
    }

    async findOrCreate(userData: Partial<User>): Promise<User> {
        if (!userData.email) {
            throw new Error('Email is required');
        }
        const user = await this.findOneByEmail(userData.email);
        if (user) {
            return user;
        }
        return this.create(userData);
    }
}
