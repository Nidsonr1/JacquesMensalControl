import { ILoginUserRequest } from "@DTO/user";
import { User } from "entities/user";



export interface UserRepository {
  create(data: User): Promise<void>;
  findByName(name: string): Promise<User | null>;
  findByCim(cim: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
}