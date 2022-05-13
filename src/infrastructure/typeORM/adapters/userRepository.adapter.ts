import { IUserRepository } from '../../../domain/borders/userRepository.interface';
import { User } from '../../../core/user.entity';
import { EntityManager, Repository } from 'typeorm';
import { UserSchema } from '../schemas/user.schema';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepositoryAdapter implements IUserRepository {
  private readonly userRepo: Repository<User>;

  constructor(private readonly em: EntityManager) {
    this.userRepo = em.getRepository(UserSchema);
  }

  create(
    name: string,
    age: number,
    email: string,
    password: string,
  ): Promise<User> {
    return this.userRepo.save({
      name: name,
      age: age,
      email: email,
      password: password,
    });
  }

  getAllUsers(): Promise<User[]> {
    return this.userRepo.find();
  }

  getUser(email: string, password: string): Promise<User> {
    return this.userRepo.findOne({
      where: { email: email, password: password },
    });
  }

  getUserById(id: string): Promise<User> {
    return this.userRepo.findOne({ where: { uuid: id } });
  }

  getUsersByIds(ids: string[]): Promise<User[]> {
    return this.userRepo.findByIds(ids);
  }

  async updateUser(
    id: string,
    name: string,
    age: number,
    email: string,
    password: string,
  ): Promise<User> {
    const updatedUser = await this.getUserById(id);
    updatedUser.name = name;
    updatedUser.age = age;
    updatedUser.email = email;
    updatedUser.password = password;
    return this.userRepo.save(updatedUser);
  }

  async removeUser(id: string) {
    await this.userRepo.delete(id);
  }
}
