import { Injectable } from '@nestjs/common';
import { User } from 'src/curd/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
      ) {}
    
      findAll(): Promise<User[]> {
        return this.userRepository.find();
      }
    
      findOne(id: number): Promise<User> {
        return this.userRepository.findOneBy({ id });
      }
    
      create(user: User): Promise<User> {
        return this.userRepository.save(user);
      }
    
      async update(id: number, user: Partial<User>): Promise<User> {
        await this.userRepository.update(id, user);
        return this.userRepository.findOneBy({ id });
      }
    
      async remove(id: number): Promise<void> {
        await this.userRepository.delete(id);
      }
}
