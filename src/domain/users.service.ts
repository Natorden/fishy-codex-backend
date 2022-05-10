import { UpdateUserDto } from '../users/dto/update-user.dto';
import { User } from '../core/user.entity';
import { IUserRepository } from './borders/userRepository.interface';

export class UsersService {
  private userRepo: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepo = userRepository;
  }

  create(
    name: string,
    age: number,
    email: string,
    password: string,
  ): Promise<User> {
    return this.userRepo.create(name, age, email, password);
  }

  login(email: string, password: string): Promise<User> {
    return this.userRepo.getUser(email, password);
  }

  findAll(): Promise<User[]> {
    return this.userRepo.getAllUsers();
  }

  findById(id: string): Promise<User> {
    return this.userRepo.getUserById(id);
  }

  findByIds(ids: string[]): Promise<User[]> {
    return this.userRepo.getUsersByIds(ids);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
