import { Role } from "entities/role";

export interface RoleRepository {
  create(data: Role): Promise<void>;
  findByName(name: string): Promise<Role | null>;
  findById(id: string): Promise<Role | null>;
}