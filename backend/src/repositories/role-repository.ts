import { Roles } from "@prisma/client";



export interface RoleRepository {
  register(name: string): Promise<void>;
  findByName(name: string): Promise<Roles | null>;
  list(search?: string): Promise<Roles[] | null>;
  findById(id: string): Promise<Roles | null>;
}