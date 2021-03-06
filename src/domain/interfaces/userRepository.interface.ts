import { User } from '../core/user.entity';

export interface IUserRepository {
  create(
    name: string,
    age: number,
    email: string,
    password: string,
    avatar: string,
  ): Promise<User>;

  getUser(email: string, password: string): Promise<User>;

  getAllUsers(): Promise<User[]>;

  getUserById(id: string): Promise<User>;

  getUsersByIds(ids: string[]): Promise<User[]>;

  updateUser(
    id: string,
    name: string,
    age: number,
    email: string,
    password: string,
    avatar: string,
  ): Promise<User>;

  removeUser(id: string);
}
