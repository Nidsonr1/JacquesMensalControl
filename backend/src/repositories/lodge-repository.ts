import { Lodge } from "entities/lodge";

export interface LodgeRepository {
  create(data: Lodge): Promise<void>;
  findById(id: string): Promise<Lodge | null>;
  findByName(name: string): Promise<Lodge | null>;
  list(): Promise<Lodge[] | null>;
}