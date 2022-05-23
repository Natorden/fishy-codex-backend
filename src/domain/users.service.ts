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
    avatar: string,
  ): Promise<User> {
    return this.userRepo.create(name, age, email, password, avatar);
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

  update(
    id: string,
    name: string,
    age: number,
    email: string,
    password: string,
    avatar: string,
  ): Promise<User> {
    return this.userRepo.updateUser(id, name, age, email, password, avatar);
  }

  remove(id: string) {
    return this.userRepo.removeUser(id);
  }

  findOne(number: number) {
    return `This action removes a #${number} user`;
  }
}
