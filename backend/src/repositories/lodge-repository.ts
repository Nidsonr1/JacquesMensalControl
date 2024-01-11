import { IRegisterLodgeRequest } from "@DTO/lodges";
import { Lodges } from "@prisma/client";




export interface LodgeRepository {
  register(data: IRegisterLodgeRequest): Promise<void>;
  findByName(name: string): Promise<Lodges | null>;
  list(search?: string): Promise<Lodges[] | null>;
}